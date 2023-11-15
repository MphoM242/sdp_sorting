// QuizzesList.js
import React,{useState,useEffect} from 'react';
import Quiz from './Quiz';
import './QuizzesList.css';
import { getFirestore, collection, getDocs, or } from 'firebase/firestore';
import { query, where,orderBy } from 'firebase/firestore';
import Header from '../header/Header';
//Fetch data from firebase
const DBQuizzesList = ({onStartQuiz}) => {

  const [quizzes, setQuizzes] = useState([]);
    useEffect(()=>{
      const fetchData=async()=>{
        const db=getFirestore();
        const quizzesCol=collection(db,'Quizzes');
        //const user=firebase.auth().currentUser;

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
    fetchData();
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
