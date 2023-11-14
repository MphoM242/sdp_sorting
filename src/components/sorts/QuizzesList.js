import React, {useEffect } from 'react';
import Quiz from './Quiz';
import './QuizzesList.css';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase'

const QuizzesList = ({ quizzes, onStartQuiz }) => {
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid);
              window.alert("still signed in: "+user.email);
            } else {
              // User is signed out
              // ...
              console.log("user is logged out");
              window.alert("user is logged out");
            }
          });
         
      }, [])
  return (
    <table class="styled-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Attempts</th>
        </tr>
      </thead>
      <tbody>
        {quizzes.map(quiz => (
          <Quiz key={quiz.id} quiz={quiz} onStartQuiz={onStartQuiz} />
        ))}
      </tbody>
    </table>
  );
};

export default QuizzesList;