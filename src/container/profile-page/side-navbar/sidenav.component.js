import React, { Component } from "react";

import "./side-navbar.styles.css";
import { Link } from "react-router-dom";

class SideNavbar extends Component {
  state = {
    IsAdmin: false,
  };

  render() {
    return (
      <div className="side-nav db-sm" data-purpose="side-menu">
        <div id="user-short">
          <div className="user-immage">
            <img
              alt="Profile"
              aria-label="User Name"
              className="user-avatar"
              data-purpose="user-avatar"
              height=""
              src="https://img-a.udemycdn.com/user/200_H/5520600_d346.jpg?_WSOq_vRPSQdMKFalIcXpQfpy5tI-uPWCIULQ7rl5vWNOEFpjQD74FT68_cVYfsZAfNenIC-X28qaJ4OwNNjfJNLUlEzX1il07lx1AoqfjNCHLmXtOkiMZs5"
              width="120"
            />
          </div>
          <hgroup className="user-name-container">
            <h2>User Name</h2>

            <h3>Philanthropist, Designer, Entrepreneur, Developer, Idealist</h3>
          </hgroup>
        </div>

        <ul className="list-options">
          {this.state.IsAdmin ? (
            <>
              <li className="">
                <Link to="video-upload-page">Upload Video</Link>
              </li>
              <li>
                <Link to="activate-test">Take Test</Link>
              </li>
              <li>
                <Link to="/create-test">Create Test</Link>
              </li>
              <li>
                <Link to="/create-course">Create Course</Link>
              </li>
              <li>
                <Link to="/show-result">Show Result</Link>
              </li>
            </>
          ) : (
            <>
              <li>
               <Link>Profile</Link>
              </li>
              <li>
                <Link to = '/profile-photo'>Photo</Link>
              </li>
              <li >
                <Link to = '/your-course'>Your Course</Link>
              </li>
              <li>
                <Link to = '/start-test'>Start Test</Link>
              </li>
            </>
          )}

        </ul>
      </div>
    );
  }
}

export default SideNavbar;
