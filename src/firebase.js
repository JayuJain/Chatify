import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtaQrU1zcR7I0YWVQPO4LtEprJnjrLg8Q",
  authDomain: "demo3-5e15c.firebaseapp.com",
  projectId: "demo3-5e15c",
  storageBucket: "demo3-5e15c.appspot.com",
  messagingSenderId: "703272499339",
  appId: "1:703272499339:web:6791062a2834ef3c477c8e"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()


