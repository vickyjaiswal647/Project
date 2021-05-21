import React, { Component } from 'react';

import './side-navbar.styles.css';

class SideNavbar extends Component {

    render () {

        return(
            <div className="side-nav db-sm" data-purpose="side-menu">
                <div id="user-short">
                    <div className="fx-c">
                        <img 
                            alt="Profile" 
                            aria-label="User Name" 
                            className="user-avatar user-avatar--image " 
                            data-purpose="user-avatar" height="120" 
                            src="https://img-a.udemycdn.com/user/200_H/5520600_d346.jpg?_WSOq_vRPSQdMKFalIcXpQfpy5tI-uPWCIULQ7rl5vWNOEFpjQD74FT68_cVYfsZAfNenIC-X28qaJ4OwNNjfJNLUlEzX1il07lx1AoqfjNCHLmXtOkiMZs5" 
                            width="120"/>
                    </div>
                    <hgroup className="tooltip-container">
                        <h2>User Name</h2>
    
                        <h3>Philanthropist, Designer, Entrepreneur, Developer, Idealist</h3>
                    </hgroup>
                </div>
                <ul className="list-options">
                    
                    <li className=" on ">
                        <a href="/user/edit-profile/" data-purpose="user_manage:edit-profile"> Profile </a>
                    </li>
                    <li className="">
                        <a href="/user/edit-photo/" data-purpose="user_manage:edit-photo"> Photo </a>
                    </li>
                    <li className="">
                        <a href="/user/edit-account/" data-purpose="user_manage:edit-account"> Account </a>
                    </li>
                    
                    <li className="">
                        <a href="/user/edit-privacy/" data-purpose="user_manage:edit-privacy"> Privacy </a>
                    </li>
                    <li className="">
                        <a href="/user/edit-notifications/" data-purpose="user_manage:edit-notifications"> Notifications </a>
                    </li>
                    
                    <li className="">
                        <a href="/user/close-account/" data-purpose="user_manage:close-account"> Close account </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SideNavbar;