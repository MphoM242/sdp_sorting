import React, { useState } from 'react';
import './SortingAlgorithmsPage.css'; 
import BubbleSortVisualizer from './BubbleSortVisualizer';
import MergeSortVisualizer from './MergeSortVisualizer';
//import QuickSortVisualizer from './QuickSortVisualizer';
import menuIcon from  '../../images/MenuIcon.png';
import Header from '../header/Header';

const sortingAlgorithms = [
  {
    title: 'Bubble Sort',
    description: 'Bubble Sort is a sorting algorithm that operates by swapping nearby elements repeatedly if they are out of order. After every loop or pass, the largest item (in increasing order) or the lowest element (in decreasing order) reaches the end. The list is traversed again and again until it is sorted.',
    // Add more properties as needed
  },
  // Add information for other sorting algorithms
  {
    title: 'Merge Sort',
    description: 'Merge Sort uses the divide and conquer algorithm by dividing the input array into smaller subarrays, sort each subarray, and then then merges the subarrays back together to obtain a sorted array',
    // Add more properties as needed
  },
  {
    title: 'Quick Sort',
    description: 'QuickSort is uses a technique that starts by selecting a special item from a list, called a "pivot".That then separates everything into two groups: all elements smaller than the pivot come before it, and all elements greater than the pivot come after it.',
    // Add more properties as needed
  },
];
const SortingAlgorithmsPage = () => {
  const [visualizerAlgorithm, setVisualizerAlgorithm] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const startVisualization = (algorithm) => {
    setVisualizerAlgorithm(algorithm);
  };

    // Function to toggle the menu drawer visibility
    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };

  
  return (
    <div className="sorting-algorithms-page">
    <div className="menu-toggle-button" onClick={toggleDrawer}>
      <div className={`menu-toggle-icon ${isDrawerOpen ? 'open' : ''}`}
      style={{ backgroundImage: `url(${menuIcon})` }}
      ></div>
    </div>

    <Header/>
    <p className="page-description">
      Welcome to the Sorting Algorithms visualization page. Learn and understand how different sorting algorithms work and compare their performance. Click on "Visualize" to see them in action!
    </p>
    <div className="page-content">
      {/* Navigation drawer */}
      <div className={`navigation-drawer ${isDrawerOpen ? 'open' : ''}`}
      >
        <ul>
          <li>Practice</li>
          <li>Test</li>
          <li>Grades</li>
        </ul>
      </div>
        <div className="algorithm-list">
          {sortingAlgorithms.map((algorithm, index) => (
            <div key={index} className="algorithm-card">
              <h2>{algorithm.title}</h2>
              <p>{algorithm.description}</p>
              <div class="visualise-btn"><button onClick={() => startVisualization(algorithm)} className="visualize-button">Visualize</button></div>
            </div>
          ))}
        </div>
        <div className="visualizer-container">
          {/* Conditional rendering based on the selected algorithm */}
          {visualizerAlgorithm && (
            visualizerAlgorithm.title === 'Bubble Sort' ? (
              <BubbleSortVisualizer />
            ) : 
              visualizerAlgorithm.title === 'Merge Sort' ? (
                <MergeSortVisualizer />
              ) :
            /* (
                visualizerAlgorithm.title === 'Quick Sort' ? (
                  <QuickSortVisualizer />
                ) :*/ null
           // )
          )}
        </div>
      </div>
    </div>
  );
};

export default SortingAlgorithmsPage;
