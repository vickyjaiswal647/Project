import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
//import {auth} from '../../components/firebase/firebase.utils';

const Header = () => {
  const [userStatus, setUserStatus] = useState(true);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const closeMobileMenu = () => setClick(false);

  const logouthandler = () => {
    setUserStatus(false);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <div className="Header">
        <Link to="/" className="header-logo">
          boostmind
        </Link>
        <li
          className="header-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link
            to="/categories"
            className="header-links"
            onClick={closeMobileMenu}
          >
            Categories
          </Link>
          {/* {dropdown && <Dropdown />} */}
        </li>
        <div className="header__center">
          <SearchIcon />
          <input type="text" placeholder="  Search for anything" />
        </div>
        <li className="header-item">
          <Link
            to="/sign-up"
            className="header-links"
            onClick={closeMobileMenu}
          >
            boostmind for Business
          </Link>
        </li>
        <li className="header-item">
          <Link
            to="/sign-up"
            className="header-links"
            onClick={closeMobileMenu}
          >
            Become a Instructor
          </Link>
        </li>
        <ShoppingCartIcon className="icons" />
        {/*               
                {
                    currentUser ?
                    <div to = '/signup' className = 'header-links-mobile' onClick={() => auth.signOut()}> 
                        SIGN OUT
                    </div>
                    
                    :
                    <Link to = '/login' className = 'header-links-mobile1'>
                        SignIn
                    </Link>
                    
                }
*/}
        {userStatus ? (
          <>
            <Link to="/profile-page">
              <AccountCircleIcon
                style={{ color: "rgb(61, 61, 61)" }}
                fontSize="large"
              />
            </Link>
            <li className="header-item">
              <Link
                to="/"
                className="header-links-mobile"
                onClick={logouthandler}
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="header-item">
              <Link
                to="/login"
                className="header-links-mobile1"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
            <li className="header-item">
              <Link
                to="/signup"
                className="header-links-mobile"
                onClick={closeMobileMenu}
              >
                SignUp
              </Link>
            </li>
          </>
        )}
      </div>
      {/* <GroupCard/>
            <FooterContainer/> */}
    </>
  );
};

export default Header;
