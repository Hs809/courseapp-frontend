import "./Header.css";

import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="left-side">
        <div className="brand">MyCourseAcademia</div>
        <nav className="navbar">
          <ul className="nav-links">
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contract</li>
          </ul>
        </nav>
      </div>
      <div className="right-side">
        <p className="login">Login</p>
        <button className="join-btn">Join Us ➜</button>
      </div>
    </header>
  );
};

export default Header;
