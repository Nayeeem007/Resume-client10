// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4u-IDN0hLWmkfwkM3ERg9_cjSL-aQprc",
  authDomain: "food-recipe-c634a.firebaseapp.com",
  projectId: "food-recipe-c634a",
  storageBucket: "food-recipe-c634a.appspot.com",
  messagingSenderId: "886915773383",
  appId: "1:886915773383:web:047310ce55d03e14851fe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;