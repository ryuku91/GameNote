import { signInWithPopup, signOut, signInAnonymously } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebase';

const AuthComponent = ({ user }) => {
  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('ログインエラー', error);
    }
  };

  const handleGuestLogin = async () => {
    try {
      await signInAnonymously(auth);
    } catch (error) {
      console.error('ゲストログインエラー', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('ログアウトエラー', error);
    }
  };

  return (
    <div className="space-y-3">
      {user ? (
        <button
          onClick={handleSignOut}
          className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded"
        >
          ログアウト
        </button>
      ) : (
        <>
          <button
            onClick={handleSignIn}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
          >
            Googleでログイン
          </button>
          <button
            onClick={handleGuestLogin}
            className="w-full border border-blue-500 text-blue-500 bg-white hover:bg-blue-50 py-2 rounded"
          >
            ゲストでログイン
          </button>
        </>
      )}
    </div>
  );
};

export default AuthComponent;
