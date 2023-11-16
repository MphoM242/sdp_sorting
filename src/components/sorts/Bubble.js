import React from 'react';
import './MergeSortStyle.css'; 
import '../MainPageStyle.css';
import Header from "../header/Header.js";
import Sidebar from '../header/Sidebar.js';

const BubbleSort= () => {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <div className='content'>
        <h2>What is bubble sort?</h2>
        <div className="definition">
          <p>
		  Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.
			 <br />
          </p>
        </div>
      <h2>More help:</h2>
      <div className="definition">
        <p>
          For more information on the Merge Sort algorithm (besides the information provided during lectures), visit the following links: <br />
        </p>
        <ul>
          <li><a href="https://www.geeksforgeeks.org/bubble-sort/">https://www.geeksforgeeks.org/merge-sort/</a></li>
          <li><a href="https://www.programiz.com/dsa/bubble-sort">https://www.programiz.com/dsa/merge-sort</a></li>
        </ul>
      </div>

      <h2>Practice:</h2>
      <div className="definition">
        <p>
          Test your knowledge about the Merge Sort Algorithm by attempting some quizzes:<br />
          <a href="/practice/bubble/quizzes">Click here for practice quizzes!</a>
        </p>
        <p>
          If you are not yet comfortable/confident about your knowledge, try the Visualizer Mode!<br/>
          This will guide and show you how the algorithm sorts numbers step-by-step. 
          <a href="/visualizer">Click here for Visualizer!</a>
        </p>
      </div>

      <div class='btn'>
        <a href='/practice'><button> Back</button></a>
      </div>
    </div>

    </div>
  );
};

export default BubbleSort;
