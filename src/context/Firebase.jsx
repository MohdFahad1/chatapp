import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAemO_fHcNGHO4O6zCbg_5sBdIG3hnamhc",
  authDomain: "chat-app-bc615.firebaseapp.com",
  projectId: "chat-app-bc615",
  storageBucket: "chat-app-bc615.appspot.com",
  messagingSenderId: "454904059638",
  appId: "1:454904059638:web:73f28d50600871e1af3ed7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();