import React from 'react';
import './contentpage.css'; // Import the corresponding CSS
import Headr from '../headr/header';
import Sidebr from '../sidebr/sidebr';

function ContentPage() {
  return (

    <>
    <div className="app-container">
      <Headr />
      <Sidebr />
      <div className="viewpage-content">
       
      </div>
    </div></>
    
  );
}

export default ContentPage;
