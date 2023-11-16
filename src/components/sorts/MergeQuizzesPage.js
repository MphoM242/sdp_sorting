import React, { useState,useEffect } from 'react';
import QuizzesList from './QuizzesList';
import DBQuizzesList from './DBQuizzesList';
import { getFirestore,collectionGroup, collection, getDocs, or } from 'firebase/firestore';
import { query, where,orderBy } from 'firebase/firestore';
import Header from '../header/Header';
import './MergeQuizzesPageStyle.css';

const  MergeQuizzesPage= () => {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const db = getFirestore();
      const quizzesCol = collection(db, 'Quizzes');

      // Create a query to get documents from the "Quizzes" collection
      const q = query(quizzesCol, where('Sort Type', '==', 'Merge'), orderBy('Quiz ID', 'asc'));

      try {
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          quizId: doc.data()['Quiz ID'],
          sortType: doc.data()['Sort Type'],
          title: doc.data()['Title'],
        }));
        setQuizzes(data);
      } catch (error) {
        console.error('Error getting quizzes: ', error);
      }
    };
    
    fetchQuizzes(); // Call the function to fetch quizzes when the component mounts
    console.log("Selected Quiz: "+selectedQuiz);
    console.log(selectedQuiz);
    // Call the function to fetch quiz questions when the component mounts
  }, []);
  console.log(quizzes);

  useEffect(() => {
    console.log('Updated quiz questions:', quizQuestions);
    // You can perform any additional actions here after quizQuestions is updated
  }, [quizQuestions]);
  const fetchQuizQuestions = async (QuizID) => {
    const db=getFirestore();
    const demoQuestions=collection(db,'Sorts','Merge',QuizID.toString()); //REPLACE "0" WITH QUIZ ID
    //const demoQuestions = query(collectionGroup(db, '0'));

    try{
    const querySnapshot = await getDocs(demoQuestions);
    const data = querySnapshot.docs.map((doc) => ({
      questionId: doc.id,
      question: doc.data()['Question'],
      answer: doc.data()['Answer'],
      explanation: doc.data()['Explanation'],
      options:[doc.data()['Option A'],doc.data()['Option B'],doc.data()['Option C'],doc.data()['Option D']],
    }));
    setQuizQuestions(data);
  }catch(error){
      console.log("Error getting quiz questions: ",error);
    }
  };
    const onStartQuiz = async (quizId) => {
    const selected = quizzes.find(quiz => quiz.quizId=== quizId);

    const currentQ = quizQuestions[currentQuestionIndex]; //change index to currentQuestionIndex
    console.log("Selected: "+selected);
    console.log(selected);
    console.log("Quiz ID: "+(selected.quizId).toString());
    if (selected && selected.quizId === 0) {
      await fetchQuizQuestions(0);
      setSelectedQuiz(selected);
      //setQuizStarted(true);
  } 
  if (selected && selected.quizId ===1) {
    await fetchQuizQuestions(1);
    setSelectedQuiz(selected);
    //setQuizStarted(true);
}
if (selected && selected.quizId ===2) {
  await fetchQuizQuestions(2);
  setSelectedQuiz(selected);
  //setQuizStarted(true);
}
if (selected && selected.quizId ===3) {
  await fetchQuizQuestions(3);
  setSelectedQuiz(selected);
  //setQuizStarted(true);
}else {
    console.log('Quiz not found or has a different quizId:', quizId);
  }
  };

  const calculateScore = () => {
    let totalScore = 0;
    const wrongAnswers = [];
    for (let i = 0; i < quizQuestions.length; i++) {
      if (userAnswers[i] === quizQuestions[i].answer) { 
        totalScore++;
      } else {
        wrongAnswers.push(i + 1);
      }
    }
    return { totalScore, wrongAnswers };
  };

  const handleStart = (quizId) => {
    setQuizStarted(true);
    onStartQuiz(quizId);
  };

  const handleNextClick = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleBackClick = () => {
    if(currentQuestionIndex>0){
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
  };

  const unansweredQuestions = () => {
    const unanswered = [];
    for (let i = 0; i < quizQuestions.length; i++) {
      if (userAnswers[i]==null) {
        unanswered.push(i + 1);
      }
    }
    return unanswered;
  };


  const handleAnswerSelection = (questionId, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const renderQuestions = () => {
    const currentQuestion=quizQuestions[currentQuestionIndex];
    const currentAnswer=userAnswers[currentQuestionIndex];
    return(
      <div>
        <h3>Question {currentQuestionIndex+1}</h3>
        <p>{currentQuestion.question}</p>
        <form>
          {currentQuestion.options.filter((option)=>option).map((option,index)=>(
            <div key={index}>
              <input
                type="radio"
                id={'option${index}'}
                value={option}
                checked={userAnswers[currentQuestionIndex]===option}
                onChange={()=>handleAnswerSelection(currentQuestionIndex,option)}
              />
              <label htmlFor={'option${index}'}>{option}</label>
            </div>
          ))}
        </form>
      </div>
    );
  };

  const renderNavigation=()=>{
    return(
      <div>
      <div>
        <button className='styled-button' onClick={handleBackClick} disabled={currentQuestionIndex===0}>
          Back
        </button>
        <button className='styled-button' onClick={handleNextClick} disabled={currentQuestionIndex===quizQuestions.length-1}>
          Next
        </button>
        </div>
        <div>
        {currentQuestionIndex===quizQuestions.length-1 && (
          <button className='hover-button' onClick={handleQuizSubmit}>Submit Quiz</button>
        )}
      </div>
      </div>
    );
  };

  const renderResultsAndFeedback = () => {
    if (quizSubmitted) {
      const { totalScore, wrongAnswers } = calculateScore();

      return (
        <div>
          <h3>Quiz Results</h3>
          <p><b>Your Total Score:</b> {totalScore} / {quizQuestions.length}</p>

          {wrongAnswers.length > 0 && (
            <div>
              <p><b>Incorrect Answers:</b></p>
              <ul>
                {wrongAnswers.map((questionNumber) => (
                  <li key={questionNumber}>Question {questionNumber}</li>
                ))}
              </ul>
            </div>
          )}

          {quizQuestions.map((question, index) => (
            wrongAnswers.includes(index + 1) && (
              <div key={index}>
                <h4>Question {index + 1}</h4>
                <p>Your Answer: {userAnswers[index]}</p>
                <p>Correct Answer: {question.answer}</p>
                <p>Explanation: {question.explanation}</p>
              </div>
            )
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <Header />
      <h1>Practice Quizzes: </h1>
      {selectedQuiz ? (
        <div className='content'>
          <h1>Quiz: {selectedQuiz.title}</h1>

          {quizStarted ? (
            quizQuestions.length > 0 && currentQuestionIndex < quizQuestions.length ? (
              <div className='quiz'>
                {renderResultsAndFeedback()}
                {quizSubmitted ? null : (
                  <div>
                    {renderQuestions()}
                    <div>
                      <p><b>Unanswered Questions: </b>{unansweredQuestions().join(', ')}</p>
                    </div>
                    {renderNavigation()}
                  </div>
                )}
              </div>
            ) : (
              <div>
                <button className='hover-button' onClick={() => handleQuizSubmit()}>Submit</button>
              </div>
            )
          ) : (
            <button className='hover-button' onClick={() => handleStart(selectedQuiz.quizId)}>Start Quiz</button>
          )}
        </div>
      ) : (
        <DBQuizzesList onStartQuiz={onStartQuiz} />
      )}
      <div >
            <a href='/practice/merge/quizzes'>Back to Quiz List</a>
      </div>
      <div>
        <a href='/practice/merge'>Back to Merge-Sort main page</a>
      </div>
    </div>
  );

};

export default MergeQuizzesPage;
