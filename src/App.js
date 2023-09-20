import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import mainPage from './components/mainPage';
import practicePage from './components/practicePage';
import testPage from './components/testPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/practice" element={<practicePage />} />
        <Route path="/test" element={<testPage />} />
        <Route path="/" element={<mainPage />} />
      </Routes>
    </Router>
  );
}
export default App;
