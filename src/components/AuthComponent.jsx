import React, { useState, useEffect } from 'react';
import { signInWithPopup, signOut, signInAnonymously } from "firebase/auth";
import { auth, googleProvider } from '../firebase/firebase.js';


const AuthComponent = ({onAuthChange}) => {
  const [user, setUser] = useState(null); // ログイン状態

  // ログイン状態の監視
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // ログインしている場合
        setUser(authUser);
        onAuthChange(authUser);
      } else {
        // ログアウトしている場合
        setUser(null);
      }
    }, [onAuthChange]);

    // アンマウント時に監視解除
    return () => {
      unsubscribe();
    };
  }, [onAuthChange]);

  // ログイン
  const handleSignIn = async () => {
    try {
      // Googleログインポップアップを表示
      const result = await signInWithPopup(auth, googleProvider);
      // ログイン成功時の処理
      console.log('ログイン成功', result.user);
    } catch (error) {
      // エラーハンドリング
      console.error('ログインエラー', error);
    }
  };
  
  //ゲストログイン
  const handleGuestLogin = async () => {
    try {
      const result = await signInAnonymously(auth);
      console.log("ゲストログイン成功", result.user);
    } catch (error) {
      console.error("ゲストログインエラー", error);
    }
  };

  // ログアウト
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('ログアウトエラー:', error);
    }
  };

  return (
    <div>
      {user ? (
  <div>
    <p>
      ログインユーザー: {user.isAnonymous ? "ゲストユーザー" : user.displayName}
    </p>
    <button onClick={handleSignOut}>ログアウト</button>
  </div>
) : (
  <div>
    <p>ログインしていません</p>
    <button onClick={handleSignIn}>Googleでログイン</button>
    <button onClick={handleGuestLogin}>ゲストでログイン</button>
  </div>
)}
    </div>
  );
};

export default AuthComponent;