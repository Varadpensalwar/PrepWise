// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdgX52mGujqczoUU0knSxuaDwfR2ULUg8",
  authDomain: "prepwise-6c515.firebaseapp.com",
  projectId: "prepwise-6c515",
  storageBucket: "prepwise-6c515.firebasestorage.app",
  messagingSenderId: "357324028568",
  appId: "1:357324028568:web:a212d77357420e1e5feeed",
  measurementId: "G-KT7RD9RW7X"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);