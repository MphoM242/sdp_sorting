import React, { useState } from 'react';

function MergeSort() {
  const [questions] = useState([
    { inputArray: [5, 3, 1, 2, 4], correctAnswer: [1, 2, 3, 4, 5] },
    { inputArray: [10, 8, 6, 4, 2], correctAnswer: [2, 4, 6, 8, 10]},
    // Add more questions here
  ]);

  const [userAnswers, setUserAnswers] = useState(questions.map(() => []));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleInputChange = (event, questionIndex, inputIndex) => {
    const inputValue = parseInt(event.target.value, 10);
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = [...userAnswers[questionIndex]];
    updatedAnswers[questionIndex][inputIndex] = inputValue;
    setUserAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    let totalScore = 0;
	const wrongAnswers=[]; //Track incorrect answers
    for (let i = 0; i < questions.length; i++) {
      const correct = questions[i].correctAnswer;
      const userAnswer = userAnswers[i];
      if (correct.every((val, index) => val === userAnswer[index])) {
        totalScore += 1;
      }
	  else{
		  wrongAnswers.push(i+1); //Add qestion nr to array of wrong answered questions
	  }
    }
    return {totalScore, wrongAnswers};
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
  };

  const unansweredQuestions = () => {
    const unanswered = [];
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i].length !== questions[i].correctAnswer.length) {
        unanswered.push(i + 1);
      }
    }
    return unanswered;
  };

  const renderQuestions = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const currentAnswer = userAnswers[currentQuestionIndex];

    return (
      <div key={currentQuestionIndex}>
        <div>Sort the array: [{currentQuestion.inputArray.join(', ')}]</div>
        <div>
          {currentQuestion.inputArray.map((number, inputIndex) => (
            <input
              key={inputIndex}
              type="number"
              //placeholder={inputIndex + 1}
              value={currentAnswer[inputIndex] || ''}
              onChange={(e) => handleInputChange(e, currentQuestionIndex, inputIndex)}
            />
          ))}
        </div>
      </div>
    );
  };

  const renderNavigation = () => {
    return (
      <div>
        <button onClick={handleBackClick} disabled={currentQuestionIndex === 0}>
          Back
        </button>
        <button onClick={handleNextClick} disabled={currentQuestionIndex === questions.length - 1}>
          Next
        </button>
        {currentQuestionIndex === questions.length - 1 && (
          <button onClick={handleQuizSubmit}>Submit Quiz</button>
        )}
      </div>
    );
  };

  const renderQuizResults = () => {
	if(quizSubmitted){
		const {totalScore, wrongAnswers} = calculateScore();
		return (
		  <div>
			<h2>Quiz Results:</h2>
			<p>Your Total Score: {totalScore} / {questions.length}</p>
			{wrongAnswers.length > 0 && (
			  <div>
				<p> Incorrect Answers:</p>
				<ul>
					{wrongAnswers.map((questionNumber) => (
						<li key={questionNumber}>Question {questionNumber}</li>
					))}
				</ul>
			   </div>
			)}
		  </div>
		);
	}
	return null;
  };

  return (
    <div>
      <h1>Merge Sort Quiz</h1>
      {quizSubmitted ? (
        renderQuizResults() )
       : (
        <div>
          {renderQuestions()}
          {renderNavigation()}
          <div>
            <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
            <p>Unanswered Questions: {unansweredQuestions().join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MergeSort;

