import "./index.css";

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

import { Link } from "react-router-dom";

import logo from "./logo.svg";
import profilepng from "./profile.png";
const Header = () => {
  const [user] = useAuthState(auth);
  const renderProfile = () => (
    <Link to="/profile">
      <img src={profilepng} alt="profile" className="profile-picture" />
    </Link>
  );
  const renderLoginOrRegister = () => (
    <Link to="/login" className="header-login-or-register">
      <p>Login/Register</p>
    </Link>
  );
  return (
    <div className="header-container">
      <div className="logo-container">
        <Link to="/" className="header-list-item">
          <img src={logo} alt="logo" className="website-logo" />
        </Link>
      </div>
      <div className="links-container">
        <ul className="header-list-container">
          <Link to="/" className="header-list-item">
            <li className="header-list-button">Home</li>
          </Link>
          <Link to="/jobs" className="header-list-item">
            <li className="header-list-button">Jobs</li>
          </Link>
          <Link to="/postjobs" className="header-list-item">
            <li className="header-list-button">Post Job</li>
          </Link>
        </ul>
        {user ? renderProfile() : renderLoginOrRegister()}
      </div>
    </div>
  );
};

export default Header;
