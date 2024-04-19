// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIGWyBmk2fMaNfU69-E-3JvM1nEFw9Ghw",
    authDomain: "fehdoku.firebaseapp.com",
    projectId: "fehdoku",
    storageBucket: "fehdoku.appspot.com",
    messagingSenderId: "157726697433",
    appId: "1:157726697433:web:b1cbbf781ff68412f2dbc8",
    measurementId: "G-GX9X03Y1GH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);