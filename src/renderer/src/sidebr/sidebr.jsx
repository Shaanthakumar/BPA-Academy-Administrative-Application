import React from 'react';
import '../sidebr/sidebr.css';
function Sidebr() {
  return (
    <div className="sidebar">
      <button>Add a student</button>
      <button>View a student</button>
      <button>Edit a student's info</button>
      <button>Update fee</button>
      <button>Update mark</button>
      <button>Kill the year</button>
    </div>
  );
}

export default Sidebr;
