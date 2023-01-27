import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATnNE_fjgITN5d8spun36D7gfbjsfbyT8",
    authDomain: "clone-7473c.firebaseapp.com",
    databaseURL: "https://clone-7473c.firebaseio.com",
    projectId: "clone-7473c",
    storageBucket: "clone-7473c.appspot.com",
    messagingSenderId: "288709432508",
    appId: "1:288709432508:web:8cea2e877799f51fe6ecb9",
    measurementId: "G-75GN1E8G0R",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };