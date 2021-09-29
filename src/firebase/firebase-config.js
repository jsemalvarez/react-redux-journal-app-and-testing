import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithPopup, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signOut,
    updateProfile, 
    GoogleAuthProvider,
    onAuthStateChanged } from "firebase/auth";
import { 
    getFirestore, 
    collection, 
    doc, 
    addDoc, 
    getDocs, 
    updateDoc, 
    deleteDoc } from 'firebase/firestore'; // /lite


import{

    getStorage,
    ref,
    uploadBytes,
    uploadBytesResumable,
    getDownloadURL
    
} from 'firebase/storage'


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
};
  
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const db = getFirestore(firebase);
const googleAuthProvider = new GoogleAuthProvider();
const auth = getAuth();
const storage = getStorage()


export {
    db,
    collection, 
    addDoc,
    getDocs,
    updateDoc, 
    deleteDoc,
    doc,
    auth,
    googleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    onAuthStateChanged,
    storage,
    ref,
    uploadBytes,
    uploadBytesResumable,
    getDownloadURL,
    firebase
}