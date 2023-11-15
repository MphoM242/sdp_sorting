import React from "react";
import { NavLink, useNavigate } from 'react-router-dom'


const ReleaseNotes = () => {
const downloadPdf = () => {
	const path='/SDP_ReleaseNotes.PDF'

    const link = document.createElement('a');
    link.href = path;
    link.download = 'SDP_ReleaseNotes.PDF';
    link.click();
  };

  return (
    <div>
      <h3>Version 1.0.0 Release Notes</h3>
	  <p>Release Date: 10/10/2021</p>
	  <p>By: 'insert cooler group name', WITS University</p>
      {/* Display PDF content here using a PDF viewer component, if needed */}
      <button onClick={downloadPdf}>Download Release Notes</button>
    </div>
  );

};

export default ReleaseNotes;
	

