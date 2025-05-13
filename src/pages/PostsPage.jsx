import { useState, useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { db, storage } from '../firebase/firebase';
import { ref as dbRef, onValue, push, update, remove } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const PostsPage = ({ user }) => {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState(0);
  const [imageFile, setImageFile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  

  useEffect(() => {
    const postsRef = dbRef(db, 'posts');
    return onValue(postsRef, (snapshot) => {
      const data = snapshot.val() || {};
      const loadedPosts = Object.entries(data).map(([id, value]) => ({ id, ...value })).reverse();
      setPosts(loadedPosts);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !comment || !rating) return;
    const timestamp = new Date().toLocaleString();

    let downloadURL = '';
    if (imageFile) {
      const imgRef = storageRef(storage, `images/${Date.now()}_${imageFile.name}`);
      const snapshot = await uploadBytes(imgRef, imageFile);
      downloadURL = await getDownloadURL(snapshot.ref);
    }

    if (editingId) {
      await update(dbRef(db, `posts/${editingId}`), { 
        title, 
        comment, 
        genre, 
        rating, 
        imageUrl: downloadURL,
        timestamp, 
      });
      setEditingId(null);
    } else {
      const newPost = {
        title,
        comment,
        genre,
        rating,
        imageUrl: downloadURL,
        timestamp,
        userId: user.uid,
        userName: user.displayName || user.email,
      };
      await push(dbRef(db, 'posts'), newPost);
    }
    setTitle('');
    setComment('');
    setImageFile(null);
  };

  const handleDelete = async (id) => {
    await remove(dbRef(db, `posts/${id}`));
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setComment(post.comment);
    setGenre(post.genre || '');
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
        genre={genre}
        setGenre={setGenre}
        rating={rating}
        setRating={setRating}
        imageFile={imageFile}
        setImageFile={setImageFile}
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