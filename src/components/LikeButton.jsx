import { useEffect, useState } from "react";
import { ref as dbRef, onValue } from "firebase/database";
import { httpsCallable } from "firebase/functions";
import { db, functions } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function LikeButton({ postId, user }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [ready, setReady]   = useState(false); // 初期読み込み完了
  const [busy, setBusy]     = useState(false); // 多重クリック防止
  const uid = user?.uid;
  const navigate = useNavigate();

  // 自分の like 状態
  useEffect(() => {
    if (!uid) {
        setLiked(false);
        setReady(true);
        console.log("[like] no uid -> ready=true");
        return;
    }
    const r = dbRef(db, `likes/${postId}/${uid}`);
    return onValue(r, (snap) => {
        setLiked(!!snap.val());
        setReady(true);
    });
  }, [postId, uid]);

  // 合計カウント
  useEffect(() => {
    const r = dbRef(db, `posts/${postId}/likesCount`);
    return onValue(r, (snap) => setCount(snap.val() || 0));
  }, [postId]);

  const handleClick = async () => {
    // 未ログイン or ゲストはログイン促し
    if (!user || user.isAnonymous) {
      if (window.confirm("ログインすると『いいね』できます。ログインしますか？")) {
        navigate("/login");
      }
      return;
    }
    setBusy(true);
    try {
        const call = httpsCallable(functions, "toggleLike");
        await call({ postId, like: !liked }); // サーバが冪等的に処理
        // ここで setLiked / setCount はしない（RTDBのonValueに任せる）
      } catch (e) {
        console.error(e);
      } finally {
        setBusy(false);
      }
    };

  return (
    <button
      onClick={handleClick}
      disabled={!ready || busy}
      className={`text-sm px-2 py-1 rounded ${liked ? "bg-pink-100 text-pink-600" : "bg-gray-100 text-gray-600"}`}
      title={liked ? "いいね取消" : "いいねする"}
    >
      ❤ {count}{busy ? "…" : ""}
    </button>
  );
}
