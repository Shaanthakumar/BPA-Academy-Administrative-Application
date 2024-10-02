import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ViewpageContent from './contentpage/contentpage';
import '../src/app.css';

function App() {
  return (
      <div className="app-container">
        <ViewpageContent />
      </div>
  );
}

export default App;
