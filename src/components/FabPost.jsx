import { useNavigate, useLocation } from "react-router-dom";

export default function FabPost({ user }) {
  const nav = useNavigate();
  const { pathname } = useLocation();

  // 投稿画面では非表示
  if (pathname.startsWith("/post/new")) return null;

  const go = () => {
    if (!user || user.isAnonymous) {
      nav("/login");
      return;
    }
    nav("/post/new", { state: { from: pathname } });
  };

  return (
    <button
      onClick={go}
      aria-label="新規投稿"
      className="fixed bottom-20 right-5 md:bottom-8 md:right-8 rounded-full shadow-lg
                 w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white text-3xl leading-none
                 hover:bg-blue-700 active:scale-95 transition"
    >
      +
    </button>
  );
}
