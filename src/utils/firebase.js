// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGOHyGG2NdT1JvCTnIc-2k7nUmZjPf4uk",
  authDomain: "netflixgpt-ab982.firebaseapp.com",
  projectId: "netflixgpt-ab982",
  storageBucket: "netflixgpt-ab982.firebasestorage.app",
  messagingSenderId: "851832751107",
  appId: "1:851832751107:web:e62d6dc20cf336462c7a36",
  measurementId: "G-736EC6DDL6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
