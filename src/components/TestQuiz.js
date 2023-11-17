/*Status={Completed, Ready, Upcoming}*/
// Quiz.js
import React from 'react';

const TestQuiz = ({ quiz, onStartQuiz }) => {
  const handleQuizClick = () => {
    onStartQuiz(quiz['Test ID']);
  };

  return (
    <tr onClick={handleQuizClick} className="quiz-row">
      <td>{quiz['Test ID']}</td>
      <td>{quiz['Date']}</td>
      <td>{quiz['Time']}</td>
      <td>{quiz['Title']}</td>
      <td>{quiz['Duration']}</td>
      <td>{quiz['Location']}</td>
      <td>{quiz['Status']}</td>
    </tr>
  );
};

export default TestQuiz;