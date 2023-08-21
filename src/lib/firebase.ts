import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0bqflICm64pENnENhjkLAVOIaDhEZ4Zo",
  authDomain: "linktreemyversion-6eea3.firebaseapp.com",
  projectId: "linktreemyversion-6eea3",
  storageBucket: "linktreemyversion-6eea3.appspot.com",
  messagingSenderId: "195330753367",
  appId: "1:195330753367:web:656a44d5a635fcbb93b412",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
