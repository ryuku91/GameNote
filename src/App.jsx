import { useState, useEffect } from 'react';

import PostForm from './components/PostForm';

import { db } from './firebase/firebase';
import { ref, push, update, remove, onValue } from 'firebase/database'
import AuthComponent from './components/AuthComponent';
import PostList from './components/PostList';

const App = () =>  {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [posts, setPosts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  

  // useEffectでFirebaseから投稿取得
  useEffect(() => {
    const postsRef = ref(db, `posts`);
    const unsubscribe = onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      if(data) {
        const loadedPosts = Object.entries(data).map(([id, value]) => ({
          id,
          ...value
        }));
        setPosts(loadedPosts.reverse());
      } else {
        setPosts([]);
      }
    });

    return () => unsubscribe();
  }, []);
   

  // 投稿処理
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !comment) return;

    
    const timestamp = new Date().toLocaleString(); // 投稿日時を取得

    if (editingId) {
      // 編集モード
      const postRef = ref(db, `posts/${editingId}`);
      await update(postRef, {
        title,
        comment,
        timestamp,
      })
      setEditingId(null);
    } else {
      // 新規投稿
      const newPost = {
        title,
        comment,
        timestamp,
        userId: user.uid,
        userName: user.displayName || user.email,
      };
      await push(ref(db, 'posts'), newPost);
    }

    setTitle('');
    setComment('');
  };

  // 削除処理
  const handleDelete = async (id) => {
    await remove(ref(db, `posts/${id}`))
  };

  // 編集モード突入
  const handleEdit = (post) => {
    setTitle(post.title);
    setComment(post.comment);
    setEditingId(post.id);
  };



  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎮 GameNote</h1>
      <h2>ログイン画面</h2>
      <AuthComponent onAuthChange={setUser}/>

      {user ? (
        <>
        <PostForm handleSubmit={handleSubmit} 
                title={title} 
                setTitle={setTitle} 
                comment={comment} 
                setComment={setComment} 
                editingId={editingId}
                user={user}/>

        <PostList posts={posts} handleEdit={handleEdit} handleDelete={handleDelete}/>
        </>
      ) : (
        <p className="text-center text-gray-600 mt-4">投稿するはログインしてください</p>
      )
    }
    </div>
  );
}

export default App;

