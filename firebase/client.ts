// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXOzUjQp43GJ71KwIEwUkZU8vcNulxzwo",
    authDomain: "pkprep-36b45.firebaseapp.com",
    projectId: "pkprep-36b45",
    storageBucket: "pkprep-36b45.firebasestorage.app",
    messagingSenderId: "91034030312",
    appId: "1:91034030312:web:c4013c40822716946b795d",
    measurementId: "G-53SD148V6W"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);