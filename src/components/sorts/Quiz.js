// Quiz.js
import React from 'react';

const Quiz = ({ quiz, onStartQuiz }) => {

  return (
    <tr onClick={()=> onStartQuiz(quiz.id)} className="quiz-row">
      <td>{quiz['Quiz ID']}</td>
      <td>{quiz['Title']}</td>
      <td>{quiz['Description']}</td>
    </tr>
  );
};

export default Quiz;