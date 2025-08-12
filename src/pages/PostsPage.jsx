import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { db, storage, auth } from '../firebase/firebase.js';
import { signOut } from 'firebase/auth';
import { ref as dbRef, onValue, push, update, remove, get } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';


const PostsPage = ({ user }) => {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState(0);
  const [imageFile, setImageFile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [userProfile, setUserProfile] = useState(null);


  useEffect(() => {
    const fetchUserProfile = async () => {
      const snap = await get(dbRef(db, `users/${user.uid}`));
      setUserProfile(snap.val());
    };

    if (user?.uid) {
      fetchUserProfile();
    }
  }, [user]);


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
        ...(downloadURL && { imageUrl: downloadURL }),
        timestamp,
        userId: user.uid,
        userName: userProfile?.displayName || user.displayName || user.email,
        userImage: userProfile?.profileUrl || '',
      };
      await push(dbRef(db, 'posts'), newPost);
    }
    setTitle('');
    setComment('');
    setGenre('');
    setRating(0);
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
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 shadow-md">
      <h1 className="text-2xl font-bold text-center">🎮 GameNote 投稿一覧</h1>
      <Link
              to="/profile"
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
      </header>

      <main className="max-w-2xl mx-auto p-4">
      {user?.isAnonymous ? (
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <p className="text-center text-gray-700">
          投稿するにはログインしてください。
          <br />
          <button
              onClick={() => signOut(auth)}
              className="text-sm text-blue-600 hover:underline"
            >
              ログイン画面へ
            </button>
          </p>
        </div>
        ) : (
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
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
      </div>
      )}
      <PostList
        posts={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </main>
    </div>
  );
};

export default PostsPage;