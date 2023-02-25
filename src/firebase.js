import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPSf6imVsIvxVAAUWlsCxqMjwywYBYdkQ",
    authDomain: "app-b73fa.firebaseapp.com",
    projectId: "app-b73fa",
    storageBucket: "app-b73fa.appspot.com",
    messagingSenderId: "274759480097",
    appId: "1:274759480097:web:e3a4eb6b9ef685f6038460",
    measurementId: "G-9WKNEJY4XK"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };