import { useEffect, useState } from "react";
import { ref as dbRef, onValue } from "firebase/database";
import { httpsCallable } from "firebase/functions";
import { db, functions } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function FollowButton({ targetUid, user }) {
  const [following, setFollowing] = useState(false);
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);
  const uid = user?.uid;
  const navigate = useNavigate();

  useEffect(() => {
    if (!uid) { setFollowing(false); setReady(true); return; }
    const r = dbRef(db, `social/following/${uid}/${targetUid}`);
    return onValue(r, (snap) => { setFollowing(!!snap.val()); setReady(true); });
  }, [uid, targetUid]);

  const handleClick = async () => {
    if (!user || user.isAnonymous) {
      if (window.confirm("ログインするとフォローできます。ログインしますか？")) {
        navigate("/login");
      }
      return;
    }
    if (uid === targetUid) return; // 自分は不可
    setBusy(true);
    try {
      const call = httpsCallable(functions, "toggleFollow");
      await call({ targetUid, follow: !following });
      // 状態更新は RTDB onValue に任せる
    } catch (e) {
      console.error(e);
      alert("フォロー処理に失敗しました");
    } finally {
      setBusy(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={!ready || busy || uid === targetUid}
      className={`text-sm px-3 py-1 rounded ${following ? "bg-gray-200" : "bg-blue-500 text-white"}`}
    >
      {following ? "フォロー中" : "フォロー"}
    </button>
  );
}
