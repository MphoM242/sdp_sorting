import React from 'react';
import './sorts/MergeQuizzesPageStyle.css';
import './PracticePageStyle.css'; 
import './MainPageStyle.css'; 
import './sorts/QuizzesList.css';
import Sidebar from "./header/Sidebar.js";
import Header from "./header/Header.js";
import sortHow from '../images/sorting.jpg';
import {useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { getFirestore,collectionGroup, collection, getDocs,getDoc,doc,updateDoc, or } from 'firebase/firestore';
import { query, where,orderBy } from 'firebase/firestore';
import TestDBQuizzesList from './TestDBQuizzesList';
import PastTestsList from "./TestDBQuizzesList2.js"
import { getAuth } from 'firebase/auth';


const TestPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

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
      const quizzesCol = collection(db, 'Test Details');

      // Create a query to get documents 
      const q = query(quizzesCol, where('Status', '==', 'Upcoming'), orderBy('Test ID', 'asc'));

      try {
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          quizId: doc.data()['Test ID'],
          status: doc.data()['Status'],
          title: doc.data()['Title'],
          duration: doc.data()['Duration'],
          date: doc.data()['Date'],
          location: doc.data()['Location'],
          time: doc.data()['Time'],
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
    const demoQuestions=collection(db,'Tests','Upcoming',QuizID.toString()); //REPLACE "0" WITH QUIZ ID
    //const demoQuestions = query(collectionGroup(db, '0'));

    try{
    const querySnapshot = await getDocs(demoQuestions);
    const data = querySnapshot.docs.map((doc) => ({
      questionId: doc.id,
      question: doc.data()['Question'],
      answer: doc.data()['Answer'],
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
    await fetchQuizQuestions(selected.title);
    setSelectedQuiz(selected);
    //setQuizStarted(true);
}
if (selected && selected.quizId ===2) {
  await fetchQuizQuestions(selected.title);
  setSelectedQuiz(selected);
  //setQuizStarted(true);
}
if (selected && selected.quizId ===3) {
  await fetchQuizQuestions(selected.title);
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
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <div className='title-box'>
        <h1>Test Mode</h1>
      </div>
      <Header />

      <div className='title-box'>
        <h1>Test Quizzes</h1>

        <div className='button-row'>
        <div class='btn' style={{marginLeft:'auto',marginRight:'250px',marginBottom:'-30px',marginTop:'30px'}}>
          <a href='/'><button>Back to Main Page</button></a>
        </div>
        <div class='btn' style={{marginLeft:'auto',marginRight:'250px',marginBottom:'-30px',marginTop:'30px'}}>
          <a href='/test'><button>Back to Test Quizzes</button></a>
        </div>
        </div>

      </div>

      <div className='content'>
        <h1 style={{color:'white'}}> Upcoming Tests:</h1>
      {selectedQuiz ? (
        <div className='content'>
          <h1 style={{color:'white'}}>Quiz: {selectedQuiz.title}</h1>

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
              <div class='btn'>
                <button onClick={() => handleQuizSubmit()}>Submit</button>
              </div>
            )
          ) : (
            <div class='btn'>
              <button onClick={() => handleStart(selectedQuiz.quizId)}>Start Quiz</button>
            </div>
          )}
        </div>
      ) : (
        <TestDBQuizzesList onStartQuiz={onStartQuiz} />
      )}
      </div>
      <div className='content'>
        <h1 style={{color:'white'}}> Past Tests:</h1>
        <PastTestsList  />
      </div>



    </div>
  );

};

export default TestPage;

  