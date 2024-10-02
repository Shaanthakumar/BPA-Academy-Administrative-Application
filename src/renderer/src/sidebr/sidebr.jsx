import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../sidebr/sidebr.css';
function Sidebr() {
  const navigate= useNavigate();
  return (
    <div className="sidebar">
      <button onClick={() => navigate("/")}>Add a student</button>
      <button onClick={() => navigate("/view")}>View a student</button>
      <button onClick={() => navigate("/edit")}>Edit a student's info</button>
      <button onClick={() => navigate("/feeupdate")}>Update fee</button>
      <button onClick={() => navigate("/markupdate")}>Update mark</button>
      <button onClick={() => navigate("/kill")}>Kill the year</button>
    </div>
  );
}

export default Sidebr;
