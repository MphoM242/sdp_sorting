// src/components/mainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import pracBut from '../images/pracBut.jpg';
import testBut from '../images/testBut.jpg';

const MainPage = () => {
  return (
    <div>
      <h1>Welcome to Your Website!!!</h1>
      <Link to="/practice">
        <img src={pracBut} alt="Practice Mode" className="resizedButton" />
      </Link>
      <Link to="/test">
        <img src={testBut} alt="Test Mode" className="resizedButton" />
      </Link>
    </div>
  );
};

export default MainPage;
