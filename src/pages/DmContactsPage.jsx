// src/pages/DmContactsPage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, functions } from "../firebase/firebase";
import { ref as dbRef, onValue, get } from "firebase/database";
import { httpsCallable } from "firebase/functions";

export default function DmContactsPage({ user }) {
  const nav = useNavigate();
  const [followings, setFollowings] = useState([]); // {uid, displayName, profileUrl}[]
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");

  // 新レイアウト → （失敗or空なら）旧レイアウトを見る
  const readFollowingMap = async (uid) => {
    // ① 新: /social/following/<uid>/<targetUid>: true
    try {
      const s1 = await get(dbRef(db, `social/following/${uid}`));
      if (s1.exists()) {
        console.debug("[DM Contacts] hit social/following for", uid, s1.val());
        return s1.val() || {};
      }
    } catch (e) {
      console.warn("[DM Contacts] cannot read social/following:", e?.message || e);
    }

    // ② 旧: /following/<uid>/<targetUid>: true
    try {
      const s2 = await get(dbRef(db, `following/${uid}`));
      if (s2.exists()) {
        console.debug("[DM Contacts] hit legacy following for", uid, s2.val());
        return s2.val() || {};
      }
    } catch (e) {
      console.warn("[DM Contacts] cannot read legacy following:", e?.message || e);
    }

    console.debug("[DM Contacts] no following map for", uid);
    return {};
  };

  // 軽いノード（followingCount）をトリガにして都度 get() でマップを読む
  useEffect(() => {
    if (!user?.uid) return;

    const triggerRef = dbRef(db, `users/${user.uid}/stats/followingCount`);
    const unsub = onValue(
      triggerRef,
      async () => {
        try {
          console.debug("[DM Contacts] refresh for", user.uid);
          const map = await readFollowingMap(user.uid);
          const uids = Object.keys(map);
          if (uids.length === 0) {
            setFollowings([]);
            setLoading(false);
            return;
          }

          const profiles = await Promise.all(
            uids.map(async (uid) => {
              const snap = await get(dbRef(db, `users/${uid}`));
              const v = snap.val() || {};
              return {
                uid,
                displayName: v.displayName || "(名無し)",
                profileUrl: v.profileUrl || "",
              };
            })
          );

          profiles.sort((a, b) =>
            (a.displayName || "").localeCompare(b.displayName || "", "ja")
          );
          setFollowings(profiles);
          setLoading(false);
        } catch (err) {
          console.error("[DM Contacts] load error:", err);
          setFollowings([]);
          setLoading(false);
        }
      },
      (err) => {
        console.error("[DM Contacts] trigger error:", err);
        setFollowings([]);
        setLoading(false);
      }
    );

    return () => unsub();
  }, [user?.uid]);

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return followings;
    return followings.filter((x) =>
      (x.displayName || "").toLowerCase().includes(t)
    );
  }, [q, followings]);

  const startDm = async (targetUid) => {
    try {
      const fn = httpsCallable(functions, "createOrGetConversation");
      const res = await fn({ targetUid });
      const cid = res?.data?.cid;
      if (cid) nav(`/app/dm/${cid}`);
    } catch (e) {
      console.error(e);
      alert("DMルームの作成に失敗しました");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-3">メッセージ相手を選ぶ</h1>

      <input
        className="w-full border rounded px-3 py-2 mb-3"
        placeholder="ユーザー検索（フォロー中）"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      {loading ? (
        <div className="text-gray-500">読み込み中…</div>
      ) : filtered.length === 0 ? (
        <div className="text-gray-500">フォロー中のユーザーがいません</div>
      ) : (
        <ul className="divide-y bg-white rounded shadow">
          {filtered.map((u) => (
            <li
              key={u.uid}
              className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer"
              onClick={() => startDm(u.uid)}
            >
              {u.profileUrl ? (
                <img
                  src={u.profileUrl}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-300" />
              )}
              <div className="flex-1">
                <div className="font-medium">{u.displayName}</div>
              </div>
              <div className="text-blue-600 text-sm">DMへ</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
