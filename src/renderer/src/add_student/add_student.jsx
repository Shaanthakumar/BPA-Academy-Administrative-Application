import React from 'react';
import '../add_student/add_student.css';

function Add_student() {
    return (
        <form className="form">
      <p className="title">Add a student</p>
      <div className="flex">
        <label>
          <input className="input" type="text" placeholder="" required />
          <span>Firstname</span>
        </label>   

        <label>
          <input className="input" type="text" placeholder="" required />
          <span>Lastname</span>
        </label>
      </div>
      <label>
        <input className="input" type="text" placeholder="" required />
        <span>Parent's name</span>
      </label>
      <label>
        <input className="input" type="text" placeholder="" required />
        <span>School</span>
      </label>
      <label class="text-sm mb-2 text-gray-900 cursor-pointer" for="gender">
        Gender
      </label>
      <select class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <label class="text-sm mb-2 text-gray-900 cursor-pointer" for="gender">
        Class
      </label>
      <select class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="class">
        <option value="7">Grade VII</option>
        <option value="8">grade VIII</option>
        <option value="9">Grade IX</option>
        <option value="9">Grade IX</option>
        <option value="10">Grade X</option>
        <option value="11">Grade XI</option>
        <option value="12">Grade XII</option>
      </select>
      
      <button className="submit">ENROLL THE WARD</button>
      
    </form>
    );
}

export default Add_student;
