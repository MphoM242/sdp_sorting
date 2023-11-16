// HTMLComponent.js
import React, { useEffect } from 'react';
import '../MainPageStyle.css';

function HTMLComponent() {
  useEffect(() => {
    // Your existing JavaScript code can go here
    const canvas = document.getElementById("arrayCanvas");
    const ctx = canvas.getContext("2d");
    const squareSize = 30;
    const spacing = 5;
    const spaceBetweenHalves = 10; // Adjust this value for the desired spacing
    // Set the font and text color

    ctx.fillStyle = 'rgb(158, 231, 161)';
    ctx.fillRect(10, 10, canvas.width - 20, canvas.height - 20);

    ctx.font = "16px Saria Condensed";
    ctx.fillStyle = "lightblue";
    
    // Specify the coordinates and text to be written
    const x = 400;
    const y = 10;
    const text = ".";

    // Use fillText to write the text on the canvas
    ctx.fillText(text, x, y);
    const displayArray = (arr,y,start) => {
      ctx.font = '16px Arial';
      ctx.fillStyle = "lightblue";

      const startX =start;
      const startY = 30+y;
      let x=0;
      for (let i = 0; i < arr.length; i++) {
         x = startX + i * (squareSize + spacing);

        // Display the original boxes at y=30
        ctx.fillRect(x, startY, squareSize, squareSize);
        ctx.strokeRect(x, startY, squareSize, squareSize);

        ctx.fillStyle = 'black';
        ctx.fillText(arr[i], x + squareSize / 2 - 6, startY + squareSize / 2 + 6);
        ctx.fillStyle = "lightblue";
        
      }
      

      
      return {
    arr: arr,
    startY: startY,
    startX: x+30,
    start: start-30
  };
    };

    
    const left=(firstHalf,y,x)=>
    {
      let Y=y;
      let X=x;
      if (firstHalf.length!==0)
  
      { 
        
        let result=displayArray(firstHalf,Y,X )
    
        let arr = result.arr;
        let y = result.startY +80;
        let start= result.start;
        if (arr.length>1)
        {
       
        const firstHalf = arr.slice(0, Math.floor(arr.length / 2));
        const secondHalf = arr.slice(Math.floor(arr.length / 2));

       
        if (secondHalf.length!==0)
        {

          let x =startX;
        
          ctx.save();
          ctx.translate(270,0);
          again() ;
          ctx.restore();
          right(secondHalf,y,x);
          
        }
        if (firstHalf.length!==0)
        {
          let x =start;
          ctx.save();
          inside();
          ctx.restore();
          left(firstHalf,y,x);
          console.log("first half is ",firstHalf);
        }
      

      }

      }
    } 

    const right=( secondhalf,y,x)=>
    {
      let ry=y;
      let rX=x;
      console.log("array i have now is ", secondhalf);
      if (secondhalf.length!==0)
      {

        let result=displayArray( secondhalf,ry,rX )
        let arr = result.arr;
        let y = result.startY +80;
        let x =result.startX-2;
        console.log("the x im at is ", x);
        if (arr.length>1)
        {
       
        const firstHalf = arr.slice(0, Math.floor(arr.length / 2));
        
        const secondHalf = arr.slice(Math.floor(arr.length / 2));
        

        if (secondHalf.length>0)
        {
          ctx.save();
          ctx.translate(260,0);
          inside();
          ctx.restore();
          right(secondHalf,y,x);
        
        }
        if (firstHalf.length!==0)
        {
          ctx.save();
          again() ;
          ctx.restore();
          left(firstHalf,y,result.start);
          console.log("first half is ",firstHalf);
        }
        
      
       }
    }
  }
  

    const arr = [];
    for (let i = 0; i < 6; i++) {
      const randomNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
      arr.push(randomNum);
    }
    const totalWidth = arr.length * (squareSize + spacing);
    const targetButtons = document.querySelectorAll('.target-button');
    let startX =(canvas.width-totalWidth)/2;
    const result = displayArray(arr, 0,startX);
    const divideX = startX + (arr.length / 2) * (squareSize + spacing);
    function drawArrow() {

      ctx.save();
    // Set the starting point at the center
    ctx.moveTo(divideX-2, 60);

    // Draw the arrow body (line)
    ctx.lineTo(180, 140); // Adjust the arrow length as needed

    ctx.moveTo(divideX-2, 60);

// Draw the arrow body (line)
    ctx.lineTo(420, 140); // Adjust the arrow length as needed

    // Style the arrow
    ctx.strokeStyle = 'blue'; // Arrow outline color
    ctx.lineWidth = 1; // Arrow outline width
    ctx.fillStyle = 'blue'; // Arrow fill color

    // Draw the arrow
    ctx.stroke();
    ctx.restore();
}
function inside() {

  ctx.save();
    // Set the starting point at the center
    ctx.moveTo(170, 170);

    // Draw the arrow body (line)
    ctx.lineTo(100, 250); // Adjust the arrow length as needed

    ctx.moveTo(170, 170);

// Draw the arrow body (line)
    ctx.lineTo(230, 250); 


    // Style the arrow
    ctx.strokeStyle = 'blue'; // Arrow outline color
    ctx.lineWidth = 1; // Arrow outline width
    ctx.fillStyle = 'blue'; // Arrow fill color

    // Draw the arrow
    ctx.stroke();
    ctx.restore();
}

function again() {

  ctx.save();
    ctx.moveTo(230, 280);

// Draw the arrow body (line)
    ctx.lineTo(180,360 ); 

    ctx.moveTo(230, 280);

// Draw the arrow body (line)
    ctx.lineTo(275,360 ); 


    // Style the arrow
    ctx.strokeStyle = 'blue'; // Arrow outline color
    ctx.lineWidth = 1; // Arrow outline width
    ctx.fillStyle = 'blue'; // Arrow fill color

    // Draw the arrow
    ctx.stroke();
    ctx.restore();
}

    console.log("value of startxx is ",result.startX, " and the arr  is " +result.arr);
         // Calculate the X-coordinate for dividing the array in half

    
    document.getElementById('left').addEventListener('click', function() {
      ctx.save();

      drawArrow();
      ctx.restore();
    if (arr.length!==0)
    {
    let ay = result.startY +80;
    let ax = result.startX-275;
    const firstHalf = arr.slice(0, Math.floor(arr.length / 2));
    left(firstHalf, ay, ax);
    this.disabled = true;
    }


    if (arr.length!==0)
    {
    let y = result.startY+70+ spaceBetweenHalves;
    let x= result.startX-30;
    const secondHalf = arr.slice(Math.floor(arr.length / 2));
    right(secondHalf, y, x);
    this.disabled = false;
    }
    setTimeout(drawBoxesAndLines, targetButtons.length * 2000);
    setTimeout(drawPairs, targetButtons.length * 4000);
    setTimeout(drawtriplets, targetButtons.length * 6000);
    setTimeout(final, targetButtons.length * 8000);
   });
  
  let s=spacing+50;
  function simulateButtonClick(button) {
    button.click();
  }
  function drawBoxesAndLines() {
    let pos0 = 0;
    let pos1 = 0;
    let s = spacing + 50;
  
    for (let i = 0; i < arr.length; i++) {
      let x = 90 + i * (squareSize + s);
  
      if (i === 0) {
        pos0 = x;
      }
      if (i === 3) {
        pos1 = x;
      }
  
      ctx.save();
      ctx.fillRect(x, 450, squareSize, squareSize);
      ctx.strokeRect(x, 450, squareSize, squareSize);
  
      ctx.fillStyle = 'black';
      ctx.fillText(arr[i], x + squareSize / 2 - 8, 450 + squareSize / 2 + 6);
      ctx.fillStyle = "lightblue";
      ctx.restore();
  
      ctx.save();
      ctx.beginPath();
  
      if (i === 0 || i === 3) {
        ctx.moveTo(x + 20, 282);
        ctx.lineTo(x + 20, 450);
      } else {
        ctx.moveTo(x + 20, 390);
        ctx.lineTo(x + 20, 450);
      }
  
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.restore();
    }
    return {
      pos0:  pos0,
      pos1: pos1
    };
  }

  targetButtons.forEach((button, index) => {
    setTimeout(() => simulateButtonClick(button), index * 2000);
 
  });

  // Call the function to execute the code block


  function drawPairs() {
        let pos0=0;
        let pos1=0;
        let s = spacing + 50;
        for (let i = 0; i < arr.length; i++) {
          let x = 90 + i * (squareSize + s);

          if (i === 0) {
            pos0 = x;
          }
          if (i === 3) {
            pos1 = x;
          }
        }

      const pairs = [];
      const arr2=[];
      // Sort and group the numbers in pairs
      for (let i = 0; i < arr.length; i += 1) {
        if (i===0 || i===3)
        {
          arr2.push(arr[i]);
          console.log(arr[i]);
        }
        else{
        const pair = [arr[i], arr[i + 1]].sort((a, b) => a - b);
        pairs.push(pair);
        arr2.push(pair[0]);
        arr2.push(pair[1]);
        i+=1;
        }

      }


      let a = 85;
      let j = 0;

      for (let i = 0; i < arr2.length; i++) {
        let x = a + j * (squareSize + s);
        if (i===0){
          x=pos0;
          a = x + squareSize + s-10;
        }
        if (i===3){
          x=pos1;
          a = x + squareSize + s+2;
          j = 3;
        }
        else{

        }
        // Display the original boxes at y=30
        ctx.fillRect(x, 530, squareSize, squareSize);
        ctx.strokeRect(x, 530, squareSize, squareSize);

        ctx.fillStyle = 'black';
        ctx.fillText(arr2[i], x + squareSize / 2 - 8, 530 + squareSize / 2 + 6);
        ctx.fillStyle = "lightblue";

        ctx.save();
        ctx.beginPath();
        if (i===0 || i===3){
        ctx.moveTo(x+20, 480);
        ctx.lineTo(x+20, 530);
        }
        else if (i===1 || i===4){
          ctx.moveTo(x+2, 480);
          ctx.lineTo(x+20, 530);
          }
        else if (i===2 || i===5){
            ctx.moveTo(x+38, 480);
            ctx.lineTo(x+20, 530);
            }
        else{
          ctx.moveTo(x+20, 480);
          ctx.lineTo(x+20, 530);
        }
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.restore();
        if (i % 2 !== 0) {
          // Add space between pairs
          j = 2;
        } else {
          // Reset space for the next pair
          s = 5;
          j++;
        }

      }
  }
  function drawtriplets() {
      const arr3=[];
      for (let i = 0; i < arr.length; i += 3) {

          const triplet = [arr[i], arr[i + 1], arr[i + 2]].sort((a, b) => a - b);
          arr3.push(triplet[0]);
          arr3.push(triplet[1]);
          arr3.push(triplet[2]);

      }
      s=spacing+50;
      let a=120;
      let  j=0;
      for (let i = 0; i < arr3.length; i++) {
        let  x = a + j * (squareSize + s);

        // Display the original boxes at y=30
        ctx.fillRect(x, 620, squareSize, squareSize);
        ctx.strokeRect(x,620, squareSize, squareSize);

        ctx.fillStyle = 'black';
        ctx.fillText(arr3[i], x + squareSize / 2 - 8, 620+ squareSize / 2 +6);
        ctx.fillStyle = "lightblue";

        ctx.save();
        ctx.beginPath();
        if (i===0 || i===3){
        ctx.moveTo(x+1, 560);
        ctx.lineTo(x+20, 620);
        }
        if (i===2 || i===5){
          ctx.moveTo(x+43, 560);
          ctx.lineTo(x-3, 620);
        }
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.restore();

        if (i ===2) {
          // Add space between pairs
          a = x + squareSize ;
          j = 4.4;
        } else {
          // Reset space for the next pair
          s = 5;
          j++;
        }
        
      }
  }
  
  function final() {
    
    const arr4=[];
    for (let i = 0; i < arr.length; i += 6) {
      const triplet = [arr[i], arr[i + 1], arr[i + 2], arr[i + 3], arr[i + 4], arr[i + 5]].sort((a, b) => a - b);
      arr4.push(triplet[0]);
      arr4.push(triplet[1]);
      arr4.push(triplet[2]);
      arr4.push(triplet[3]);
      arr4.push(triplet[4]);
      arr4.push(triplet[5]);
    }

    console.log(arr4);
    s=5;
    for (let i = 0; i < arr.length; i++) {
      let  x = 195 + i * (squareSize + s);
      ctx.strokeStyle = 'blue';
      // Display the original boxes at y=30
      ctx.save();
      ctx.fillRect(x, 700, squareSize, squareSize);
      ctx.strokeRect(x,700, squareSize, squareSize);

      ctx.fillStyle = 'black';
      ctx.fillText(arr4[i], x + squareSize / 2 - 8, 700+ squareSize / 2 +6);
      ctx.fillStyle = "lightblue";
      ctx.restore();

      ctx.save();
      ctx.beginPath();
      if (i===1 ){
      ctx.moveTo(x-64, 650);
      ctx.lineTo(x+20, 700);
      }
      if ( i===4){
        ctx.moveTo(x+90, 650);
        ctx.lineTo(x+20, 700);
      }
      ctx.strokeStyle = 'blue';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.restore();
      
    }
  }


  }, []);

  return (
    <div class="merge-btn">
    {/* Position the "Start Sorting" button */}
    <button id="left" style={{ position: 'absolute', top: '20px', right: '-80px' }}>Start</button>
      <button className="target-button" style={{ display: 'none' }}>Target 1</button>
      <canvas id="arrayCanvas" width="600" height="740"></canvas>
    </div>
  );
}

export default HTMLComponent;
