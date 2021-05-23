import React, { Component } from "react";

import "./form-wrapper.styles.css";

class FormWrapper extends Component {
  render() {
    return (
      <div className="form-wrapper">
      <form action="" method="post">
        <div className="manage-fields-wrapper">
          <div
            className="form-field-container">
            <label className="control-label " for="id_name">
              Display Name
            </label>
            <div
              id="tooltip-reference-name"
              className="tooltip-reference pos-r "
            >
              <input
                type="text"
                name="name"
                value=""
                required=""
                className="textinput textInput form-control"
                placeholder="Name"
                maxlength="64"
                id="id_name"
              /><br/>
            </div>
          </div>
          
          <div className="form-field-container">
            <label className="control-label " for="id_locale"> Branch </label>
            <div className="">
              <select name="locale" required="" className="select form-control" id="id_locale">
                <option value="">-- Select Branch --</option>
                <option value="CSE">Computer Science and Engineering</option>
                <option value="IT" selected=""> Information Technology </option>
                <option value="ECE">Electrical Engineering</option>
                <option value="CHE">Chemical Engineering</option>
                <option value="MEC">Mechanical Engineering</option>
                <option value="CIVIL">Civil Engineering</option>
                <option value="TEXTILE">Textile Engineering</option>
                <option value="PHARMA">Pharmacy</option>
              </select><br/>
            </div>
          </div>

          <div className="form-field-container">
            <label className="control-label"> Semester </label>
            <div className="">
              <select name="locale" required="" className="select form-control" id="id_locale">
                <option value=""> -- Select Semester -- </option>
                <option value="1st">1st</option>
                < option value="2nd"> 2nd </option>
                <option value="3rd"> 3rd </option>
                <option value="4th"> 4th </option>
                <option value="5th"> 5th </option>
                <option value="6th"> 6th </option>
                <option value="7th"> 7th </option>
                <option value="8th"> 8th </option>
              </select><br/>
            </div>
          </div>

          <div className="form-field-container">
            <label className="control-label " for="id_job_title">
              Score
            </label>
            <div className="form-control-counter-container">
              <input
                    name="score"
                    placeholder="Quiz Score"
                    maxlength="60"
                    type="text"
                    id="id_score"
                    className="textinput textInput form-control form-control"
                    value=""
                  /> <br/>
                </div>
          </div>

          <div className="form-field-container ">
            <label className="control-label ">
              Email
            </label>
              <div className="controls ">
                <div className="input-group">
                  <input
                    type="text"
                    name="twitter_profile"
                    value="xyz@gmail.com"
                    className="textinput textInput form-control"
                    placeholder="Email Address"
                    maxlength="128"
                    id="id_twitter_profile"
                  /><br/>
                </div>
              </div>
          </div>

        </div>
      </form>
    </div>
    );
  }
}

export default FormWrapper;
