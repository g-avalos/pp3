import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAUNEktaZ8L0rW971n7TicnoEN5t94xrs0",
  authDomain: "gcmtest38.firebaseapp.com",
  databaseURL: "https://gcmtest38.firebaseio.com",
  projectId: "gcmtest38",
  storageBucket: "gcmtest38.appspot.com",
  messagingSenderId: "9871458444",
  appId: "1:9871458444:web:14c263fbf217f410323ba9",
  measurementId: "G-JZHY87Q7VH"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();