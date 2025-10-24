import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import PostList from "../components/PostList";
import { db } from "../firebase/firebase.js";
import { ref as dbRef, onValue, get, remove } from "firebase/database";

export default function PostsPage({ user }) {
  const [posts, setPosts] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    if (!user?.uid) return;
    (async () => {
      const snap = await get(dbRef(db, `users/${user.uid}`));
      setUserProfile(snap.val());
    })();
  }, [user]);

  useEffect(() => {
    const postsRef = dbRef(db, "posts");
    return onValue(postsRef, (snap) => {
      const data = snap.val() || {};
      const loaded = Object.entries(data)
        .map(([id, v]) => ({ id, ...v }))
        .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      setPosts(loaded);
    });
  }, []);

  useEffect(() => {
    const postsRef = dbRef(db, "posts");
    return onValue(postsRef, (snap) => {
      const data = snap.val() || {};
      const loaded = Object.entries(data)
        .map(([id, v]) => {
          // createdAt (number) → そのまま
          // なければ timestamp (string) を Date.parse で補完
          const created =
            typeof v.createdAt === "number"
              ? v.createdAt
              : v.timestamp
              ? Date.parse(v.timestamp) || 0
              : 0;
          return { id, ...v, _createdAt: created };
        })
        // 新しい順に並べる（降順）
        .sort((a, b) => b._createdAt - a._createdAt);

      setPosts(loaded);
    });
  }, []);

   // 削除
   const handleDelete = async (post) => {
    if (!user?.uid || user.uid !== post.userId) {
      alert("削除できません");
      return;
    }
    if (!confirm("この投稿を削除しますか？")) return;
    try {
      await remove(dbRef(db, `posts/${post.id}`));
    } catch (e) {
      console.error(e);
      alert("削除に失敗しました");
    }
  };

  // 編集（編集ページへ）
  const handleEdit = (post) => {
    if (!user?.uid || user.uid !== post.userId) {
      alert("編集できません");
      return;
    }
    nav(`/app/post/${post.id}/edit`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <TopBar title="🎮 GameNote 投稿一覧" />
      <main className="max-w-2xl mx-auto p-4">
        <PostList
        posts={posts}
        user={user}
        userProfile={userProfile}
        onEdit={handleEdit}
        onDelete={handleDelete}
        />
      </main>
    </div>
  );
}