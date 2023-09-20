// src/components/mainPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h1>Welcome to Your Website!!!</h1>
      <Link to="/practice">
        <button>Practice Mode</button>
      </Link>
      <Link to="/test">
        <button>Test Mode</button>
      </Link>
    </div>
  );
};

export default MainPage;
