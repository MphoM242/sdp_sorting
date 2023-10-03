import React, { Component } from 'react';
import './BubbleSortVisualizer.css';

class BubbleSortVisualizer extends Component {
    constructor() {
      super();
      this.state = {
        userInput: '',
        animationArray: [], // Store the state of the animation
        sorting: false,
        initialAnimation: true,
        animationIndex: 0, // Index to track the animation step
        paused: false, // Flag to pause sorting
      };
    }
  
    handleInputChange = (event) => {
      this.setState({ userInput: event.target.value });
    };
  
    bubbleSort = async () => {
      this.setState({ sorting: true, initialAnimation: false, paused: false });
  
      const array = this.state.userInput.split(',').map(Number);
      const n = array.length;
      const animationArray = [];
  
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          if (array[j] > array[j + 1]) {
            // Swap elements
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
  
            // Store the animation step
            animationArray.push({
              array: [...array], // Copy the current state of the array
              indices: [j, j + 1], // Indices being compared
            });
          }
        }
      }
  
      // Add the final sorted array to the animationArray
      animationArray.push({
        array: [...array],
        indices: [],
      });
  
      // Animate the sorting process
      for (let i = 0; i < animationArray.length; i++) {
        this.setState({ animationArray: [animationArray[i]], animationIndex: i });
        await new Promise((resolve) => {
          if (this.state.paused) {
            // Pause sorting
            return;
          }
          setTimeout(resolve, 1000); // Adjust this delay as needed
        });
      }
  
      this.setState({ sorting: false });
    };
  
    handleSortClick = () => {
      if (!this.state.sorting) {
        this.bubbleSort();
      }
    };
  
    handlePauseClick = () => {
      this.setState({ paused: true });
    };
  
    handleRevertClick = () => {
      this.setState({
        animationIndex: 0,
        paused: false,
      });
    };
  
    handleResumeClick = () => {
      this.setState({ paused: false });
      this.animateSorting();
    };
  
    animateSorting = async () => {
      const { animationArray, animationIndex } = this.state;
  
      for (let i = animationIndex; i < animationArray.length; i++) {
        this.setState({ animationArray: [animationArray[i]], animationIndex: i });
        await new Promise((resolve) => {
          if (this.state.paused) {
            // Pause sorting
            return;
          }
          setTimeout(resolve, 1000); // Adjust this delay as needed
        });
      }
  
      this.setState({ sorting: false });
    };
  
    render() {
      const { userInput, sorting, animationArray, initialAnimation, paused } = this.state;
  
      return (
        <div className="sorting-visualizer">
          <h1>Bubble Sort Visualizer</h1>
          <input
            type="text"
            placeholder="Enter numbers (comma-separated)"
            value={userInput}
            onChange={this.handleInputChange}
          />
  
          <div className="array-container">
            <div className={`array-row ${sorting || initialAnimation ? 'sorting' : ''}`}>
              {animationArray[0]?.array.map((value, idx) => (
                <div
                  className={`array-bar ${sorting || initialAnimation ? 'sorting' : ''}`}
                  key={idx}
                  style={{
                    width: '30px',
                    height: '30px',
                    display: 'inline-block',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #007bff',
                    borderRadius: '5px',
                    marginRight: '5px',
                    transition: 'all 0.2s ease-in-out', // CSS transition
                    backgroundColor:
                      animationArray[0]?.indices.includes(idx) && (sorting || initialAnimation)
                        ? '#ff0000' // Highlight the elements being compared
                        : '',
                  }}
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
  
          <button onClick={this.handleSortClick} disabled={sorting}>
            Sort
          </button>
          <button onClick={this.handlePauseClick} disabled={!sorting || paused}>
            Pause
          </button>
          <button onClick={this.handleRevertClick} disabled={!sorting || !paused}>
            Revert
          </button>
          <button onClick={this.handleResumeClick} disabled={!sorting || !paused}>
            Resume
          </button>
        </div>
      );
    }
  }

export default BubbleSortVisualizer;
