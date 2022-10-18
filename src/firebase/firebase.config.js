// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2UJ-5AGUdfiyeMXOCyIgZxgd5X865BtE",
    authDomain: "focus-news-portal.firebaseapp.com",
    projectId: "focus-news-portal",
    storageBucket: "focus-news-portal.appspot.com",
    messagingSenderId: "823730229608",
    appId: "1:823730229608:web:29e46d2cc951e0969b46dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;