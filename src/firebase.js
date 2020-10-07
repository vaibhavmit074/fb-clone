import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFQ2CNDIMaCSugKemMbDFus8LKiudfN-8",
    authDomain: "fb-mern-starter-project-1c1ba.firebaseapp.com",
    databaseURL: "https://fb-mern-starter-project-1c1ba.firebaseio.com",
    projectId: "fb-mern-starter-project-1c1ba",
    storageBucket: "fb-mern-starter-project-1c1ba.appspot.com",
    messagingSenderId: "607293528474",
    appId: "1:607293528474:web:287515e8751a3fdd56c223",
    measurementId: "G-YMZY63NQH0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db