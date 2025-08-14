const { onCall } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
try { admin.app(); } catch { admin.initializeApp(); }
const db = admin.database();

exports.incrementView = onCall(async (req) => {
    const uid = req.auth?.uid;
    const { postId } = req.data || {};
    if (!postId) throw new Error("MISSING_POST_ID");
    if(!uid) throw new Error("UNAUTHENTICATED");

    //「この投稿をこのユーザーが見たことがあるか」を記録する場所
    const seenRef = db.ref(`analytics/views/${postId}/seen/${uid}`);
    //「この投稿の閲覧合計数」の場所
    const countRef = db.ref(`analytics/views/${postId}/count`);

    //すでに見たことがある（=重複）なら何もしないで終了
    const seenSnap = await seenRef.get();
    if (seenSnap.exists()) return { ok: true, counted: false};

    await countRef.transaction((cur) => (cur || 0) + 1);

    await seenRef.set(true);

    return { ok: true, counted: true };

});