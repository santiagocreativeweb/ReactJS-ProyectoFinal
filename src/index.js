import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9URRLgola81uPrsfuVn-Qcu3u1zeaQ3s",
  authDomain: "coderhouse-reactcatelli.firebaseapp.com",
  projectId: "coderhouse-reactcatelli",
  storageBucket: "coderhouse-reactcatelli.appspot.com",
  messagingSenderId: "934053566986",
  appId: "1:934053566986:web:d42224f23a6e62f79b5df3",
  measurementId: "G-3YCB196BX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);