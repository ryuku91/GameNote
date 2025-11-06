import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from './firebase/firebase.js';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import PostsPage from './pages/PostsPage';
import DmListPage from './pages/DmListPage';
import DmRoomPage from './pages/DmRoomPage';
import NewPostPage from './pages/NewPostPage';
import TabLayout from './layouts/TabLayout';
import EditPostPage from './pages/EditPostPage';
import DmContactsPage from "./pages/DmContactsPage";

const App = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return () => unsubscribe();
  }, []);

  if (user === undefined) {
    return <div className="p-6 text-center">読み込み中...</div>;
  }


  return (
    <BrowserRouter>
      <Routes>
        {/* ログインだけは単独ルート */}
        <Route
          path="/login"
          element={user ? <Navigate to="/app/posts" replace /> : <LoginPage user={user} />}
        />

          {/* ログイン後は /app 配下に集約 */}
          <Route
          path="/app"
          element={user ? <TabLayout user={user} /> : <Navigate to="/login" replace />}
        >
          {/* デフォは /app/posts */}
          <Route index element={<Navigate to="posts" replace />} />

          <Route path="posts" element={<PostsPage user={user} />} />
          <Route path="profile" element={<ProfilePage user={user} />} />
          <Route path="dm" element={<DmListPage user={user} />} />
          <Route path="dm/:cid" element={<DmRoomPage user={user} />} />
          <Route path="dm/contacts" element={<DmContactsPage user={user} />} />
          {/* ＋ボタンで遷移する“投稿だけのページ” */}
          <Route path="post/new" element={<NewPostPage user={user} />} />
          <Route path="post/:postId/edit" element={<EditPostPage user={user} />} />
        </Route>

        {/* フォールバック */}
        <Route
          path="*"
          element={<Navigate to={user ? '/app/posts' : '/login'} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;