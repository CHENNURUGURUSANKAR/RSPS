import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/rising-star-logo.jpg"; // Update the path as needed

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src={logo}
          alt="Rising Stars Public School Logo"
          className="logo-image"
        />
        Rising Stars Public School
      </div>
      <ul className="navbar-menu">
        <li>
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/academics" activeClassName="active-link">
            Academics
          </NavLink>
        </li>
        <li>
          <NavLink to="/admissions" activeClassName="active-link">
            Admissions
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName="active-link">
            News & Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
