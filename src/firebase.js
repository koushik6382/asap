import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDlug8IQdMpeosMbAVpS3t8brkXJ4jsdEI",
    authDomain: "project-7afed.firebaseapp.com",
    projectId: "project-7afed",
    storageBucket: "project-7afed.appspot.com",
    messagingSenderId: "129579216478",
    appId: "1:129579216478:web:3f728605d0bf28eb8acecf"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const timestamp = serverTimestamp();

export { app, db, timestamp };