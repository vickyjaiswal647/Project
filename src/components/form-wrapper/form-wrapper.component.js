import React, { Component } from "react";

import "./form-wrapper.styles.css";

class FormWrapper extends Component {
  render() {
    return (
      <div className="form-wrapper">
      <form action="https://www.udemy.com/user/edit-profile/" method="post">
        <div className="manage-fields-wrapper sectioned">
          <div
            className="form-field-container  labeled form-section labeled--sr-only"
            id="form-item-name"
          >
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
          
          <div
          className="form-field-container  labeled form-section labeled--sr-only"
          id="form-item-locale"
        >
          <label className="control-label " for="id_locale">
            Branch
          </label>
          <div
            id="tooltip-reference-locale"
            className="tooltip-reference pos-r "
          >
            <select
              name="locale"
              required=""
              className="select form-control"
              id="id_locale"
            >
              <option value="">-- Select Branch --</option>
              <option value="CSE">Computer Science and Engineering</option>
              <option value="IT" selected="">
                Information Technology
              </option>
              <option value="ECE">Electrical Engineering</option>
              <option value="CHE">Chemical Engineering</option>
              <option value="MEC">Mechanical Engineering</option>
              <option value="CIVIL">Civil Engineering</option>
              <option value="TEXTILE">Textile Engineering</option>
              <option value="PHARMA">Pharmacy</option>
            </select><br/>
          </div>
        </div>
          <div
          className="form-field-container  labeled form-section labeled--sr-only"
          id="form-item-locale"
        >
          <label className="control-label " for="id_locale">
            Semester
          </label>
          <div
            id="tooltip-reference-locale"
            className="tooltip-reference pos-r "
          >
            <select
              name="locale"
              required=""
              className="select form-control"
              id="id_locale"
            >
              <option value="">-- Select Semester --</option>
              <option value="1st">1st</option>
              <option value="2nd" selected="">
                2nd
              </option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
              <option value="5th">5th</option>
              <option value="6th">6th</option>
              <option value="7th">7th</option>
              <option value="8th">8th</option>
            </select><br/>
          </div>
        </div>
          <div
            className="form-field-container  labeled form-section labeled--sr-only"
            id="form-item-score"
          >
            <label className="control-label " for="id_job_title">
              Score
            </label>
            <div
              id="tooltip-reference-score"
              className="tooltip-reference pos-r "
            >
              <div
                className="ud-app-loader ud-component--form-fields--form-control-with-counter ud-app-loaded"
                data-module-id="form-fields"
              >
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
              
            </div>
          </div>
          <div
            className="form-field-container  labeled form-section labeled--sr-only"
            id="form-item-twitter_profile"
          >
            <label className="control-label " for="id_twitter_profile">
              Email
            </label>
            <div
              id="tooltip-reference-twitter_profile"
              className="tooltip-reference pos-r "
            >
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
          <br/>
          <br/>
          <br/>
          <br/>
          
          <br/>
          <br/>
          <div
            className="form-field-container  labeled form-section labeled--sr-only"
            id="form-item-locale"
          >
            <label className="control-label " for="id_locale">
              Language
            </label>
            <div
              id="tooltip-reference-locale"
              className="tooltip-reference pos-r "
            >
              <select
                name="locale"
                required=""
                className="select form-control"
                id="id_locale"
              >
                <option value="">-- Select Language --</option>
                <option value="de_DE">Deutsch</option>
                <option value="en_US" selected="">
                  English (US)
                </option>
                <option value="es_ES">Español (España)</option>
                <option value="fr_FR">Français (France)</option>
                <option value="id_ID">Bahasa Indonesia</option>
                <option value="it_IND">Hindi</option>
                <option value="it_IT">Italiano</option>
                <option value="ja_JP">日本語</option>
                <option value="ko_KR">한국어</option>
                <option value="nl_NL">Nederlands</option>
                <option value="pl_PL">Polski</option>
                <option value="pt_BR">Português (Brasil)</option>
                <option value="ro_RO">Română</option>
                <option value="ru_RU">Русский</option>
                <option value="th_TH">ภาษาไทย</option>
                <option value="tr_TR">Türkçe</option>
                <option value="zh_CN">中文(简体)</option>
                <option value="zh_TW">中文 (繁體)</option>
              </select><br/>
            </div>
          </div>

          <div
            className="form-field-container  labeled form-section labeled--sr-only"
            id="form-item-twitter_profile"
          >
            <label className="control-label " for="id_twitter_profile">
              Twitter
            </label>
            <div
              id="tooltip-reference-twitter_profile"
              className="tooltip-reference pos-r "
            >
              <div className="controls ">
                <div className="input-group">
                 
                  <input
                    type="text"
                    name="twitter_profile"
                    value=""
                    className="textinput textInput form-control"
                    placeholder="Twitter Profile"
                    maxlength="128"
                    id="id_twitter_profile"
                  /><br/>
                </div>
              </div>
              <div className="help-block">
                Add your Twitter username (e.g. johnsmith).
              </div>
            </div>
          </div>
          <div
            className="form-field-container  labeled form-section labeled--sr-only"
            id="form-item-facebook_profile"
          >
            <label className="control-label " for="id_facebook_profile">
              Facebook
            </label>
            <div
              id="tooltip-reference-facebook_profile"
              className="tooltip-reference pos-r "
            >
              <div className="controls ">
                <div className="input-group">
                  
                  <input
                    type="text"
                    name="facebook_profile"
                    value=""
                    className="textinput textInput form-control"
                    placeholder="Facebook Profile"
                    maxlength="128"
                    id="id_facebook_profile"
                  />
                </div>
              </div>
              <div className="help-block">
                Input your Facebook username (e.g. johnsmith).
              </div>
            </div>
          </div>
          <div
            className="form-field-container  labeled form-section labeled--sr-only"
            id="form-item-linkedin_profile"
          >
            <label className="control-label " for="id_linkedin_profile">
              LinkedIn
            </label>
            <div
              id="tooltip-reference-linkedin_profile"
              className="tooltip-reference pos-r "
            >
              <div className="controls ">
                <div className="input-group">
                  
                  <input
                    type="text"
                    name="linkedin_profile"
                    value=""
                    className="textinput textInput form-control"
                    placeholder="LinkedIn Profile"
                    maxlength="128"
                    id="id_linkedin_profile"
                  />
                </div>
              </div>
              <div className="help-block">
                Input your LinkedIn resource id (e.g. in/johnsmith).
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
