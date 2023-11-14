// src/components/mainPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pracBut from '../images/pracBut.jpg';
import testBut from '../images/testBut.jpg';
import visbut from '../images/visbut.jpeg';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './Firebase'
import {signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Header from './header/Header';

const MainPage = () => {

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          console.log("uid", uid);
          //window.alert("still signed in: "+ user.email);
        } else {
          // User is signed out
          // ...
          console.log("user is logged out");
          //window.alert("user is logged out");
        }
      });
     
  }, [])
  const navigate = useNavigate();
  return (
    <section>
    <nav>
    <div style={{backgroundColor: '#f5f5f5', padding: '30px'}}>
      
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#d3d3d3', padding: '20px'}}>
      <Header />
      <h1 style={{fontSize:'35px'}}>Data Structures and Algorithms: SORTING</h1>
      <p style={{fontSize: '25px'}}> Practice mode will allow you to practice sorting algorithms.<br />
          Test mode will allow you to write tests set by your Lecturer.<br />
          <b>NOTE: </b> Feedback may be sent to WITS Moodle page! <br />
      </p>
      <h2 style={{fontSize:'30px'}}>Choose mode:</h2>
      <div class="button container">
        <a href="/practice">
          <img src={pracBut} alt="Practice Mode" className="resizedButton" />
        </a>
        <a href="/test">
          <img src={testBut} alt="Test Mode" className="resizedButton" />
        </a>
        <a href="/visualizer">
          <img src={visbut} alt="Visualizer Mode" className="resizedButton" />
        </a>
      </div>
      <br />
      <p style={{fontSize:'20px',color: 'blue'}}>SD Project By: <i>"insert cooler group name"</i><br/>
      </p>
    </div>
    </div>
    </nav>
    </section>
  );
};

export default MainPage;
