import firebase from "firebase"
import "firebase/storage"
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAf4JqZqE2WBiMVYcNIViQKkY1SzHgE5N4",
  authDomain: "ce---floricultura.firebaseapp.com",
  projectId: "ce---floricultura",
  storageBucket: "ce---floricultura.appspot.com",
  messagingSenderId: "283412400418",
  appId: "1:283412400418:web:65af57b2bd920d76177d7b",
  measurementId: "G-TGXMV3YWSX"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;