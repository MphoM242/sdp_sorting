// src/components/practicePage.js
import React from 'react';
import './PracticePageStyle.css'; 

const PracticePage = () => {
  return (
    <div>
      <div className="sidebar">
        <ul>
          <li>Bubble Sort</li>
          <li>MergeSort</li>
          <li>QuickSort</li>
          <li>Insertion Sort</li>
          <li>Selection Sort</li>
          <li>OtherSort</li>
        </ul>
      </div>
      <div className="content">
          <h2>Practice Mode</h2>
          {/* General Sorting info */}
      </div>
    </div>
  );
};

export default PracticePage;
