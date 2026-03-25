<script type="module">

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBIEXLovtA6p7n0Qev6i4t7pnrGm1C9dsA",
  authDomain: "jeevantika-f6972.firebaseapp.com",
  projectId: "jeevantika-f6972",
  storageBucket: "jeevantika-f6972.firebasestorage.app",
  messagingSenderId: "61584268994",
  appId: "1:61584268994:web:faf80613e68b3c0acce55b",
  measurementId: "G-ELGE1L41VS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

window.db = db;
window.auth = auth;
window.addDoc = addDoc;
window.collection = collection;
window.getDocs = getDocs;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;

</script>
