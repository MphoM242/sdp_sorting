// Quiz.js
import React from 'react';

const Quiz = ({ quiz, onStartQuiz }) => {
  const handleQuizClick = () => {
    onStartQuiz(quiz['Quiz ID']);
  };

  return (
    <tr onClick={handleQuizClick} className="quiz-row">
      <td>{quiz['Quiz ID']}</td>
      <td>{quiz['Title']}</td>
      <td>{quiz['Description']}</td>
    </tr>
  );
};

export default Quiz;