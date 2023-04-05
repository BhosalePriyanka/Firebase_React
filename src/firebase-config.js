
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRQ3o_Pf53YVjR6Iuyx0Izu-VRqSkiRuc",
  authDomain: "reactfirebase-d72b4.firebaseapp.com",
  projectId: "reactfirebase-d72b4",
  storageBucket: "reactfirebase-d72b4.appspot.com",
  messagingSenderId: "70412384783",
  appId: "1:70412384783:web:addbfc598acf475257c17a",
  measurementId: "G-H54WHV342M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);