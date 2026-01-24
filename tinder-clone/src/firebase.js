import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCZ407x3GfbFQDoOXGA2Pp8phtlSxT1pFY",
    authDomain: "tinder-clone-a00a2.firebaseapp.com",
    projectId: "tinder-clone-a00a2",
    storageBucket: "tinder-clone-a00a2.firebasestorage.app",
    messagingSenderId: "631590909005",
    appId: "1:631590909005:web:d0573285cbda4e5df9d804",
    measurementId: "G-V3BY977FLP"
};

const firebaseapp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseapp);

export default database;

