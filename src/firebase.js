import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBLeeoCOmriAnVpukEEPs9bwIbAyD5VB14",
  authDomain: "restuarant-online-menu.firebaseapp.com",
  databaseURL: "https://restuarant-online-menu.firebaseio.com",
  projectId: "restuarant-online-menu",
  storageBucket: "restuarant-online-menu.appspot.com",
  messagingSenderId: "54202746298",
  appId: "1:54202746298:web:ad5f5575ca374940530983",
  measurementId: "G-DM2J9HH64K",
});

const db = firebaseApp.firestore();

export { db };
