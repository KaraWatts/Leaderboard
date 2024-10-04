// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDmOQgexHGXTaSDDGNT7WcxZwgE8puDyGE",
  authDomain: "fitneeaderboard.firebaseapp.com",
  databaseURL: "https://fitneeaderboard-default-rtdb.firebaseio.com",
  projectId: "fitneeaderboard",
  storageBucket: "fitneeaderboard.appspot.com",
  messagingSenderId: "611275816183",
  appId: "1:611275816183:web:01d8a0bfceb8303be067f2",
  measurementId: "G-VRJBCLDLWX"
};

// Initialize Firebase
export const app: FirebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);