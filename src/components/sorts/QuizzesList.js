import React from 'react';
import Quiz from './Quiz';
import './QuizzesList.css';

const QuizzesList = ({ quizzes, onStartQuiz }) => {
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