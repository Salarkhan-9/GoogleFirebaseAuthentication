// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuDKWTTGwjYr6wL5KOlrMpFTTLDOqVVMk",
  authDomain: "fir-authenication-57a2c.firebaseapp.com",
  projectId: "fir-authenication-57a2c",
  storageBucket: "fir-authenication-57a2c.appspot.com",
  messagingSenderId: "93061572652",
  appId: "1:93061572652:web:d20aac2100a5c99cc28989"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;