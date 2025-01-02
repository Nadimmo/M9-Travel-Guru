// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANnf6bNrQaPxpKtCVLR0oGmF6rTK3JhfE",
  authDomain: "travel-guru-a638f.firebaseapp.com",
  projectId: "travel-guru-a638f",
  storageBucket: "travel-guru-a638f.firebasestorage.app",
  messagingSenderId: "485444291802",
  appId: "1:485444291802:web:22560824258918eeb2e9e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app