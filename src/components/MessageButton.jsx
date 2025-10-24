import { httpsCallable } from "firebase/functions";
import { functions } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function MessageButton({ targetUid, user }) {
  const nav = useNavigate();

  const startChat = async () => {
    if (!user || user.isAnonymous) {
      if (window.confirm("ログインするとメッセージできます。ログインしますか？")) {
        nav("/login");
      }
      return;
    }
    try {
      const call = httpsCallable(functions, "createOrGetConversation");
      const res = await call({ targetUid });
      const cid = res?.data?.cid;
      if (cid) nav(`/app/dm/${cid}`);
    } catch (e) {
      console.error(e);
      alert("メッセージ開始に失敗しました");
    }
  };

  return (
    <button
      onClick={startChat}
      className="text-sm px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600"
    >
      メッセージ
    </button>
  );
}
