import "./Header.css";

import React, { useEffect } from "react";

import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { getUserDetails, logout } from "../../features/userSlice";

const Header = () => {
  const userToken = Cookies.get("token");
  const user = useSelector((state) => state.user.data.data) || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("token");
    dispatch(logout);
    navigate("/");
  };
  useEffect(() => {
    if (userToken) {
      if (!Object.keys(user).length) {
        dispatch(getUserDetails());
      }
    }
  }, []);
  return (
    <header className="header">
      <div className="left-side">
        <div className="brand">
          <Link to="/">MyCourseAcademia</Link>
        </div>
        {!userToken && (
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
        )}
      </div>
      {!userToken && (
        <div className="right-side">
          <Link className="login" to="/login">
            <p>Login</p>
          </Link>
          <Link to="/signup">
            <button className="join-btn">Join Us ➜</button>
          </Link>
        </div>
      )}
      {userToken && user && (
        <div className="user-info">
          <img src={user?.photo?.secure_url} alt="Avatar" className="avatar" />
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </header>
  );
};

export default Header;
