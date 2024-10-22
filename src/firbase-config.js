// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPIp0iLfqysHayuZU5NKiIAkKRr0DZLuE",
  authDomain: "chat-room-66dc1.firebaseapp.com",
  projectId: "chat-room-66dc1",
  storageBucket: "chat-room-66dc1.appspot.com",
  messagingSenderId: "558013226193",
  appId: "1:558013226193:web:642edc340b11dc8e68b9f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app)

export const provider = new  GoogleAuthProvider()

export const db= getFirestore(app)

