import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBWPtm6jpqipJBGu-XmdoHapuzEAWmUlVM",
  authDomain: "hand-of-midas-c428b.firebaseapp.com",
  projectId: "hand-of-midas-c428b",
  storageBucket: "hand-of-midas-c428b.appspot.com",
  messagingSenderId: "360008838426",
  appId: "1:360008838426:web:fab6f1c5b2bcfd7b0650a3"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }