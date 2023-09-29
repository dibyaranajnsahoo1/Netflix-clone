import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBV0pBeCfM5ewipcfnsa7gHQxlUbzQvq20",
  authDomain: "movei-clone.firebaseapp.com",
  projectId: "movei-clone",
  storageBucket: "movei-clone.appspot.com",
  messagingSenderId: "583866292080",
  appId: "1:583866292080:web:e0552662c32544098961b5",
  measurementId: "G-N99M1GGZKC"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);


