import React, { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import PracticePage from './components/PracticePage';
import TestPage from './components/TestPage';
import Bubble from './components/sorts/Bubble';
import Insertion from './components/sorts/Insertion';
import Selection from './components/sorts/Selection';
import Merge from './components/sorts/Merge';
import MergeQuizzesPage from './components/sorts/MergeQuizzesPage';
import Quick from './components/sorts/Quick';
import SortingAlgorithmsPage from './components/sorts/SortingAlgorithmsPage';

import {OtherSort,Overview,Practice} from './components/sorts/OtherSort';

import Login from './components/Login';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyB5y7LSWCoG2xLtotgvJQnvdWranfNmLgc",
  authDomain: "sortingplugin.firebaseapp.com",
  projectId: "sortingplugin",
  storageBucket: "sortingplugin.appspot.com",
  messagingSenderId: "821141428347",
  appId: "1:821141428347:web:c76ae542619aac9d536ade",
  measurementId: "G-P4VSY791C2"
};
const app = initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth(app);

    // Add an observer to watch for changes in the user's authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // Clean up the observer when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/visualizer" element={<SortingAlgorithmsPage />} />
        <Route path="/practice/bubble" element={<Bubble />} />
        <Route path="/practice/insertion" element={<Insertion />} />
        <Route path="/practice/selection" element={<Selection />} />
        <Route path="/practice/merge" element={<Merge />} />
        <Route path="/practice/merge/quizzes" element={<MergeQuizzesPage /> }/>
        <Route path="/practice/quick" element={<Quick />} />
      
        <Route path="/other" element={<OtherSort />} />
        <Route path="/other/overview" element={<Overview />} />
        <Route path="/other/practice" element={<Practice />} />

        <Route path="/login" element={<Login />} />
        <Route path="/" element={user ?(
            <MainPage />
          ):(<Navigate to="/login"/>)} />
      </Routes>
    </Router>
  );
}
export default App;
