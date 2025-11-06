import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { ref as dbRef, get, set, child } from "firebase/database";
import { usernameToEmail } from "../components/usernameAuth";

export default function AuthComponent() {
  const nav = useNavigate();

  const [tab, setTab] = useState("login"); // "login" | "signup"
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  // users/{uid} が無ければ初期作成
  const ensureUserDoc = async (uid, displayName, photoURL, authProvider) => {
    const snap = await get(child(dbRef(db), `users/${uid}`));
    if (!snap.exists()) {
      await set(dbRef(db, `users/${uid}`), {
        displayName: displayName || "",
        profileUrl: photoURL || "",
        createdAt: Date.now(),
        authProvider,
      });
    }
  };

  const getAuthErrorMessage = (err) => {
    const code = err?.code || "";
    switch (code) {
      case "auth/invalid-credential":
      case "auth/wrong-password":
      case "auth/user-not-found":
        return "ユーザー名またはパスワードが間違っています";

      case "auth/weak-password":
        return "パスワードは6文字以上にしてください";
      case "auth/email-already-in-use":
        return "このユーザー名は既に使用されています";
      case "auth/operation-not-allowed":
        return "このログイン方式は現在無効です（Firebase Consoleで有効化してください）";

      case "auth/too-many-requests":
        return "試行回数が多すぎます。しばらくしてから再度お試しください";
      case "auth/network-request-failed":
        return "ネットワークエラーが発生しました。通信状況を確認してください";

      default:
        return `エラーが発生しました（${code || "unknown"}）`;
    }
  };


  // --- Google ログイン ---
  const loginWithGoogle = async () => {
    setError("");
    setBusy(true);
    try {
      const provider = new GoogleAuthProvider();
      const cred = await signInWithPopup(auth, provider);
      const u = cred.user;
      await ensureUserDoc(u.uid, u.displayName, u.photoURL, "google");
      nav("/app/posts", { replace: true });
    } catch (e) {
      console.error(e);
      setError(getAuthErrorMessage(e));
    } finally {
      setBusy(false);
    }
  };

  // --- 新規登録（ユーザー名＋PW） ---
  const signup = async (e) => {
    e.preventDefault();
    setError("");

    let email;
    try {
      email = usernameToEmail(username);
    } catch (e) {
      setError(getAuthErrorMessage(e));
      return;
    }
    if (password.length < 6) {
      setError("パスワードは6文字以上にしてください");
      return;
    }

    setBusy(true);
    try {
      // 1) すでに使われていないか確認
      const nameKey = username.toLowerCase();
      const taken = await get(dbRef(db, `usernames/${nameKey}`));
      if (taken.exists()) {
        throw new Error("そのユーザー名は使用されています");
      }

      // 2) Auth 作成
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      const u = cred.user;

      // 3) displayName 更新
      await updateProfile(u, { displayName: username });

      // 4) username -> uid のマッピングを作成（上書き不可ルール推奨）
      await set(dbRef(db, `usernames/${nameKey}`), u.uid);

      // 5) users/{uid}
      await ensureUserDoc(u.uid, username, "", "username");

      nav("/app/posts", { replace: true });
    } catch (e) {
      console.error(e);
      setError(getAuthErrorMessage(e));
    } finally {
      setBusy(false);
    }
  };

  // --- ログイン（ユーザー名＋PW） ---
  const login = async (e) => {
    e.preventDefault();
    setError("");

    let email;
    try {
      email = usernameToEmail(username);
    } catch (e) {
      setError(e.message);
      return;
    }
    if (password.length < 6) {
      setError(getAuthErrorMessage(e));
      return;
    }

    setBusy(true);
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const u = cred.user;
      await ensureUserDoc(u.uid, u.displayName, u.photoURL, "username");
      nav("/app/posts", { replace: true });
    } catch (e) {
      console.error(e);
      setError(getAuthErrorMessage(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="w-full">
      {error && (
        <div className="mb-3 p-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded">
          {error}
        </div>
      )}

      <button
        onClick={loginWithGoogle}
        className="w-full bg-red-500 text-white py-2 rounded mb-4 disabled:opacity-60"
        disabled={busy}
      >
        {busy ? "処理中…" : "Google でログイン"}
      </button>

      {/* タブ */}
      <div className="flex gap-2 justify-center mb-3">
        <button
          className={`px-3 py-1 rounded ${tab === "login" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("login")}
          disabled={busy}
        >
          ユーザー名でログイン
        </button>
        <button
          className={`px-3 py-1 rounded ${tab === "signup" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("signup")}
          disabled={busy}
        >
          新規登録
        </button>
      </div>

      {tab === "signup" ? (
        <form onSubmit={signup} className="space-y-2">
          <input
            className="border w-full p-2"
            placeholder="ユーザー名（3〜24字・英数._-）"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={busy}
          />
          <input
            className="border w-full p-2"
            placeholder="パスワード（6文字以上）"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={busy}
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-60" disabled={busy}>
            {busy ? "登録中…" : "新規登録"}
          </button>
        </form>
      ) : (
        <form onSubmit={login} className="space-y-2">
          <input
            className="border w-full p-2"
            placeholder="ユーザー名（3〜24字・英数._-）"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={busy}
          />
          <input
            className="border w-full p-2"
            placeholder="パスワード"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={busy}
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-60" disabled={busy}>
            {busy ? "ログイン中…" : "ログイン"}
          </button>
        </form>
      )}
    </div>
  );
}
