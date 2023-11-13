// src/components/practicePage.js
import React from 'react';
import './MergeSortStyle.css'; 
import Header from "../header/Header.js";

const MergeSort= () => {
  return (
    <div>
      <Header/>
      <div className='content'>
        <h1>Sorting:</h1>
        <h2>What is merge sort?</h2>
        <div className="definition">
          <p>
          Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, <br />and then merging the sorted subarrays back together to form the final sorted array.
             <br />
          </p>
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

      <div className='backButton'>
        <a href='/practice'>Back</a>
      </div>
    </div>

    </div>
  );
};

export default MergeSort;
