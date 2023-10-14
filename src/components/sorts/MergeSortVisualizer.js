import React, { Component } from 'react';
import './MergeSortVisualizer.css';
const sideMargin = 20;
const topMargin = 20;
let timeout = getTimeout();

class MergeSortVisualizer extends Component {
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


/**
 * Creates a div.array-container that containes all indices given
 * @private
 * @param {link tag} arr - original div.array-container
 * @param {number} from - start index
 * @param {number} to - end index (not included)
 * @returns {link tag} div.array-container extracted from original
 */
 
 createSubArray= (arr, from, to) =>{
    let $container = $('<div></div>').addClass('array-container');
    for (let i = from; i < to; i++) {
        let $value = $('<p></p>').text($(arr.childNodes[i]).text());
        let $element = $('<div></div>').addClass('array-element');
        $container.append($element.append($value));
    }
    return $container[0];
}

/**
 * Animates a given half of a div.array-container
 * @private
 * @param {link tag} half - div.array-container
 * @param {string} dir - valid strings are '+' and '-', used for right of left
 */
animateDivision(half, dir) {
    return new Promise(resolve => {
        half.animate({
            transform: [
                `translate(${dir}10px, ${-$(half).height() - topMargin}px)`,
                'translate(0, 0)'
            ]
        }, timeout.value);
        setTimeout(() => {
            resolve();
        }, timeout.value);
    });
}

/**
 * Animates the placement of a div.array-element over another one
 * @private
 * @param {link tag} element - div.array-element to be animated
 * @param {link tag} target - div.array-element that represents 
 * final location for the first parameter
 */
animateMergeAlgorithmPlacement(element, target) {
    return new Promise(resolve => {
        element.animate({
            transform: [
                'translate(0, 0)',
                `translate(
                    ${$(target).offset().left - $(element).offset().left}px,
                    ${$(target).offset().top - $(element).offset().top}px
                )`
            ]
        }, timeout.value); 

        setTimeout(() => {
            // Replace target value with element value
            $(target).html($(element).html());
            // Hide animated element
            $(element).css('opacity', '0');
            // Confirm ordered index
            $(target).css("background", "#21db37");
            resolve();
        }, timeout.value);
    });
}

/**
 * Merges two sorted halves and replaces target array with the result
 * @param {link tag} arr1 - div.array-container representing first half of target
 * @param {link tag} arr2 - div.array-container representing second half of target
 * @param {link tag} target - div.array-container to be replaced by merged halves
 */

merge = async (arr1, arr2, target) =>{
    let i1 = 0, i2 = 0, i3 = 0;
    while (i1 < arr1.childNodes.length && i2 < arr2.childNodes.length) {
        let value1 = parseInt($(arr1.childNodes[i1]).text());
        let value2 = parseInt($(arr2.childNodes[i2]).text());
        if (value1 < value2) 
            await animateMergeAlgorithmPlacement(
                arr1.childNodes[i1++], target.childNodes[i3++]
            );
        else 
            await animateMergeAlgorithmPlacement(
                arr2.childNodes[i2++], target.childNodes[i3++]
            );    
    }
    while (i1 < arr1.childNodes.length) 
        await animateMergeAlgorithmPlacement(
            arr1.childNodes[i1++], target.childNodes[i3++]
        );
    while (i2 < arr2.childNodes.length) 
        await animateMergeAlgorithmPlacement(
            arr2.childNodes[i2++], target.childNodes[i3++]
        );
}

/**
 * Executes and animates all the algorithm
 * @param {link tag} arr - div.array-container to be sorted and animated
 */

sort = async (arr) => {
    // Base case
    if (arr.childNodes.length <= 1)
        return;

    // Divide array
    let middle = Math.floor(arr.childNodes.length / 2);
    let half1 = createSubArray(arr, 0, middle);
    let half2 = createSubArray(arr, middle, arr.childNodes.length);

    // Append and animate half 1
    $('section.animation-zone').append(half1);
    $(half1).css({
        'left': `${$(arr).position().left - sideMargin}px`,
        'top': `${$(arr).position().top + $(arr).height() + topMargin}px`
    });
    await animateDivision(half1, '+', topMargin);

    // Append and animate half 2
    $('section.animation-zone').append(half2);
    $(half2).css({
        'left': `${$(half1).position().left + $(half1).width() + sideMargin * 2}px`,
        'top': `${$(half1).position().top}px`
    });
    await animateDivision(half2, '-', topMargin);

    // sort resulting halves recursively
    await sort(half1);
    await sort(half2);

    // merge sorted halves
    await merge(half1, half2, arr);
   }

    handleSortClick = () => {
      const arr = this.state.userInput.split(',').map(Number);
      if (!this.state.sorting) {
        sort(arr);
      }
    };
  
  
    render() {
      const { userInput, sorting, paused } = this.state;
  
      return (
        <div className="sorting-visualizer">
          <h1>Merge Sort Visualizer</h1>
          <input
            type="text"
            placeholder="Enter numbers (comma-separated)"
            value={userInput}
            onChange={this.handleInputChange}
          />
  
          <div className="array-container">

          </div>
  
          <button onClick={this.handleSortClick} disabled={sorting}>
            Sort
          </button>
        </div>
      );
    }
  }

export default MergeSortVisualizer;
