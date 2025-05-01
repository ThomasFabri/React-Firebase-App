import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCBiXUzJ4cHlgJSwlRl-jxM0zGkyTIWZYU",
    authDomain: "react-app-d06ce.firebaseapp.com",
    projectId: "react-app-d06ce",
    storageBucket: "react-app-d06ce.firebasestorage.app",
    messagingSenderId: "1065525312262",
    appId: "1:1065525312262:web:2d6288ab13ca501481bc87"
  };


  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;