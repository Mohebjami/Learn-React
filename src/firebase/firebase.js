import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

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


export { app, auth };