// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPZiWN1zRQYoFkqR_5p9uUqpaxknanugk",
  authDomain: "scone-cb048.firebaseapp.com",
  projectId: "scone-cb048",
  storageBucket: "scone-cb048.appspot.com",
  messagingSenderId: "886134281052",
  appId: "1:886134281052:web:4d6f28f3bd3c3f3b3e6799",
  measurementId: "G-8S3HM46VFX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
