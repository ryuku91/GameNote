const {onCall} = require("firebase-functions/v2/https");
const { database } = require("firebase-functions/v2");
const logger = require("firebase-functions/logger");

const { initializeApp } = require("firebase-admin/app");
const { getDatabase } = require("firebase-admin/database");
const { getStorage } = require("firebase-admin/storage");
initializeApp();

//閲覧数
exports.incrementView = onCall(async (request) => {
    const uid = request.auth?.uid;
    if (!uid) throw new Error("auth required");

    const { postId } = request.data || {};
    if (!postId) throw new Error("postId required");

    const db = getDatabase();
    const day = new Date().toISOString().slice(0, 10);
    const markRef  = db.ref(`analytics/viewsByUser/${postId}/${uid}/${day}`);
    const countRef = db.ref(`analytics/views/${postId}/count`);

    const markTxn = await markRef.transaction((cur) => {
        if (cur) return undefined;   // ← 中止（重要）
        return true;                 // 初回だけ true を書く
        });

        if (!markTxn.committed) {
        return { ok: true, counted: 0 };
        }
        await countRef.transaction((n) => (n || 0) + 1);
        return { ok: true, counted: 1 };
});

//いいねのトグル
exports.toggleLike = onCall(async (request) => {
    const uid = request.auth?.uid;
    if (!uid) throw new Error("auth required");

    const { postId, like } = request.data || {};
    if (!postId || typeof like !== "boolean") throw new Error("bad args");

    const db = getDatabase();
    const userLikeRef = db.ref(`likes/${postId}/${uid}`);
    const countRef = db.ref(`posts/${postId}/likesCount`);
    let delta = 0; // 変化があったら +1/-1 を入れる

    const t = await userLikeRef.transaction((cur) => {
      const prev = !!cur;               // 以前の状態（true = いいね済み）
      const next = like ? true : null;  // 今回の要求（true = 付ける / null = 外す）
      if (prev === (!!next)) {
        // 変化なし → 値は変更せず（ここで delta は 0 のまま）
        return cur;
      }
      // 変化あり → delta 決定
      delta = like ? 1 : -1;
      return next;
    });

    // 値が（再試行後も含め）確定して、かつ変化があった時だけカウント更新
    if (t.committed && delta !== 0) {
      await countRef.transaction((n) => Math.max(0, (n || 0) + delta));
    }

    return { ok: true, changed: delta !== 0 };
});

// 追加（コメント数インクリメント）
exports.onCommentCreate = database.onValueCreated(
    { ref: "posts/{postId}/comments/{commentId}" },
    async (event) => {
      const { postId } = event.params;
      const ref = getDatabase().ref(`posts/${postId}/commentsCount`);
      await ref.transaction((n) => (n || 0) + 1);
    }
  );

  // 追加（コメント数デクリメント）
  exports.onCommentDelete = database.onValueDeleted(
    { ref: "posts/{postId}/comments/{commentId}" },
    async (event) => {
      const { postId } = event.params;
      const ref = getDatabase().ref(`posts/${postId}/commentsCount`);
      await ref.transaction((n) => Math.max(0, (n || 0) - 1));
    }
  );
  /**
 * フォローのトグル
 * data: { targetUid: string, follow: boolean }
 */
exports.toggleFollow = onCall(async (request) => {
    const uid = request.auth?.uid;
    if (!uid) throw new Error("auth required");

    const { targetUid, follow } = request.data || {};
    if (!targetUid || typeof follow !== "boolean") throw new Error("bad args");
    if (uid === targetUid) throw new Error("cannot follow yourself");

    const db = getDatabase();
    const followingRef = db.ref(`social/following/${uid}/${targetUid}`);
    const followersRef = db.ref(`social/followers/${targetUid}/${uid}`);
    const myFollowingCountRef = db.ref(`users/${uid}/stats/followingCount`);
    const targetFollowersCountRef = db.ref(`users/${targetUid}/stats/followersCount`);

    // 1) 自分側の following をトランザクションで更新
    let delta = 0;
    const t = await followingRef.transaction((cur) => {
      const prev = !!cur;
      const next = follow ? true : null;
      if (prev === (!!next)) return cur;   // 変化なし
      delta = follow ? 1 : -1;
      return next;
    });

    // 2) 変化あった場合のみ、逆エッジとカウントを更新
    if (t.committed && delta !== 0) {
      if (follow) {
        await followersRef.set(true);
      } else {
        await followersRef.remove();
      }
      await myFollowingCountRef.transaction((n) => Math.max(0, (n || 0) + delta));
      await targetFollowersCountRef.transaction((n) => Math.max(0, (n || 0) + delta));
    }

    return { ok: true, changed: delta !== 0 };
  });

  // === DM: 作成/取得 ===
exports.createOrGetConversation = onCall(async (req) => {
    const me = req.auth?.uid;
    const targetUid = req.data?.targetUid;
    if (!me) throw new Error("auth required");
    if (!targetUid || targetUid === me) throw new Error("bad args");

    const a = me < targetUid ? me : targetUid;
    const b = me < targetUid ? targetUid : me;
    const cid = `${a}_${b}`;

    const db = getDatabase();
    const convRef = db.ref(`dm/conversations/${cid}`);
    const snap = await convRef.get();
    if (!snap.exists()) {
      const now = Date.now();
      await convRef.set({
        members: { [a]: true, [b]: true },
        memberMeta: { [a]: { unread: 0, lastSeen: 0 }, [b]: { unread: 0, lastSeen: 0 } },
        lastMessage: null,
        updatedAt: now,
      });
      await db.ref(`users/${a}/dmList/${cid}`).set({ updatedAt: now });
      await db.ref(`users/${b}/dmList/${cid}`).set({ updatedAt: now });
    }
    return { ok: true, cid };
  });

  // === DM: 新着メッセージ反映 ===
  exports.onDmMessageCreate = database.onValueCreated(
    { ref: "dm/messages/{cid}/{msgId}" },
    async (event) => {
      const { cid } = event.params;
      const db = getDatabase();
      const msg = event.data.val();
      const now = Date.now();

      await db.ref(`dm/conversations/${cid}/lastMessage`).set({
        text: (msg.text || "").slice(0, 100),
        from: msg.from,
        createdAt: msg.createdAt,
      });
      await db.ref(`dm/conversations/${cid}/updatedAt`).set(now);

      const members =
        (await db.ref(`dm/conversations/${cid}/members`).get()).val() || {};
      for (const uid of Object.keys(members)) {
        if (uid !== msg.from) {
          await db
            .ref(`dm/conversations/${cid}/memberMeta/${uid}/unread`)
            .transaction((n) => (n || 0) + 1);
        }
        await db.ref(`users/${uid}/dmList/${cid}/updatedAt`).set(now);
      }
    }
  );

  // === DM: 既読 ===
  exports.markRead = onCall(async (req) => {
    const me = req.auth?.uid;
    const cid = req.data?.cid;
    if (!me || !cid) throw new Error("bad args");
    const db = getDatabase();
    await db.ref(`dm/conversations/${cid}/memberMeta/${me}`).update({
      unread: 0,
      lastSeen: Date.now(),
    });
    return { ok: true };
  });

/**
 * （任意）投稿削除で画像も掃除
 *  - posts/{postId} の削除を検知し、imageUrl のオブジェクトを Storage から削除
 */
exports.onPostDelete = database.onValueDeleted(
    { ref: "posts/{postId}" },
    async (event) => {
      const before = event.data?.before?.val?.() ?? null;
      const url = before?.imageUrl;
      if (!url) return;
      try {
        const name = new URLSearchParams(new URL(url).search).get("name"); // object name
        if (name) await getStorage().bucket().file(name).delete({ ignoreNotFound: true });
      } catch (e) {
        logger.warn("cleanup failed", e);
      }
    }
  );