import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxyh86oYvfAS3V6xxk_U3RDXKxchugR14",
  authDomain: "clone-d73b5.firebaseapp.com",
  databaseURL: "https://clone-d73b5.firebaseio.com",
  projectId: "clone-d73b5",
  storageBucket: "clone-d73b5.appspot.com",
  messagingSenderId: "834757545140",
  appId: "1:834757545140:web:63007c57081f7d13e3dbe1",
  measurementId: "G-4ZHCFMQ1LF",
};

//init firebase application
const firebaseApp = firebase.initializeApp(firebaseConfig);

//init firebase database
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
