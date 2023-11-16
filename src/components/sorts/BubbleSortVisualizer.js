import React, { useEffect, useState } from 'react';
import './BubbleSortVisualizer.css';

const BubbleSortComponent = () => {
  const [arrayToSort, setArrayToSort] = useState(generateRandomArray());
  const [currentStep, setCurrentStep] = useState(0);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById("bubble-canvas");
    const ctx = canvas.getContext("2d");
    displayArray();
  }, [arrayToSort, currentStep]);

  function generateRandomArray() {
    const size = Math.floor(Math.random() * 6) + 5;
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
  }

  function displayArray(comparingIndices) {
    const canvas = document.getElementById("bubble-canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const bubbleWidth = 50;
    const bubbleSpacing = 10;
    const startY = canvas.height / 2 - bubbleWidth / 2;

    arrayToSort.forEach((num, index) => {
      const bubbleX = index * (bubbleWidth + bubbleSpacing);
      const bubbleY = startY;
      ctx.fillStyle = "lightblue";
      ctx.beginPath();
      ctx.arc(bubbleX + bubbleWidth / 2, bubbleY + bubbleWidth / 2, bubbleWidth / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "black";
      ctx.font = "20px Arial";
      ctx.fillText(num, bubbleX + bubbleWidth / 2 - 10, bubbleY + bubbleWidth / 2 + 5);

      if (comparingIndices && (index === comparingIndices[0] || index === comparingIndices[1])) {
        ctx.strokeStyle = "red";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(bubbleX + bubbleWidth / 2, bubbleY + bubbleWidth / 2, bubbleWidth / 2, 0, Math.PI * 2);
        ctx.stroke();
        ctx.lineWidth = 1;
      }
    });

    ctx.strokeStyle = "black";
    ctx.font = "20px Arial";
  }

  async function bubbleSort() {
    let n = arrayToSort.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - currentStep - 1; i++) {
        displayArray([i, i + 1]);

        if (arrayToSort[i] > arrayToSort[i + 1]) {
          let temp = arrayToSort[i];
          arrayToSort[i] = arrayToSort[i + 1];
          arrayToSort[i + 1] = temp;
          swapped = true;
        }

        await new Promise(resolve => setTimeout(resolve, 1000));
        displayArray();
      }
      setCurrentStep(currentStep + 1);
    } while (swapped);

    // Sorting completed, trigger custom gesture
    triggerCustomGesture();
    
    document.getElementById("result").textContent = "Sorting completed!";
    displayArray();
  }

  function triggerCustomGesture() {
    // You can implement your custom gesture or animation logic here
    // For example, rotate the canvas and change its background color
    const canvas = document.getElementById("bubble-canvas");
    canvas.style.animation = "bounceEffect 0.5s ease-out forwards";
  }

  return (
    <div>
      <h1>Bubble Sort Practice</h1>
      <p>The array will sort using 'Bubble Sort' without interruptions:</p>
      <canvas id="bubble-canvas" width="600" height="100"></canvas>
      <button id="start-sort" onClick={async () => {
        if (!isSorting) {
          setIsSorting(true);
          await bubbleSort();
          setIsSorting(false);
        }
      }}>Start Sorting</button>
      <p id="result"></p>
    </div>
  );
}

export default BubbleSortComponent;