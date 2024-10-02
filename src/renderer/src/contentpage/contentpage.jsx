import React from 'react';
import './contentpage.css'; // Import the corresponding CSS
import Headr from '../headr/header';
import Sidebr from '../sidebr/sidebr';

function ContentPage() {
  return (
    <>
    <Headr></Headr>
    <Sidebr></Sidebr>
    <div className="content-page">
    {/* Add routes or additional content here */}
  </div></>
    
  );
}

export default ContentPage;
