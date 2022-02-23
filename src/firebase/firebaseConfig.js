import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMeVD7HAkP4c3Dst97nfkXW2dK2oXP7g0",
    authDomain: "fir-spring-boot-d161b.firebaseapp.com",
    projectId: "fir-spring-boot-d161b",
    storageBucket: "fir-spring-boot-d161b.appspot.com",
    messagingSenderId: "218893894929",
    appId: "1:218893894929:web:d2d917dc8c476d51cf38b0",
    measurementId: "G-04NL3BSF70"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app,db,auth };
