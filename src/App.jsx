import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from './firebase/firebase.js';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import PostsPage from './pages/PostsPage';

const App = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return () => unsubscribe();
  }, []);

  return (

    <BrowserRouter>
        {user === undefined ? (
           <div className="p-6 text-center">読み込み中...</div>
          ) : (
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/posts" replace /> : <LoginPage setUser={setUser} />}
        />
        <Route
          path="/profile"
          element={user ? <ProfilePage user={user} /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/posts"
          element={user ? <PostsPage user={user} /> : <Navigate to="/login" replace />}
        />
        <Route
          path="*"
          element={<Navigate to={user ? '/posts' : '/login'} replace />}
        />
      </Routes>
       )}
    </BrowserRouter>
  );
};

export default App;