import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCZD97VTKYCd_rrfgprQmP0JzIU2DA0Z3c",
  authDomain: "book-shopping-cart-d332a.firebaseapp.com",
  projectId: "book-shopping-cart-d332a",
  storageBucket: "book-shopping-cart-d332a.appspot.com",
  messagingSenderId: "746950742139",
  appId: "1:746950742139:web:4cdf45ee40f18a1c2692de",
  measurementId: "G-MD966NCQ9G",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
