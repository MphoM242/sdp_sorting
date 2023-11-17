import React from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import './MainPageStyle.css';
import './DocStyle.css';

const ReleaseNotes = () => {
const downloadPdf = () => {
	const path='/SDP_ReleaseNotes.PDF'

    const link = document.createElement('a');
    link.href = path;
    link.download = 'DSA-Sorting_Release-Notes.pdf';
    link.click();
  };

const navigate = useNavigate();

const goBack = () => {
  navigate(-1);
};

  return (
    <div className="body">
      <div style={{backgroundImage: 'url("../images/background.png")', backgroundSize: 'cover', padding: '30px'}}>
      
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width:'80vh', height: '80vh',backgroundColor:'rgb(0,0,0,0.8)', padding: '20px'}}>
      <h1 className="heading">Version 1.0.0 Release Notes</h1>
	    <p style={{color:'white', fontSize:'1.3rem',marginBottom:'2px'}}>Release Date: 17/11/2023</p>
	    <p style={{color:'white',fontSize:'1.3rem',marginBottom:'100px'}}>By: &#60;insert cool group name&#62;, WITS University</p>
      {/* Display PDF content here using a PDF viewer component, if needed */}
      <div class='tooltip'>
      <div class='btn'>
          <button onClick={downloadPdf}>Download Release Notes</button>
      </div>
      <span class='tooltiptext'>Click to download the release notes</span>
      </div>

      <div class='btn'>
        <button onClick={goBack}>Back</button>
      </div>
      
      </div>
      </div>
    </div>
  );

};

export default ReleaseNotes;
	

