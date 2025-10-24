import { useEffect, useState } from "react";
import { ref as dbRef, onValue, query, orderByChild, limitToLast, push } from "firebase/database";
import { db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function CommentSection({ postId, user, userProfile }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const navigate = useNavigate();

  // 最新20件（古い→新しいで取得してから並べ替え）
  useEffect(() => {
    const q = query(
      dbRef(db, `posts/${postId}/comments`),
      orderByChild("createdAt"),
      limitToLast(20)
    );
    return onValue(q, (snap) => {
      const v = snap.val() || {};
      const list = Object.entries(v).map(([id, c]) => ({ id, ...c }));
      list.sort((a, b) => a.createdAt - b.createdAt);
      setComments(list);
    });
  }, [postId]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (!user || user.isAnonymous) {
      if (window.confirm("コメントするにはログインが必要です。ログインしますか？")) {
        navigate("/login");
      }
      return;
    }

    setSending(true);
    try {
      const payload = {
        uid: user.uid,
        userName: userProfile?.displayName || user.displayName || user.email || "ユーザー",
        userImage: userProfile?.profileUrl || "",
        text: text.trim(),
        createdAt: Date.now(),
      };
      await push(dbRef(db, `posts/${postId}/comments`), payload);
      setText("");
    } catch (e) {
      console.error("コメント送信失敗:", e);
      alert("送信に失敗しました。時間を置いて再度お試しください。");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="mt-3 border-t pt-3">
      <h4 className="font-semibold text-sm mb-2">コメント</h4>

      <div className="space-y-2 max-h-60 overflow-auto pr-1">
        {comments.length === 0 && (
          <p className="text-xs text-gray-500">まだコメントはありません。</p>
        )}
        {comments.map((c) => (
          <div key={c.id} className="text-sm bg-gray-50 rounded p-2">
            <div className="flex items-center gap-2 mb-1">
              {c.userImage ? (
                <img src={c.userImage} alt="" className="w-5 h-5 rounded-full object-cover" />
              ) : (
                <div className="w-5 h-5 rounded-full bg-gray-300" />
              )}
              <span className="text-gray-700">{c.userName || "ユーザー"}</span>
              <span className="text-xs text-gray-400 ml-auto">
                {new Date(c.createdAt).toLocaleString()}
              </span>
            </div>
            <p className="whitespace-pre-wrap break-words">{c.text}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex gap-2 mt-3">
        <input
          className="flex-1 border rounded px-2 py-1 text-sm"
          placeholder="コメントを入力…（500文字まで）"
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, 500))}
        />
        <button
          className="text-sm bg-blue-500 text-white px-3 py-1 rounded disabled:opacity-60"
          disabled={sending || !text.trim()}
          type="submit"
        >
          送信
        </button>
      </form>
    </div>
  );
}
