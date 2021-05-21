import React from "react";

import SideNavbar from "../side-navbar/sidenav.component";
import FormWrapper from "../form-wrapper/form-wrapper.component";
import "./profile-page.styles.css";

function Profile() {
  return (
    <div className="profile-page">
      <div className="side-navbar">
        <SideNavbar />
      </div>
      <div className="profile-page-header">
        <h2>Profile</h2>
        <h3>Information about yourself</h3>
      </div>
      <div className="profile-page-container">
        <FormWrapper/>
      </div>
      <div className="profile-page-footer">
      <div className="form-actions">
      <div className="submit-row">
        <input
          type="submit"
          name="submit"
          value="Save"
          className="btn btn-primary "
          id="submit-id-submit"
        />
      </div>
    </div>
      </div>
    </div>
  );
}

export default Profile;
