import firebase from "firebase";
import { GoogleAuthProvider } from "firebase/auth";
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-movies-f2e49.firebaseapp.com",
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: "react-movies-f2e49",
  storageBucket: "react-movies-f2e49.appspot.com",
  messagingSenderId: "667293366595",
  appId: process.env.REACT_APP_APP_ID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default firebase;
