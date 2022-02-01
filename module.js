// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import {
    getDatabase, 
    set,
    ref,
    onValue,
    push,
    remove
} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDSc_JMMn3A2ZA-6UE9hBWHKIWCWMi8N90",
  authDomain: "new-project-a49d1.firebaseapp.com",
  databaseURL: "https://new-project-a49d1-default-rtdb.firebaseio.com",
  projectId: "new-project-a49d1",
  storageBucket: "new-project-a49d1.appspot.com",
  messagingSenderId: "352325482302",
  appId: "1:352325482302:web:3865f3511e28be844e9e6f",
  measurementId: "G-QRJWJ04QV6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export {
    set,
    ref,
    onValue,
    push,
    remove,
    getDatabase
}

