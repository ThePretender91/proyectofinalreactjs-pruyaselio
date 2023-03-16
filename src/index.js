import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuQg2A9OheMrYaSOOdkrCAxnIwkCe3T60",
  authDomain: "basecoderreactjs.firebaseapp.com",
  projectId: "basecoderreactjs",
  storageBucket: "basecoderreactjs.appspot.com",
  messagingSenderId: "456410614209",
  appId: "1:456410614209:web:dcc5b6a99603374d4f0740"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
