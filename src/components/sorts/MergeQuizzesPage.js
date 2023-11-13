// App.js
import React, { useState } from 'react';
import QuizzesList from './QuizzesList';
import DBQuizzesList from './DBQuizzesList';

const  MergeQuizzesPage= () => {
  const [quizzes, setQuizzes] = useState([
    {
      id: 0,
      title: 'Demo practice quiz',
      description: 'This is the demo quiz to give an idea of what to expect during the quizzes below and how to format your answers.\n It is recommended that you attempt this demo at least once. \nMarks recorded for this quiz will not be counted towards your final grade :)',
      attempts: 0,
    },
    {
      id: 1,
      title: 'Quiz 1',
      description: 'This is the first quiz.',
      attempts: 0,
    },
    {
      id: 2,
      title: 'Quiz 2',
      description: 'This is the second quiz.',
      attempts: 0,
    },
    {
      id: 3,
      title: 'Quiz 3',
      description: 'This is the third quiz.',
      attempts: 0,
    },
    {
      id: 4,
      title: 'Quiz 4',
      description: 'This is the fourth quiz.',
      attempts: 0,
    },
    // Add more quizzes as needed
  ]);

  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const onStartQuiz = (quizId) => {
    const selected = quizzes.find(quiz => quiz.id === quizId);
    setSelectedQuiz(selected);
  };

  //handle back button:

  return (
    <div>
      <h1>Practice Quizzes: </h1>
      {selectedQuiz ? (
        <div>
          <h2>Quiz: {selectedQuiz.title}</h2>
          {/* Render the quiz content here */}
          
          <button>Start</button>
          <div>
            <a href='/practice/merge/quizzes'>Back to Quiz List</a>
          </div>
        </div>
      ) : (
        <DBQuizzesList onStartQuiz={onStartQuiz} />
      )}
      <div>
        <a href='/practice/merge'>Back to Merge-Sort main page</a>
      </div>
    
    </div>
  );
};

export default MergeQuizzesPage;
