import React from 'react';
import '../assets/add_student.css';

function Add_student() {
    return (
        <div className="content-wrapper">
            <form className="form">
                <p className="title">ADD A STUDENT</p>
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
                <div className="radio-input">
                    <label className="label">
                        <input
                            type="radio"
                            id="value-1"
                            name="gender"
                            value="male"
                            className="radio"
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
                        />
                        <p className="text">Female</p>
                    </label>
                </div>
                <label>
                    <input className="input" type="text" placeholder="" required />
                    <span>Parent's Name</span>
                </label>
                <label>
                    <input className="input" type="text" placeholder="" required />
                    <span>School</span>
                </label>
                <select className="ui dropdown">
                    <option value="">Class</option>
                    <option value="7">VII</option>
                    <option value="8">VIII</option>
                    <option value="9">IX</option>
                    <option value="10">X</option>
                    <option value="11">XI</option>
                    <option value="12">XII</option>
                </select>
                <div class="checkbox-wrapper-46">
    <label>
        <input type="checkbox" id="checkbox1" class="inp-cbx" />
        <div class="cbx">
            <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" />
                </svg>
            </span>
            <span>Option 1</span>
        </div>
    </label>
    <label>
        <input type="checkbox" id="checkbox2" class="inp-cbx" />
        <div class="cbx">
            <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" />
                </svg>
            </span>
            <span>Option 2</span>
        </div>
    </label>

</div>


                <button className="submit">ENROLL</button>
            </form>
        </div>
    );
}

export default Add_student;
