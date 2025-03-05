import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';

// Your web app's Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyCnNF7ttWTD9hBBpLIRSyFpRPT4hkQj4WQ",
  authDomain: "onlineshop-a7c26.firebaseapp.com",
  projectId: "onlineshop-a7c26",
  storageBucket: "onlineshop-a7c26.firebasestorage.app",
  messagingSenderId: "464096975410",
  appId: "1:464096975410:web:04348ccd7854df21fffa2b",
  measurementId: "G-Y25577XLCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// const firestore = getFirestore(app); 

// export { app, auth, firestore, collection, addDoc, updateDoc, doc };

export { app, auth };