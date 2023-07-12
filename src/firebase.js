// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVkwA5wgo5205y8EcVq5aH9CnahoBw4ls",
  authDomain: "clone-3e3c0.firebaseapp.com",
  projectId: "clone-3e3c0",
  storageBucket: "clone-3e3c0.appspot.com",
  messagingSenderId: "594388233753",
  appId: "1:594388233753:web:1c6e1fe6135547b4480488",
  measurementId: "G-ZKLJ4KRE89"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db, auth };