// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlPkER7HkBmuDUG82I5wRnG_1-K4fJsFc",
    authDomain: "artmedicazbig.firebaseapp.com",
    projectId: "artmedicazbig",
    storageBucket: "artmedicazbig.firebasestorage.app",
    messagingSenderId: "1019444970834",
    appId: "1:1019444970834:web:2f4208e4f052930c05a68b",
    measurementId: "G-S5EVQBEGQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);