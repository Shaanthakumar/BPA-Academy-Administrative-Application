import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewpageContent from './contentpage/contentpage';
import '../src/app.css';
import Headr from './headr/header';
import Sidebr from './sidebr/sidebr';
import Add_student from './add_student/add_student';
import ContentPage from './contentpage/contentpage';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Headr />
        <Sidebr />
        <Routes>
          <Route path="/" element={<Add_student />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
