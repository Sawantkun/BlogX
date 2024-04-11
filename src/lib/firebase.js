// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCO28tWi0Q9FkocQWSmi23vq47rZYg0e5M",
    authDomain: "hotstar-dee92.firebaseapp.com",
    projectId: "hotstar-dee92",
    storageBucket: "hotstar-dee92.appspot.com",
    messagingSenderId: "627847016218",
    appId: "1:627847016218:web:ca76e5671922b1bb5d46a3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)