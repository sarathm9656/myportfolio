import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxJuT_ium2THI3Yo_za7UQf8W6f9Ja8es",
  authDomain: "myresume-99086.firebaseapp.com",
  databaseURL: "https://myresume-99086-default-rtdb.firebaseio.com",
  projectId: "myresume-99086",
  storageBucket: "myresume-99086.firebasestorage.app",
  messagingSenderId: "944604955901",
  appId: "1:944604955901:web:72d17f4c139c47c6522a94",
  measurementId: "G-VV5M2HNFXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
