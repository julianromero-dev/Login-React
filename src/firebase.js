import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBROyEu2xjKuLjiQ_o47w8mzDsN2hm-FzQ",
  authDomain: "proyecto-react-dev.firebaseapp.com",
  projectId: "proyecto-react-dev",
  storageBucket: "proyecto-react-dev.firebasestorage.app",
  messagingSenderId: "520587420497",
  appId: "1:520587420497:web:a5df4d9ba6e40c91d96970"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//exportar auth y provider de Google
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
//firebase
const db = getFirestore(app);

export { auth, googleProvider, db, signOut };