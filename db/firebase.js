import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyC8BPttw4FdUq4sdMs846nAOCQZG1GGenc",
    authDomain: "todolist-2-36293.firebaseapp.com",
    projectId: "todolist-2-36293",
    storageBucket: "todolist-2-36293.appspot.com",
    messagingSenderId: "763585876686",
    appId: "1:763585876686:web:24dc6726498cb2aa56f69f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    app,
    auth,
    db
}