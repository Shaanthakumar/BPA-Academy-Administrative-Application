// Viewpage.js
import React from 'react';
import '../assets/viewpage.css';
import Sidebr from './Sidebr';   // Fixed path
import Headr from './Headr';     // Fixed path
import { Routes, Route } from 'react-router-dom'; // Remove Router import as it's usually handled at the top level
import Edit_info from './Edit_info';
import Add_student from './Add_student';
import View_student from './View_student';
import Fee_update from './Fee_update';
import Mark_update from './Mark_update';
import Kill from './Kill';       // Fixed path

function Viewpage() {
  return (
    <div className="app-container">
      <Headr />
      <Sidebr />
      <div className="viewpage-content">
        <Routes>
          <Route path="/" element={<Add_student />} />
          <Route path="/edit" element={<Edit_info />} />
          <Route path="/view" element={<View_student />} />
          <Route path="/fee" element={<Fee_update />} />
          <Route path="/mark" element={<Mark_update />} />
          <Route path="/kill" element={<Kill />} />
        </Routes>
      </div>
    </div>
  );
};

export default Viewpage;
