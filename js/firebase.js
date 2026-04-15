// Import Firebase (CDN version for browser)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your Firebase config (KEEP YOURS)
const firebaseConfig = {
  apiKey: "AIzaSyD-e23X7ICOqC8_T95nLURa70dJks9x3FQ",
  authDomain: "ozed-trading-academy.firebaseapp.com",
  projectId: "ozed-trading-academy",
  storageBucket: "ozed-trading-academy.firebasestorage.app",
  messagingSenderId: "654714892579",
  appId: "1:654714892579:web:31bde9f58d3cadd5551c96",
  measurementId: "G-S8ZX05L3V5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services you will actually use
export const auth = getAuth(app);
export const db = getFirestore(app);