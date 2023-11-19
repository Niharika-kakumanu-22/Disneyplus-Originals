import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCglRcsXvKhGSlsRykPC0UwhFlkkyYYWlI",
  authDomain: "disney-clone-e284c.firebaseapp.com",
  projectId: "disney-clone-e284c",
  storageBucket: "disney-clone-e284c.appspot.com",
  messagingSenderId: "265640694569",
  appId: "1:265640694569:web:bb6a124599c325ccf0dd38",
  measurementId: "G-P123S50RGS"
};
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;