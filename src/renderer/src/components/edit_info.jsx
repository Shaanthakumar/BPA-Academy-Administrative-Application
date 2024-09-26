import React, { useState } from 'react';
import '../assets/edit_student.css';

function EditStudent() {
  const [studentData, setStudentData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    parentName: '',
    school: '',
    class: '',
    options: [],
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      let updatedOptions = [...studentData.options];
      if (e.target.checked) {
        updatedOptions.push(value);
      } else {
        updatedOptions = updatedOptions.filter((option) => option !== value);
      }
      setStudentData({ ...studentData, [name]: updatedOptions });
    } else {
      setStudentData({ ...studentData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send updated data to a server
    console.log(studentData);
  };

  return (
    <div className="content-wrapper">
      <div className="search-wrapper">
        {/* Optional: Add search bar code here */}
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">EDIT STUDENT</p>
        <div className="flex">
          <label>
            <input
              className="input"
              type="text"
              placeholder=""
              required
              name="firstName"
              value={studentData.firstName}
              onChange={handleChange}
            />
            <span>Firstname</span>
          </label>
          <label>
            <input
              className="input"
              type="text"
              placeholder=""
              required
              name="lastName"
              value={studentData.lastName}
              onChange={handleChange}
            />
            <span>Lastname</span>
          </label>
        </div>
        <div className="radio-input">
          <label className="label">
            <input
              type="radio"
              id="value-1"
              name="gender"
              value="male"
              className="radio"
              checked={studentData.gender === 'male'}
              onChange={handleChange}
            />
            <p className="text">Male</p>
          </label>
          <label className="label">
            <input
              type="radio"
              id="value-2"
              name="gender"
              value="female"
              className="radio"
              checked={studentData.gender === 'female'}
              onChange={handleChange}
            />
            <p className="text">Female</p>
          </label>
        </div>
        <label>
          <input
            className="input"
            type="text"
            placeholder=""
            required
            name="parentName"
            value={studentData.parentName}
            onChange={handleChange}
          />
          <span>Parent's Name</span>
        </label>
        <label>
          <input
            className="input"
            type="text"
            placeholder=""
            required
            name="school"
            value={studentData.school}
            onChange={handleChange}
          />
          <span>School</span>
        </label>
        <select
          className="ui dropdown"
          name="class"
          value={studentData.class}
          onChange={handleChange}
        >
          <option value="">Class</option>
          <option value="7">VII</option>
          <option value="8">VIII</option>
          <option value="9">IX</option>
          <option value="10">X</option>
          <option value="11">XI</option>
          <option value="12">XII</option>
        </select>
        <div className="checkbox-wrapper-46">
          {/* Checkbox options */}
          {['Option 1', 'Option 2', 'Option 3'].map((option, index) => (
            <label key={index}>
              <input
                type="checkbox"
                id={`checkbox-${index + 1}`}
                className="inp-cbx"
                name="options"
                value={option}
                checked={studentData.options.includes(option)}
                onChange={handleChange}
              />
              <div className="cbx">
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" />
                  </svg>
                </span>
                <span>{option}</span>
              </div>
            </label>
          ))}
        </div>
        <button className="submit">UPDATE</button>
      </form>
    </div>
  );
}

export default EditStudent;
