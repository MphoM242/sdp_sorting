// Quiz.js
import React from 'react';

const Quiz = ({ quiz, onStartQuiz }) => {
  return (
    <tr onClick={()=> onStartQuiz(quiz.id)} className="quiz-row">
      <td>{quiz.id}</td>
      <td>{quiz.title}</td>
      <td>{quiz.description}</td>
      <td>{quiz.attempts}</td>
    </tr>
  );
};

export default Quiz;