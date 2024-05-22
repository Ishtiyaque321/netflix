// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-aJk0ZPliK_gCcwuoupI4bpe5bkdAjpw",
  authDomain: "netflixgpt-a4558.firebaseapp.com",
  projectId: "netflixgpt-a4558",
  storageBucket: "netflixgpt-a4558.appspot.com",
  messagingSenderId: "498985857302",
  appId: "1:498985857302:web:86f4cee3e327e62aef2037",
  measurementId: "G-DJXGXGNE3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
