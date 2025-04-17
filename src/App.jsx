import { useState, useEffect } from 'react';

import PostForm from './components/PostForm';

import firebaseApp from './firebase/firebase';
import AuthComponent from './components/AuthComponent';
import PostList from './components/PostList';

const App = () =>  {
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


      <PostForm handleSubmit={handleSubmit} 
                title={title} 
                setTitle={setTitle} 
                comment={comment} 
                setComment={setComment} 
                editingId={editingId}/>

      <PostList posts={posts} handleEdit={handleEdit} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;

