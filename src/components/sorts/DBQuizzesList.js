// QuizzesList.js
import React,{useState,useEffect} from 'react';
import Quiz from './Quiz';
import './QuizzesList.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  collection,getFirestore,getDoc, onSnapshot,setDoc,doc,updateDoc, increment, Timestamp,addDoc
} from 'firebase/firestore';
import {query, where, getDocs } from "firebase/firestore";
  
import 'firebase/firestore';
import { auth } from '../Firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB5y7LSWCoG2xLtotgvJQnvdWranfNmLgc",
  authDomain: "sortingplugin.firebaseapp.com",
  projectId: "sortingplugin",
  storageBucket: "sortingplugin.appspot.com",
  messagingSenderId: "821141428347",
  appId: "1:821141428347:web:c76ae542619aac9d536ade",
  measurementId: "G-P4VSY791C2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const QuizzesRef = collection(db, "Quizzes");

//Fetch data from firebase
const QuizzesList = ({onStartQuiz}) => {

  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try{
        const user=auth.currentUser;
        if(!user){
          throw new Error('User is not logged in!!!');
        }
      
      //const db = getFirestore();
      const q=query(QuizzesRef,where('Sort Type','==','Merge'));
      const querySnapshot = await getDocs(q);
      const newData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuizzes(newData); 
    }catch(error){
      console.log("Firestore Error",error);
    }
  };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Firebase</h1>
    <table className="styled-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Attempts</th>
        </tr>
      </thead>
      <tbody>
        {quizzes.map((item)=>(
          <tr key={item.id}>
            <td>{item['Quiz ID']}</td>
            <td>{item['Title']}</td>
            <td>{item['Description']}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default QuizzesList;
