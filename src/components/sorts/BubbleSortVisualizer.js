import React, { useEffect, useState } from 'react';
import './BubbleSortVisualizer.css';
import '../MainPageStyle.css';

const BubbleSortComponent = () => {
  const [arrayToSort, setArrayToSort] = useState(generateRandomArray());
  const [currentStep, setCurrentStep] = useState(0);
  const [isSorting, setIsSorting] = useState(false);
  const [interruptSort, setInterruptSort] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById("bubble-canvas");
    const ctx = canvas.getContext("2d");
    displayArray();
  }, [arrayToSort, currentStep]);

  useEffect(() => {
    // Apply or remove the bounce animation based on the isSorting state
    const canvas = document.getElementById("bubble-canvas");
    if (isSorting) {
      canvas.classList.add("bounce");
    } else {
      canvas.classList.remove("bounce");
    }
  }, [isSorting]);

  function generateRandomArray() {
    const size = Math.floor(Math.random() * 6) + 5;
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
  }

  function displayArray(comparingIndices) {
    const canvas = document.getElementById("bubble-canvas");
    if (!canvas) {
      // Canvas element not available, return
      return;
    }
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const bubbleWidth = 50;
    const bubbleSpacing = 10;
    const startY = canvas.height / 2 - bubbleWidth / 2;

    arrayToSort.forEach((num, index) => {
      const bubbleX = index * (bubbleWidth + bubbleSpacing);
      const bubbleY = startY;

      ctx.save();
      ctx.translate(bubbleX + bubbleWidth / 2, bubbleY + bubbleWidth / 2);

      ctx.translate(-(bubbleX + bubbleWidth / 2), -(bubbleY + bubbleWidth / 2));

      const randomOffset = calculateRandomBounceOffset();

      ctx.fillStyle = "lightblue";
      ctx.beginPath();
      ctx.arc(bubbleX + bubbleWidth / 2, bubbleY + bubbleWidth / 2 + randomOffset, bubbleWidth / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "black";
      ctx.font = "20px Arial";
      ctx.fillText(num, bubbleX + bubbleWidth / 2 - 10, bubbleY + bubbleWidth / 2 + randomOffset + 5);

      // Stroke in red when comparing
      if (comparingIndices && (index === comparingIndices[0] || index === comparingIndices[1])) {
        ctx.strokeStyle = "red";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(bubbleX + bubbleWidth / 2, bubbleY + bubbleWidth / 2 + randomOffset, bubbleWidth / 2, 0, Math.PI * 2);
        ctx.stroke();
        ctx.lineWidth = 1;
      }

      ctx.restore();

      if (interruptSort) {
        // Clear interruption flag and return to stop further displayArray calls
        setInterruptSort(false);
        return;
      }
    });

    ctx.strokeStyle = "black";
    ctx.font = "20px Arial";
  }

  function calculateRandomBounceOffset() {
    const amplitude = 50;
    const frequency = 0.1;
    const direction = Math.random() < 0.5 ? 1 : -1;
    return direction * amplitude * Math.sin(frequency * Math.random());
  }

  async function bubbleSort() {
    setIsSorting(true);
    setInterruptSort(false); // Reset interruption flag
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

        if (interruptSort) {
          // Interrupt the sorting process
          setIsSorting(false);
          return;
        }
      }
      setCurrentStep(currentStep + 1);
    } while (swapped && isSorting);

    const resultElement = document.getElementById("result");
    if (resultElement) {
      resultElement.textContent = "Sorting completed!";
    }
    displayArray();
    setIsSorting(false);
  }

  const clearAnimation = () => {
    setIsSorting(false);
    setInterruptSort(true); // Set interruption flag to stop further displayArray calls
    setCurrentStep(0);
    setArrayToSort(generateRandomArray());
  };

  const handleExternalEvent = () => {
    clearAnimation();
  };

  useEffect(() => {
    document.addEventListener('externalEvent', handleExternalEvent);

    return () => {
      document.removeEventListener('externalEvent', handleExternalEvent);
    };
  }, []);

  return (
    <div>
      <h1 style={{fontFamily:"Saira Condensed", color: 'white'}}>Bubble Sort Practice</h1>
      <p style={{fontFamily:"Saira Condensed", color: 'white'}}>The array will sort using 'Bubble Sort' without interruptions:</p>
      <canvas
        id="bubble-canvas"
        width="600"
        height="100"
        onClick={() => bubbleSort()}
        disabled={isSorting}
      ></canvas>
      <div class="bubble-btn">
      <button
        id="start-sort"
        onClick={() => bubbleSort()}
        disabled={isSorting}
      >
        Start Sorting
      </button>
      </div>
      <p id="result">Sorting completed!</p>
    </div>
  );
};

export default BubbleSortComponent;