import AuthComponent from '../components/AuthComponent';

const LoginPage = ({ user }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm text-center">
      <h1 className="text-2xl font-bold mb-6">🎮 GameNote ログイン</h1>
      {user ? (
        <p className="mb-4 text-gray-700">
          ログイン中: {user.isAnonymous ? 'ゲストユーザー' : (user.displayName || user.email)}
        </p>
      ) : (
        <p className="mb-4 text-gray-500">ログインしてください</p>
      )}
      <AuthComponent user={user} />
    </div>
  </div>
);

export default LoginPage;
