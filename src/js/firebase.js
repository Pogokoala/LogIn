// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSCclnRmSPw2oEYqS44UlRGluRtAYU2SM",
  authDomain: "login-61180.firebaseapp.com",
  projectId: "login-61180",
  storageBucket: "login-61180.appspot.com",
  messagingSenderId: "166676380321",
  appId: "1:166676380321:web:2d94be8e55ae2e9a470ee0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);