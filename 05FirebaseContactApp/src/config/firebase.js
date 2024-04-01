// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getFirestore from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP1xg6wY7hvdRUWMvngVSQ91loUdoI4_M",
  authDomain: "vite-contact-app-c5b1e.firebaseapp.com",
  projectId: "vite-contact-app-c5b1e",
  storageBucket: "vite-contact-app-c5b1e.appspot.com",
  messagingSenderId: "22633872087",
  appId: "1:22633872087:web:0c123d1ea2cb6ebf4d8e92"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)