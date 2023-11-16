// QuizzesList.js
import React,{useState,useEffect} from 'react';
import Quiz from './Quiz';
import './QuizzesList.css';
import { getFirestore, collection, getDocs, or } from 'firebase/firestore';
import { query, where,orderBy } from 'firebase/firestore';
import Header from '../header/Header';
import { onAuthStateChanged, getAuth} from "firebase/auth";
//Fetch data from firebase

const db=getFirestore();
const auth = getAuth();

const DBQuizzesList = ({onStartQuiz}) => {
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          console.log("uid", uid);
          //window.alert("still signed in: "+user.email);
        } else {
          // User is signed out
          // ...
          console.log("user is logged out");
          window.alert("user is logged out");
        }
      });
     
  }, [])

  const [quizzes, setQuizzes] = useState([]);
    useEffect(()=>{
      const fetchData=async()=>{
        const db=getFirestore();
        const quizzesCol=collection(db,'Quizzes');
        const auth = getAuth();
        var user = auth.currentUser;
        //const user=firebase.auth().currentUser;
        console.log("DB User: "+user);
        console.log("DB User.uid: "+user.uid);

          try{
            const q=query(quizzesCol,where('Sort Type','==','Merge'),orderBy('Quiz ID','asc'));
            const querySnapshot=await getDocs(q);
            //const data=querySnapshot.docs.map(doc=>doc.data());
            const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setQuizzes(data);
          }
          catch(error){
            console.log("Error getting quizzes: ",error);
          }
    };
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log("User is still authenticated:", user.email);

          //console.log("Selected Quiz: " + selectedQuiz.title);
          fetchData();
        
      } else {
        // User is signed out
        console.log("User is logged out");
        window.alert("User is logged out");
        // Optionally, handle the case where the user is not authenticated
      }
    });
  }, []);

  return (
    <div>
      <h1>Merge Quizzes(firestore):</h1>
    <table className="styled-table">
      <thead>
        <tr>
          <th>Quiz ID</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
      {quizzes.map(quiz => (
          <Quiz key={quiz.id} quiz={quiz} onStartQuiz={onStartQuiz} />
        ))}
        
      </tbody>
    </table>
    </div>
  );
};

export default DBQuizzesList;
