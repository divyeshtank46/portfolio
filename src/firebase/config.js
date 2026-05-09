import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyBsy3dz6Q_YgJirV3J7O4YxisiEKDGjlkA",
  authDomain: "portfolio-project-9e98d.firebaseapp.com",
  projectId: "portfolio-project-9e98d",
  storageBucket: "portfolio-project-9e98d.firebasestorage.app",
  messagingSenderId: "795421323319",
  appId: "1:795421323319:web:89a177111e3944381a4fb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);