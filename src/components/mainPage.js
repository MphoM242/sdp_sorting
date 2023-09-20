// src/components/mainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import pracButton from '.public/pracBut.jpg';

const MainPage = () => {
  return (
    <div>
      <h1>Welcome to Your Website!!!</h1>
      <Link to="/practice">
        <img src={pracButton} alt="Practice Button" />
      </Link>
      <Link to="/test">
        <button>Test Mode</button>
      </Link>
    </div>
  );
};

export default MainPage;
