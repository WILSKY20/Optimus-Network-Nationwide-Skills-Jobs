// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApvSx0EoW4D7e65xVCTod4cq10NZGcjto",
  authDomain: "optimus-network-8bfc0.firebaseapp.com",
  projectId: "optimus-network-8bfc0",
  storageBucket: "optimus-network-8bfc0.firebasestorage.app",
  messagingSenderId: "551403058510",
  appId: "1:551403058510:web:5ed17df20990623ca51a1f",
  measurementId: "G-MPN7KHMYDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);