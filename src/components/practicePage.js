// src/components/practicePage.js
import React from 'react';
import './PracticePageStyle.css'; 
import './MainPageStyle.css'; 
import Sidebar from "./header/Sidebar.js";
import Header from "./header/Header.js";
import sortHow from '../images/sorting.jpg';
import {useNavigate } from 'react-router-dom';

const PracticePage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }
  
  return (
    <div>
      <Sidebar />
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
        <h2>What is Sorting?</h2>
        
        <div className="definition">
          <p>
            Sorting is the process of arranging a list of elements in a particular order. For example, if we have a list of integers of length N, we may want to sort them in ascending order. <br />
            A sorting algorithm is used to rearrange elements of a given list/array according to a comparison operator on the elements. <br/>The comparison operator is used to decide the new order of element in the respective data structure. <br />
            There are many different sorting algorithms, each has its own advantages and limitations. <br />
          </p>
        </div>
        <h2>Sorting Algorithms:</h2>
        <div className="definition">
           <p>
            There are many sorting algorithms, each has its own advantages and limitations. <br />
            The following are some of the most common sorting algorithms: <br />
           </p>
           <ul>
            <li>Bubble Sort</li>
            <li>Selection Sort</li>
            <li>Insertion Sort</li>
            <li>Merge Sort</li>
            <li>Quick Sort</li>
            <li>Heap Sort</li>
          </ul>
      </div>

      <h2>General sorting example:</h2>
      <div className="definition">
        <p style={{fontSize:'30px',textAlign:'center'}}>
          The following is a general example of sorting a list of integers in ascending order: <br />
        </p>
        <div className="image" style={{alignContent:'center',alignItems:'center',justifyContent:'center'}}>
          <img src={sortHow} alt="How Sorting works" width="600" height="600"></img>
        </div>  
      </div>

      <h2>Practice:</h2>
      <div className="definition">
        <p style={{fontSize:'30px',textAlign:'center'}}>Click on the sorting algorithm you want to practice:</p>
        <ul>
          <li><div class='btn'><a href="/practice/bubble"><button>BUBBLE SORT</button></a></div></li>
          <li><div class='btn'><a href="/practice/merge"><button>MERGE SORT</button></a></div></li>
          <li><div class='btn'><a href="/practice/quick"><button>QUICK SORT</button></a></div></li>
        </ul>
      </div>

      <h2>More help:</h2>
      <div className="definition">
        <p>
          <b>NOTE:</b> This site is meant to work alongside Lecture knowledge for testing and to provide extra practice on Sorting. <br />
          For more information on sorting algorithms (besides the information provided during lectures), visit the following links: <br />
        </p>
        <ul>
          <li><a href="https://www.geeksforgeeks.org/sorting-algorithms/">https://www.geeksforgeeks.org/sorting-algorithms/</a></li>
          <li><a href="https://www.tutorialspoint.com/data_structures_algorithms/sorting_algorithms.htm">https://www.tutorialspoint.com/data_structures_algorithms/sorting_algorithms.htm</a></li>
          <li><a href="https://www.programiz.com/dsa/sorting-algorithm">https://www.programiz.com/dsa/sorting-algorithm</a></li>
        </ul>
      </div>
    </div>

    </div>
  );
};

export default PracticePage;
