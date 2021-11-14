import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnIMJOVFWzfBULVk2druRXVQpBxcsVH10",
  authDomain: "uber-clone-a2e7b.firebaseapp.com",
  // authDomain: "localhost",
  // authDomain: "uber-clone-a2e7b.web.app",
  projectId: "uber-clone-a2e7b",
  storageBucket: "uber-clone-a2e7b.appspot.com",
  messagingSenderId: "351644027420",
  appId: "1:351644027420:web:1c7bffcd2158cec676add9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}