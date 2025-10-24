// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { initializeAppCheck, ReCaptchaV3Provider, getToken } from "firebase/app-check";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

import { signInAnonymously } from "firebase/auth";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ8KGaRaEPv_fghl6XpHZOB20qHK_mf6w",
  authDomain: "gamenote-4beae.firebaseapp.com",
  databaseURL: "https://gamenote-4beae-default-rtdb.firebaseio.com/",
  projectId: "gamenote-4beae",
  storageBucket: "gamenote-4beae.firebasestorage.app",
  messagingSenderId: "829418398367",
  appId: "1:829418398367:web:3d6744c89926c2a33778aa",
  measurementId: "G-XL2EWYQX5C"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

if (location.hostname === "localhost") {
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = "8B8A1F2B-B4E4-4840-B869-E2418561B4B4";
  }


  const appCheck = initializeAppCheck(firebaseApp, {
    provider: new ReCaptchaV3Provider("6LdCNM0rAAAAAACoueg92-qP_tgV9DLDdxog6SiF"),
    isTokenAutoRefreshEnabled: true,
  });


  console.log(firebaseApp.options.appId);
getToken(appCheck, true)
  .then(r => console.log("AppCheck OK:", !!r.token))
  .catch(e => console.warn("AppCheck NG:", e));


// 認証オブジェクトの準備
const auth = getAuth(firebaseApp);

// Google認証プロバイダの準備
const googleProvider = new GoogleAuthProvider();
// Realtime Database を取得
const db = getDatabase(firebaseApp);

const storage = getStorage(firebaseApp);

const functions = getFunctions(firebaseApp, "us-central1");

if (import.meta.env.VITE_USE_FUNCTIONS_EMULATOR === "true") {
  connectFunctionsEmulator(functions, "localhost", 5001);
}

export default firebaseApp;
export { auth, googleProvider, db, storage, signInAnonymously, functions };