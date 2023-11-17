import React,{useState,useEffect} from 'react';
import TestQuiz from './TestQuiz';
import './sorts/QuizzesList.css';
import { getFirestore, collection, getDocs, or } from 'firebase/firestore';
import { query, where,orderBy } from 'firebase/firestore';

import Header from './header/Header';
//Fetch data from firebase
const TestDBQuizzesList = ({onStartQuiz}) => {

  const [quizzes, setQuizzes] = useState([]);
    useEffect(()=>{
      const fetchData=async()=>{
        const db=getFirestore();
        const testDetailsCol=collection(db,'Test Details');
        //const user=firebase.auth().currentUser;

          try{
            const q=query(testDetailsCol,where('Status','==','Upcoming'),orderBy('Test ID','asc'));
            const querySnapshot=await getDocs(q);
            
            const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
            setQuizzes(data);
          }
          catch(error){
            console.log("Error getting upcoming test quizzes: ",error);
          }
    };
    fetchData();
  }, []);

  return (
    <div>
    <table className="styled-table">
      <thead>
        <tr>
          <th>Test ID</th>
          <th>Date</th>
          <th>Time</th>
          <th>Title</th>
          <th>Duration</th>
          <th>Location</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      {quizzes.map(quiz => (
          <TestQuiz key={quiz.id} quiz={quiz} onStartQuiz={onStartQuiz} />
        ))}
        
      </tbody>
    </table>
    </div>
  );
};

export default TestDBQuizzesList;
