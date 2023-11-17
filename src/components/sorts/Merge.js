// src/components/practicePage.js
import React from 'react';
import Header from "../header/Header.js";
import Sidebar from "../header/Sidebar.js";
import mergeHow from '../sort-images/how-merge-works.png';
import mergeAlg from '../sort-images/mergeAlg.png';
import {useNavigate } from 'react-router-dom';

import '../PracticePageStyle.css';
import'../MainPageStyle.css';

const MergeSort= () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Sidebar/>
      <Header/>   
      
      <div className='title-box'>
        <h1>Merge Sort</h1>

        <div className='button-row'>
        <div class='btn' style={{marginLeft:'auto',marginRight:'250px',marginBottom:'-30px',marginTop:'30px'}}>
          <a href='/practice'><button>Back to Sorting Main Page</button></a>
        </div>
        <div class='btn' style={{marginLeft:'auto',marginRight:'250px',marginBottom:'-30px',marginTop:'30px'}}>
          <button onClick={goBack}>Back to previous page</button>
        </div>
        </div>

      </div>
      
      <div className='content'>
        <h2>What is merge sort?</h2>
        <div className="definition">
          <p>
          Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, <br />and then merging the sorted subarrays back together to form the final sorted array.
             <br />
          </p>
        </div>

        <h2>How does it work?</h2>
        <div className="image-box" style={{alignContent:'center',alignItems:'center',justifyContent:'center'}}>
          <img src={mergeHow} alt="How Merge Sort works" width="600" height="600"></img>
          <img src={mergeAlg} alt="Merge Sort Algorithm" width="600" height="600"></img>

        </div>  

      <h2>More help:</h2>
      <div className="definition">
        <p>
          For more information on the Merge Sort algorithm (besides the information provided during lectures), visit the following links: <br />
        </p>
        <ul>
          <li><a href="https://www.geeksforgeeks.org/merge-sort/">https://www.geeksforgeeks.org/merge-sort/</a></li>
          <li><a href="https://www.programiz.com/dsa/merge-sort">https://www.programiz.com/dsa/merge-sort</a></li>
        </ul>
      </div>

      <h2>Practice:</h2>
      <div className="definition">
        <p>
          Test your knowledge about the Merge Sort Algorithm by attempting some quizzes:<br />
          <a href="/practice/merge/quizzes">Click here for practice quizzes!</a>
        </p>
        <p>
          If you are not yet comfortable/confident about your knowledge, try the Visualizer Mode!<br/>
          This will guide and show you how the algorithm sorts numbers step-by-step. 
          <a href="/visualizer">Click here for Visualizer!</a>
        </p>
      </div>
    </div>

    </div>
  );
};

export default MergeSort;
