import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsQW5wGs9GKAiz69PQLAJq-ys0uF4doNY",
  authDomain: "project-app-d9655.firebaseapp.com",
  projectId: "project-app-d9655",
  storageBucket: "project-app-d9655.appspot.com",
  messagingSenderId: "896990889370",
  appId: "1:896990889370:web:b9006b33481b59b09da623",
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const firestore = getFirestore(app);
