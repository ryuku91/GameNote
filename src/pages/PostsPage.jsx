import { useState, useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { db } from '../firebase/firebase';
import { ref, onValue, push, update, remove } from 'firebase/database';

const PostsPage = ({ user }) => {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [posts, setPosts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const postsRef = ref(db, 'posts');
    return onValue(postsRef, (snapshot) => {
      const data = snapshot.val() || {};
      const loadedPosts = Object.entries(data).map(([id, value]) => ({ id, ...value })).reverse();
      setPosts(loadedPosts);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !comment) return;
    const timestamp = new Date().toLocaleString();

    if (editingId) {
      await update(ref(db, `posts/${editingId}`), { title, comment, timestamp });
      setEditingId(null);
    } else {
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

  const handleDelete = async (id) => {
    await remove(ref(db, `posts/${id}`));
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setComment(post.comment);
    setEditingId(post.id);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎮 GameNote 投稿一覧</h1>
      <PostForm
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        comment={comment}
        setComment={setComment}
        editingId={editingId}
        user={user}
      />
      <PostList
        posts={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default PostsPage;