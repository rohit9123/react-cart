import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBN53xb2gKh6V954jgWnxVx-eGF7_o74Jw",
  authDomain: "cart-3238c.firebaseapp.com",
  projectId: "cart-3238c",
  storageBucket: "cart-3238c.appspot.com",
  messagingSenderId: "74465023144",
  appId: "1:74465023144:web:653298a5336c0c47f11e9d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


