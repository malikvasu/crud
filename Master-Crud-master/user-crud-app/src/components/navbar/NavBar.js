import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/logo.png" alt="" className="img-fluid nav-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeclassname="active"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeclassname="active"
                to="/aboutUs"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeclassname="active"
                to="/contactUs"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <Link to="/addNewUser" className="btn btn-outline-success mx-3 custom-btn">Add New User</Link>
          <button className="btn btn-outline-danger custom-btn">LogOut</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
