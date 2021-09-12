import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite';
import { 
    getAuth, 
    signInWithPopup, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signOut,
    updateProfile, 
    GoogleAuthProvider,
    onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyApuN6QMeFSAqdQ_amp-hPrCIpSFRoicI0",
    authDomain: "jsm-proyecto-de-pruebas.firebaseapp.com",
    databaseURL: "https://jsm-proyecto-de-pruebas.firebaseio.com",
    projectId: "jsm-proyecto-de-pruebas",
    storageBucket: "jsm-proyecto-de-pruebas.appspot.com",
    messagingSenderId: "765649458073",
    appId: "1:765649458073:web:0a29a84e3819029908b908"
};
  
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const db = getFirestore(firebase);
const googleAuthProvider = new GoogleAuthProvider();
const auth = getAuth();

export {
    db,
    googleAuthProvider,
    auth,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    onAuthStateChanged,
    firebase
}