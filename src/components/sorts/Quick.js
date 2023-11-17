import React from 'react';
import Header from "../header/Header.js";
import Sidebar from "../header/Sidebar.js"
import quickHow from '../sort-images/how-quick-works.png';
import quickAlg from '../sort-images/quickAlg.png';
import {useNavigate } from 'react-router-dom'

import '../PracticePageStyle.css';
import'../MainPageStyle.css';

const QuickSort= () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Sidebar/>
      <Header/>   
      
      <div className='title-box'>
        <h1>Quick Sort</h1>

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
        <h2>What is Quick sort?</h2>
        <div className="definition">
          <p>
          QuickSort is a sorting algorithm based on the <b>Divide and Conquer</b> algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.
             <br />
          </p>
        </div>
        
        <h2>How does it work?</h2>
        <div className="image-box" style={{alignContent:'center',alignItems:'center',justifyContent:'center'}}>
          <img src={quickHow} alt="How Quick Sort works" width="600" height="600"></img>
          <img src={quickAlg} alt="Quick Sort Algorithm" width="600" height="600"></img>

        </div>  
      <h2>More help:</h2>
      <div className="definition">
        <p>
          For more information on the Bubble Sort algorithm (besides the information provided during lectures), visit the following links: <br />
        </p>
        <ul>
          <li><a href="https://www.geeksforgeeks.org/Bubble-sort/">https://www.geeksforgeeks.org/quick-sort/</a></li>
          <li><a href="https://www.programiz.com/dsa/Bubble-sort">https://www.programiz.com/dsa/quick-sort</a></li>
        </ul>
      </div>

      <h2>Practice:</h2>
      <div className="definition">
        <p>
          Test your knowledge about the Bubble Sort Algorithm by attempting some quizzes:<br />
          <a href="/practice/quick/quizzes">Click here for practice quizzes!</a>
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

export default QuickSort;
