// src/components/mainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import pracBut from '../images/pracBut.jpg';
import testBut from '../images/testBut.jpg';

const MainPage = () => {
  return (
    <div>
      <h1>Data Structures and Algorithms: SORTING</h1>
      <p> Practice mode will allow you to practice sorting algorithms.<br />
          Test mode will allow you to write tests set by your Lecturer.<br />
          <b>NOTE: </b> Feedback may be sent to WITS Moodle page! <br />
      </p>
      <h2>Choose mode:</h2>
      <Link to="/practice">
        <img src={pracBut} alt="Practice Mode" className="resizedButton" />
      </Link>
      <Link to="/test">
        <img src={testBut} alt="Test Mode" className="resizedButton" />
      </Link>
    
      <p><font size="-1">SD Project By: <i>"insert cooler group name"</i><br/>
      This version is just to get things started and is not the final product (obviously lol).
      </font></p>
      
    </div>
    
  );
};

export default MainPage;
