import { useParams } from "react-router-dom";
import { useEffect, useRef, useState, useMemo } from "react";
import { db } from "../firebase/firebase";
import {
  ref as dbRef,
  push,
  onValue,
  query,
  orderByChild,
  limitToLast,
  get,
} from "firebase/database";
import { httpsCallable } from "firebase/functions";
import { functions } from "../firebase/firebase";

export default function DmRoomPage({ user }) {
  const { cid } = useParams();
  const [msgs, setMsgs] = useState([]);
  const [text, setText] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const bottomRef = useRef(null);

   // 相手の UID を cid から取り出す（cid は a_b 形式）
   const otherUid = useMemo(() => {
    const parts = (cid || "").split("_");
    if (!user?.uid) return parts[0] || "";
    return parts.find((u) => u !== user.uid) || parts[0] || "";
  }, [cid, user?.uid]);

   // 相手の表示名を取得
   useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!otherUid) { setPartnerName(""); return; }
      const candidates = [
        `users/${otherUid}/profile/displayName`, // よくある置き場
        `users/${otherUid}/displayName`,
        `users/${otherUid}/name`,
      ];
      for (const path of candidates) {
        try {
          const snap = await get(dbRef(db, path));
          const v = snap.val();
          if (v) {
            if (!cancelled) setPartnerName(String(v));
            return;
          }
        } catch (e) {
                    // 開発時のみログ（空ブロック回避）
                  if (import.meta.env?.MODE !== "production") {
                    console.debug("failed to get displayName from", path, e);
                  }
                }
      }
      if (!cancelled) setPartnerName(otherUid.slice(0, 8) + "…"); // フォールバック
    })();
    return () => { cancelled = true; };
  }, [otherUid]);

  useEffect(() => {
    const q = query(
      dbRef(db, `dm/messages/${cid}`),
      orderByChild("createdAt"),
      limitToLast(50)
    );
    return onValue(q, async (s) => {
      const v = s.val() || {};
      const arr = Object.entries(v).map(([id, m]) => ({ id, ...m }));
      arr.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
      setMsgs(arr);
      try {
        await httpsCallable(functions, "markRead")({ cid });
      } catch (err) {
        if (process.env.NODE_ENV !== "production") {
          console.debug("markRead failed:", err);
        }
      }
    });
  }, [cid]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  const send = async (e) => {
    e.preventDefault();
    if (!text.trim() || !user?.uid) return;
    try {
      await push(dbRef(db, `dm/messages/${cid}`), {
        from: user.uid,
        text: text.trim(),
        createdAt: Date.now(),
        type: "text",
      });
      setText("");
    } catch (e) {
      console.error(e);
      alert("送信に失敗しました");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 h-[calc(100vh-100px)] flex flex-col">
      <h2 className="text-xl font-bold mb-2 break-all">DM: {partnerName ? `@${partnerName}` : "読み込み中…"}</h2>
      <div className="flex-1 overflow-auto space-y-2 p-2 bg-gray-50 rounded">
        {msgs.map((m) => (
          <div
            key={m.id}
            className={`max-w-[70%] p-2 rounded ${
              m.from === user.uid ? "bg-blue-100 ml-auto" : "bg-white"
            }`}
          >
            <div className="text-sm whitespace-pre-wrap break-words">{m.text}</div>
            <div className="text-[10px] text-gray-500">
              {m.createdAt ? new Date(m.createdAt).toLocaleTimeString() : ""}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={send} className="mt-2 flex gap-2">
        <input
          className="flex-1 border rounded px-2 py-1"
          placeholder="メッセージを入力"
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, 1000))}
        />
        <button
          className="px-3 py-1 rounded bg-blue-500 text-white disabled:opacity-50"
          disabled={!text.trim()}
        >
          送信
        </button>
      </form>
    </div>
  );
}
