// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUieiMMrpSPHgqszmyHXFaXHpEEh4w8Go",
  authDomain: "videodrome-2022.firebaseapp.com",
  projectId: "videodrome-2022",
  storageBucket: "videodrome-2022.appspot.com",
  messagingSenderId: "455431307833",
  appId: "1:455431307833:web:b4ad1d307513612aff83e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db