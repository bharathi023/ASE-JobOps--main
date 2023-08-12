// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5H_h82QlUe90Hq1FrFpZhB-iMLqyg2eE",
  authDomain: "jobops-web-application.firebaseapp.com",
  projectId: "jobops-web-application",
  storageBucket: "jobops-web-application.appspot.com",
  messagingSenderId: "1028433444709",
  appId: "1:1028433444709:web:05f9ddc705c3f90f9d2b8c",
  measurementId: "G-NT2JV7RBJX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
 export const db = getFirestore(app);