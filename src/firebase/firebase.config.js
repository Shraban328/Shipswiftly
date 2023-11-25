// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2G5F6ueFoFjPU5LS60jANeFMRquOAdYI",
  authDomain: "shipswiftly-b8a12.firebaseapp.com",
  projectId: "shipswiftly-b8a12",
  storageBucket: "shipswiftly-b8a12.appspot.com",
  messagingSenderId: "1099062355729",
  appId: "1:1099062355729:web:cc35ad158dc3df76b50eb0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
