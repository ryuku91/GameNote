import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from './firebase/firebase';
import LoginPage from './pages/LoginPage';
import PostsPage from './pages/PostsPage';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return () => unsubscribe();
  }, []);

  return (
   
    <BrowserRouter>
    
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/posts" replace /> : <LoginPage setUser={setUser} />}
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
    </BrowserRouter>
  );
};

export default App;