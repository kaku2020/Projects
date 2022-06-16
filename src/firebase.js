import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEh2jF8_E4AZ1T1a62QqKQdATsfipHfnY",
    authDomain: "challenge-8ec4f.firebaseapp.com",
    projectId: "challenge-8ec4f",
    storageBucket: "challenge-8ec4f.appspot.com",
    messagingSenderId: "897402441049",
    appId: "1:897402441049:web:012a9e6268c08018615048",
    measurementId: "G-7TL6TPH6ST"
  };



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};