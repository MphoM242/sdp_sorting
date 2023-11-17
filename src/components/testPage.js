import React from 'react';
import './PracticePageStyle.css'; 
import './MainPageStyle.css'; 
import Sidebar from "./header/Sidebar.js";
import Header from "./header/Header.js";
import sortHow from '../images/sorting.jpg';
import {useNavigate } from 'react-router-dom';

const TestPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }
  
  return (
    <div>
      <div  className='title-box'>
        <h1 style={{fontSize: "2.5rem",color: "green"}}>Test Mode</h1>
      </div>

      <Header/>

      <div className='title-box'>
        <h1>Sorting</h1>

        <div className='button-row'>
        <div class='btn' style={{marginLeft:'auto',marginRight:'250px',marginBottom:'-30px',marginTop:'30px'}}>
          <a href='/'><button>Main Page</button></a>
        </div>
        <div class='btn' style={{marginLeft:'auto',marginRight:'250px',marginBottom:'-30px',marginTop:'30px'}}>
          <button onClick={goBack}>Back to previous page</button>
        </div>
        </div>

      </div>
      
      <div className='content'>
        </div>
    </div>
  );
};

export default TestPage;

