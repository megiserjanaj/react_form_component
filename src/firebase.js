import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCaejxbiQ298ZeX2Sp86zyTjWNFRYC1B-o",
  authDomain: "personal-blog-react-ca7c6.firebaseapp.com",
  projectId: "personal-blog-react-ca7c6",
  storageBucket: "personal-blog-react-ca7c6.appspot.com",
  messagingSenderId: "1067430348245",
  appId: "1:1067430348245:web:dc662fb9d219507cc5695c",
});

var db = firebaseApp.firestore();

export { db };
