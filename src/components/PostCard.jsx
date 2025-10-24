import { useEffect, useRef } from "react";
import { httpsCallable } from "firebase/functions";
import { functions } from "../firebase/firebase";

export default function PostCard({ post, children, user }) {
  const rootRef = useRef(null);
  const observedOnceRef = useRef(false); // クライアント二重実行防止

  useEffect(() => {
    if (!rootRef.current) return;

    const io = new IntersectionObserver(
      (entries) => {
        const ent = entries[0];
        if (!ent.isIntersecting) return;

        // 1) 一度発火したら即監視解除（再レンダー/再マウントでも再発火させない）
        io.unobserve(ent.target);

        // 未ログイン or 匿名はカウントしない
        if (!user || user.isAnonymous) return;

        // 2) 同ユーザー×同日×同投稿のローカル冪等ガード
        const day = new Date().toISOString().slice(0, 10); // UTC "YYYY-MM-DD"
        const key = `viewed:${post.id}:${user.uid}:${day}`;
        if (localStorage.getItem(key)) return;

        // 3) 二重クリック・ダブルレンダー対策
        if (observedOnceRef.current) return;
        observedOnceRef.current = true;

        const call = httpsCallable(functions, "incrementView");
        call({ postId: post.id })
          .then((res) => {
            const counted = res?.data?.counted;
            if (counted === 1) {
              try { localStorage.setItem(key, "1"); } catch(e) {
                console.debug("localStorage unavailable:", e);
              }
            }
          })
          .catch(console.error);
      },
      { threshold: 0.5 }
    );

    io.observe(rootRef.current);
    return () => io.disconnect();
  }, [post.id, user]);

  return (
    <div ref={rootRef} className="border p-3 rounded relative">
      {children}
    </div>
  );
}
