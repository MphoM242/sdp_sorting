// src/components/mainPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MainPageStyle.css';
import pracBut from '../images/practise-group.png';
import testBut from '../images/test-group.png';
import visbut from '../images/visualise-group.png';
import bg from '../images/background.png';
import cubeChain from '../images/cube-chain.png';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './Firebase'
import {signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Header from './header/Header';
import MainPageHeader from './header/MainPageHeader';

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
    <div style={{backgroundImage: 'url("../images/background.png")', backgroundSize: 'cover', padding: '30px'}}>
      
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh',backgroundImage: 'url("../images/background.png")', backgroundSize: 'cover', padding: '20px'}}>
      <MainPageHeader/>
      
      <div class="cube-chain">
            <a href="#">
                <div id="start-button"> <img src={cubeChain}/> </div>
            </a>
      </div>

      <div class="button container">
        <a href="/practice">
          <img src={pracBut} alt="Practice Mode" className="resizedButton" />
        </a>
        <a href="/visualizer">
          <img src={visbut} alt="Visualizer Mode" className="resizedButton" />
        </a>
        <a href="/test">
          <img src={testBut} alt="Test Mode" className="resizedButton" />
        </a>
        
      </div>
      <br />
      
    </div>
    </div>
    </nav>
    
    <footer class="main-footer"> 
    <div class="container">
        <nav class="footer-nav"> 
            <ul>
                <li><a href="https://github.com/KagisoLesomo/SortingPlugin">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href='/release-notes'>Release Notes</a></li>
            </ul>
            Copyright &#169; 2023 &#60;insert cool group name&#47;&#62;. All rights reserved.
        </nav>
        <nav class="footer-nav"> 
            <ul>
                <li> Ayanda | Puseletso | Kagiso | Nqobile | Senzo | Mpho </li>
            </ul>
        </nav>
    </div>
    </footer>

    </section>

    
  );
};

export default MainPage;