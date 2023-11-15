import React, { useState,useEffect } from 'react';
import QuizzesList from './QuizzesList';
import DBQuizzesList from './DBQuizzesList';
import { getFirestore,collectionGroup, collection, getDocs, or } from 'firebase/firestore';
import { query, where,orderBy } from 'firebase/firestore';
import Header from '../header/Header';

const  MergeQuizzesPage= () => {
  const [quizzes, setQuizzes] = useState([]);
  const [quizQuestions, setQuizQuestions] = useState([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizStarted, setQuizStarted] = useState(false);
  
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

    const fetchQuizQuestions = async () => {
      const db=getFirestore();
      const demoQuestions = query(collectionGroup(db, '0'));

      try{
      const querySnapshot = await getDocs(demoQuestions);
      const data = querySnapshot.docs.map((doc) => ({
        questionId: doc.id,
        question: doc.data()['Question'],
        answer: doc.data()['Answer'],
        explanation: doc.data()['Explanation'],
        options:[doc.data()['Option A'],doc.data()['Option B'],doc.data()['Option C'],doc.data()['Option D']],
      }));
       /*const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setQuizQuestions(data);
      }*/
      setQuizQuestions(data);
    }catch(error){
        console.log("Error getting quiz questions: ",error);
      }
    };
    fetchQuizzes(); // Call the function to fetch quizzes when the component mounts
    fetchQuizQuestions();


  }, []);
  console.log(quizzes);
  console.log(quizQuestions);

  //Fetch quiz data (questions and answers) from sorts collection:
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const onStartQuiz = (quizId) => {
    //console.log('Starting quiz', quizId);
    window.alert('Starting quiz: ' + quizId);
    const selected = quizzes.find(quiz => quiz.quizId=== quizId);
    const currentQ = quizQuestions[currentQuestionIndex]; //change index to currentQuestionIndex
    console.log("Selected: "+selected);
    console.log(selected);
    console.log("Quiz Question: "+currentQ);
    console.log(currentQ);
    window.alert("Quiz Question: "+currentQ.question);
    console.log("Quiz Question Options: "+currentQ.options);
    console.log(currentQ.options);

    setSelectedQuiz(selected);
    setQuizStarted(true);
    
  };

  const handleStart = () => {
    setQuizStarted(true);
  }

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleAnswerSelection = (questionId, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  /*return (
    <div>
      <Header/>
      <h1>Practice Quizzes: </h1>
      {selectedQuiz ? (
        <div>
          <h2>Quiz: {selectedQuiz.title}</h2>
          <button onClick={handleStart}>Start</button>
          <div>
            <a href='/practice/merge/quizzes'>Back to Quiz List</a>
          </div>
        </div>
      ) : (
        // Render the list of quizzes
        <DBQuizzesList onStartQuiz={onStartQuiz} />
      )}
      <div>
        <a href='/practice/merge'>Back to Merge-Sort main page</a>
      </div>
    
    </div>
  );*/

  return (
    <div>
      <Header />
      <h1>Practice Quizzes: </h1>
      {selectedQuiz ? (
        <div>
          <h2>Quiz: {selectedQuiz.title}</h2>
          {quizStarted ? (
            quizQuestions.length>0 && currentQuestionIndex < quizQuestions.length ? (
              <div>
                <h3>Question {currentQuestionIndex + 1}</h3>
                <p>{quizQuestions[currentQuestionIndex]?.question}</p>
                <form>
                  {quizQuestions[currentQuestionIndex]?.options.filter((option)=>option).map((option, index) => (
                    <div key={index}>
                        <input
                          type="radio"
                          id={'option${index}'}
                          value={option}
                          checked={userAnswers[quizQuestions[currentQuestionIndex]?.questionId] === option}
                          onChange={() =>
                            handleAnswerSelection(quizQuestions[currentQuestionIndex]?.questionId, option)
                          }
                        />
                        <label htmlFor={'option${index}'}>{option}</label>
                    </div>
                  ))}
                </form>
                <button onClick={handleNextQuestion}>Next Question</button>
              </div>
            ) : (
              <div>
                <h3>Quiz Completed!</h3>
                <button>Submit</button>
              </div>
            )
          ) : (
            <button onClick={() => onStartQuiz(selectedQuiz.quizId)}>Start Quiz</button>
          )}
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
