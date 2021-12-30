// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9DMF5bRv5JMVfcr5WWXEyV73s3s5cCRA",
  authDomain: "pattern-coloring.firebaseapp.com",
  projectId: "pattern-coloring",
  storageBucket: "pattern-coloring.appspot.com",
  messagingSenderId: "538526397927",
  appId: "1:538526397927:web:36ddc2890d90995b083942",
  measurementId: "G-MF8L52828P"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = app.firestore();