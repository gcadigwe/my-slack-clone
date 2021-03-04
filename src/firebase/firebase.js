import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_zudba7vizM5sL4_rFYAFN_nYrqMqIMs",
  authDomain: "slack-eea51.firebaseapp.com",
  projectId: "slack-eea51",
  storageBucket: "slack-eea51.appspot.com",
  messagingSenderId: "57818883481",
  appId: "1:57818883481:web:7a22b66907e16ba08c1f08",
  measurementId: "G-XKGZKBYX2N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
