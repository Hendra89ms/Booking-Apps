// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNxEOzBFOD8L-RK8W6E3rDxHBTEqQOib4",
    authDomain: "project1-ddd7d.firebaseapp.com",
    projectId: "project1-ddd7d",
    storageBucket: "project1-ddd7d.appspot.com",
    messagingSenderId: "416629342463",
    appId: "1:416629342463:web:04b8491925cf1817dd8cca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)