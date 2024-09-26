import React from 'react';
import '../assets/sidebr.css';
import {useNavigate} from 'react-router-dom';
function Sidebr(){
  const navigate=useNavigate();
  return(
    <nav className='sdbar'>
      <div className='sdbar_block'><button onClick={() =>navigate("/")}>ADD A STUDENT</button></div>
      <div className='sdbar_block'><button onClick={() =>navigate("/edit")}>EDIT A STUDENT'S INFO</button></div>
      <div className='sdbar_block'><button onClick={() =>navigate("/view")}>VIEW A STUDENT'S INFO</button></div>
      <div className='sdbar_block'><button onClick={() =>navigate("/fee")}>UPDATE FEE PAYMENTS</button></div>
      <div className='sdbar_block'><button onClick={() =>navigate("/mark")}>UPDATE ASSESSMENTS</button></div>
      <div className='sdbar_block'><button onClick={() =>navigate("/kill")}>KILL THE YEAR</button></div>
    </nav>
  );
};

export default Sidebr;

