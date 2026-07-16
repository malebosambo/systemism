// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA98m7ghYnCdDl9X9utQyp87STW7pfduGk",
  authDomain: "systemism-co-za.firebaseapp.com",
  projectId: "systemism-co-za",
  storageBucket: "systemism-co-za.firebasestorage.app",
  messagingSenderId: "973359136705",
  appId: "1:973359136705:web:0eb03ebff5f39ca52d7940",
  measurementId: "G-5HF5VYDMT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
