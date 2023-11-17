// Quiz.js
import React from 'react';

const TestQuiz = ({ quiz }) => {

  return (
    <tr className="quiz-row">
      <td>{quiz['Test 0']}</td>
      <td>{quiz['Test 1']}</td>
      <td>{quiz['Test 2']}</td>
      <td>{quiz['Test 3']}</td>
    </tr>
  );
};

export default TestQuiz;