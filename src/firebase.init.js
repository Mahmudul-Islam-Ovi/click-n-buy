// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARjhd7XOsGmMBy8x2BmaYEjwi1arhjFyM",
  authDomain: "click-n-buy-46c5b.firebaseapp.com",
  projectId: "click-n-buy-46c5b",
  storageBucket: "click-n-buy-46c5b.appspot.com",
  messagingSenderId: "638013861481",
  appId: "1:638013861481:web:143c7b5942fb010f50fcf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;