// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDicOD4W5TIvGxvyfqx1aXop_UNK2-4l8w",
  authDomain: "dragon-news-46ee4.firebaseapp.com",
  projectId: "dragon-news-46ee4",
  storageBucket: "dragon-news-46ee4.firebasestorage.app",
  messagingSenderId: "719634648650",
  appId: "1:719634648650:web:86b33fc4d378e0d520e0b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;