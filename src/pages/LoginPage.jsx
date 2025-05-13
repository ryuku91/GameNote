import AuthComponent from '../components/AuthComponent';

const LoginPage = ({ setUser }) => (
  <div className="p-6 max-w-xl mx-auto">
    <h1 className="text-2xl font-bold mb-4">🎮 GameNote ログイン</h1>
    <AuthComponent onAuthChange={setUser} />
  </div>
);

export default LoginPage;