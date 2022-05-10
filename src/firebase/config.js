import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgwePYD-yw5VZveSKYtCynClE5LaLSavE",
  authDomain: "perishopp-web.firebaseapp.com",
  projectId: "perishopp-web",
  storageBucket: "perishopp-web.appspot.com",
  messagingSenderId: "1095595975081",
  appId: "1:1095595975081:web:78b5d288065e9a198564b8",
  measurementId: "G-2MX7CGJV8J",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
