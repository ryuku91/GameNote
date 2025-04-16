import { useState, useEffect } from 'react';
import firebaseApp from './firebase';
import AuthComponent from './AuthComponent';

function App() {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [posts, setPosts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  

  // ローカルストレージから読み込み
  useEffect(() => {
    const saved = localStorage.getItem('gameNotes');
    if (saved) {
      setPosts(JSON.parse(saved));
    }
  }, []);

  // 投稿処理
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !comment) return;

    const timestamp = new Date().toLocaleString(); // 投稿日時を取得

    if (editingId) {
      // 編集モード中なら更新
      const updatedPosts = posts.map((post) =>
        post.id === editingId
          ? { ...post, title, comment, timestamp } // 編集時にも日時更新
          : post
      );
      setPosts(updatedPosts);
      localStorage.setItem('gameNotes', JSON.stringify(updatedPosts));
      setEditingId(null);
    } else {
      // 新規投稿
      const newPost = {
        id: Date.now(),
        title,
        comment,
        timestamp, // 投稿日時をセット
      };
      const updatedPosts = [newPost, ...posts];
      setPosts(updatedPosts);
      localStorage.setItem('gameNotes', JSON.stringify(updatedPosts));
    }

    setTitle('');
    setComment('');
  };

  // 削除処理
  const handleDelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('gameNotes', JSON.stringify(updatedPosts));
  };

  // 編集モード突入
  const handleEdit = (post) => {
    setTitle(post.title);
    setComment(post.comment);
    setEditingId(post.id);
  };



  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎮 {firebaseApp.name}</h1>
      <h2>ログイン画面</h2>
      <AuthComponent />


      <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <input
          className="border p-2 w-full"
          placeholder="ゲームタイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2 w-full"
          placeholder="感想を入力..."
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          {editingId ? '更新する' : '投稿'}
        </button>
      </form>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-3 rounded relative">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.comment}</p>
            <p className="text-sm text-gray-500 mt-1">投稿日: {post.timestamp}</p> {/* 投稿日時を表示 */}
            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleEdit(post)}
                className="text-blue-500 text-sm hover:underline"
              >
                編集
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="text-red-500 text-sm hover:underline"
              >
                削除
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

