// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

import { signInAnonymously } from "firebase/auth";

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


// 認証オブジェクトの準備
const auth = getAuth(firebaseApp);

// Google認証プロバイダの準備
const googleProvider = new GoogleAuthProvider();
// Realtime Database を取得
const db = getDatabase(firebaseApp);

const storage = getStorage(firebaseApp);

export default firebaseApp;
export { auth, googleProvider, db, storage, signInAnonymously };