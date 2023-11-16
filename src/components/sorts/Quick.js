// src/components/practicePage.js
import React from 'react';
import './QuickSortStyle.css'; 
import Header from "../header/Header.js";
import Sidebar from "../header/Sidebar.js"

const BubbleSort= () => {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <div className='content'>
        <h1>Sorting:</h1>
        <h2>What is Quick sort?</h2>
        <div className="definition">
          <p>
          Bubble sort is defined as a sorting algorithm that works by comparing adjacent elements, and swapping them  <br />and The pass through the list is repeated until to form the final sorted array.
             <br />
          </p>
        </div>
      <h2>More help:</h2>
      <div className="definition">
        <p>
          For more information on the Bubble Sort algorithm (besides the information provided during lectures), visit the following links: <br />
        </p>
        <ul>
          <li><a href="https://www.geeksforgeeks.org/Bubble-sort/">https://www.geeksforgeeks.org/Bubble-sort/</a></li>
          <li><a href="https://www.programiz.com/dsa/Bubble-sort">https://www.programiz.com/dsa/Bubble-sort</a></li>
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

      <div className='backButton'>
        <a href='/practice'>Back</a>
      </div>
    </div>

    </div>
  );
};

export default BubbleSort;
