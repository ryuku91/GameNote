import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";

export default function TopBar({ title = "🎮 GameNote" }) {
  return (
    <header className="bg-blue-600 text-white py-3 shadow-md">
      <div className="max-w-3xl mx-auto px-4 flex items-center justify-between">
      <Link
          to="/app/dm/contacts"
          className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded"
        >
          メッセージ
        </Link>
        <h1 className="text-lg md:text-xl font-bold">{title}</h1>
        <div className="flex items-center gap-2">
          <Link
            to="/app/profile"
            className="text-sm bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
          >
            プロフィール
          </Link>
          <button
            onClick={() => signOut(auth)}
            className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded"
          >
            ログアウト
          </button>
        </div>
      </div>
    </header>
  );
}