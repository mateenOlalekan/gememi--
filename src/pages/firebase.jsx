// // src/firebaseConfig.js
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc } from "firebase/firestore";


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDLpqj3wB6ZH30PNt2ZiQwTF4jF5L2rZ3k",
//   authDomain: "assd-a8838.firebaseapp.com",
//   projectId: "assd-a8838",
//   storageBucket: "assd-a8838.firebasestorage.app",
//   messagingSenderId: "140567601938",
//   appId: "1:140567601938:web:a87ff3399101dc1cbf89cb"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db, collection, addDoc };

// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLpqj3wB6ZH30PNt2ZiQwTF4jF5L2rZ3k",
  authDomain: "assd-a8838.firebaseapp.com",
  projectId: "assd-a8838",
  storageBucket: "assd-a8838.appspot.com", // Fixed incorrect storage bucket URL
  messagingSenderId: "140567601938",
  appId: "1:140567601938:web:a87ff3399101dc1cbf89cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Authentication
const db = getFirestore(app); // Firestore database

export { auth, db };
