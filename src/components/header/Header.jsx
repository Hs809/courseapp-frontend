import "./Header.css";

import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="left-side">
        <div className="brand">
          <Link to="/">MyCourseAcademia</Link>
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contract</li>
          </ul>
        </nav>
      </div>
      <div className="right-side">
        <p className="login">Login</p>
        <Link to="/signup">
          <button className="join-btn">Join Us ➜</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
