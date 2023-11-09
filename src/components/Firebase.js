// firebase.js
import 'firebase/auth';
import 'firebase/firestore';
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB5y7LSWCoG2xLtotgvJQnvdWranfNmLgc",
    authDomain: "sortingplugin.firebaseapp.com",
    projectId: "sortingplugin",
    storageBucket: "sortingplugin.appspot.com",
    messagingSenderId: "821141428347",
    appId: "1:821141428347:web:c76ae542619aac9d536ade",
    measurementId: "G-P4VSY791C2"
  };

const app=initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;