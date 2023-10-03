// src/components/mainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import pracBut from '../images/pracBut.jpg';
import testBut from '../images/testBut.jpg';
import visbut from '../images/visbut.jpeg';

const MainPage = () => {
  return (
    <div style={{backgroundColor: '#f5f5f5', padding: '30px'}}>
      
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#d3d3d3', padding: '20px'}}>
      <h1 style={{fontSize:'35px'}}>Data Structures and Algorithms: SORTING</h1>
      <p style={{fontSize: '25px'}}> Practice mode will allow you to practice sorting algorithms.<br />
          Test mode will allow you to write tests set by your Lecturer.<br />
          <b>NOTE: </b> Feedback may be sent to WITS Moodle page! <br />
      </p>
      <h2 style={{fontSize:'30px'}}>Choose mode:</h2>
      <div class="button container">
        <Link to="/practice">
          <img src={pracBut} alt="Practice Mode" className="resizedButton" />
        </Link>
        <Link to="/test">
          <img src={testBut} alt="Test Mode" className="resizedButton" />
        </Link>
        <Link to="/visualizer">
          <img src={visbut} alt="Visualizer Mode" className="resizedButton" />
        </Link>
      </div>
      <br />
      <p style={{fontSize:'20px',color: 'blue'}}>SD Project By: <i>"insert cooler group name"</i><br/>
      This version is just to get things started and is not the final product (obviously lol).
      </p>
    </div>

    </div>
  );
};

export default MainPage;
