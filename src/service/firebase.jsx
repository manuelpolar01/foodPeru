  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBAOltQ3sBzON_GJU_9dWWqJjP1ualTns",
  authDomain: "foodperu-ed3e1.firebaseapp.com",
  projectId: "foodperu-ed3e1",
  storageBucket: "foodperu-ed3e1.firebasestorage.app",
  messagingSenderId: "707077247388",
  appId: "1:707077247388:web:dfb6c0687d867870117859"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)
