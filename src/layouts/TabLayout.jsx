import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function TabLayout({ user }) {
  const nav = useNavigate();
  const { pathname } = useLocation();

  // 投稿ページでは＋を隠す
  const showFab = !pathname.startsWith("/app/post/new");

  return (
    <div className="min-h-screen flex flex-col">
      {/* 本文 */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* 右下の＋（投稿画面へ遷移） */}
      {showFab && (
        <button
        onClick={() => {
                      // 未ログイン or 匿名ログインのときはアラートを出してログイン画面へ
                      if (!user || user.isAnonymous) {
                        alert("ログインしたら投稿できます。");
                        nav("/login");
                        return;
                      }
                      // ログイン済みなら投稿ページへ
                      nav("/app/post/new");
                    }}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg bg-blue-600 text-white text-3xl leading-none hover:bg-blue-700 active:scale-95 transition"
          aria-label="新規投稿"
        >
          +
        </button>
      )}
    </div>
  );
}