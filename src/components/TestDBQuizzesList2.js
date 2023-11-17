import React,{useState,useEffect} from 'react';
import TestQuiz2 from './TestQuiz2';
import './sorts/QuizzesList.css';
import { getFirestore, collection, getDocs, or } from 'firebase/firestore';
import { query, where,orderBy } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';


import Header from './header/Header';
//Fetch data from firebase
const TestDBQuizzesList2 = ({onStartQuiz}) => {

  const [quizzes, setQuizzes] = useState([]);
    useEffect(()=>{
      const fetchData=async()=>{
        const db=getFirestore();
        const testDetailsCol=collection(db,'Test Details');
        //const user=firebase.auth().currentUser;

          try{
            const q=query(testDetailsCol,where('Status','==','Past'),orderBy('Test ID','asc'));
            const querySnapshot=await getDocs(q);
            
            const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
            setQuizzes(data);
          }
          catch(error){
            console.log("Error getting upcoming test quizzes: ",error);
          }
    };
    fetchData();
  }, []);

  const [userPastTests, setUserPastTests] = useState([]);

  useEffect(() => {
    const fetchPastTests = async () => {
      const db = getFirestore();
      const auth = getAuth();
      const user = auth.currentUser;
  
      // Check if the user is authenticated before proceeding
      if (user) {
        const userId = user.uid;
        console.log("User ID:", userId);
        console.log("User:", user.email);
  
        const userDocRef = collection(db, 'Users');
  
        try {
          const q = query(userDocRef, where('Document ID', '==', userId));
          const querySnapshot = await getDocs(q);
  
          querySnapshot.forEach((doc) => {
            const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            //console.log("Data:", data);
            setUserPastTests((prevTests) => [...prevTests, data]);
            console.log("Data:", data);
          }
          );
          
        } catch (error) {
          console.error('Error getting past tests: ', error);
        }
      } else {
        console.error('User is not authenticated');
      }
    };
  
    fetchPastTests();
  }, []);

  return (
    <div>
        <table className='styled-table'>
        <thead>
          <tr>
            <th>Test 0</th>
            <th>Test 1</th>
            <th>Test 2</th>
            <th>Test 3</th>
            {/* Add other test headers here */}
          </tr>
        </thead>
        <tbody>
  {userPastTests.map((userData) => (
    <tr key={userData.userID}>
      <td>{userData.userID}</td>
      {userData.testMarks.map((testMark, index) => (
        <td key={index}>{testMark}</td>
      ))}
      {/* Add other test marks here */}
    </tr>
  ))}
</tbody>
      
        </table>
    </div>
  );
};

export default TestDBQuizzesList2;


