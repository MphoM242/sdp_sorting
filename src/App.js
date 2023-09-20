import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import PracticePage from './components/PracticePage';
import TestPage from './components/TestPage';
//import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
export default App;
