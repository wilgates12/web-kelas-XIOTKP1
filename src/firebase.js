// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBACYPOSTsosa1Y6vKUwzhjxp8RmvXHZA8",
  authDomain: "web-kelas-9a239.firebaseapp.com",
  projectId: "web-kelas-9a239",
  storageBucket: "web-kelas-9a239.appspot.com",
  messagingSenderId: "527688149589",
  appId: "1:527688149589:web:de970d24d42ed9fb3f42dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();