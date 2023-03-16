import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyACeTJzyIpqInMVgelZHhOzgcjT1IcubU0",
  authDomain: "mymony-4efac.firebaseapp.com",
  projectId: "mymony-4efac",
  storageBucket: "mymony-4efac.appspot.com",
  messagingSenderId: "1008839439245",
  appId: "1:1008839439245:web:eadd694e6d338e1161c3c4"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }