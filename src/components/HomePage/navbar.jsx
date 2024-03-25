// Navbar.js

import React, { useState } from 'react';
import './nav.css'; // Import the CSS file for styling
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const Navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          DailyColor
        </a>
        {/* Mobile menu toggle button (Hamburger icon) */}
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {/* Navigation links */}
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/Homepage" className="nav-links">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-links">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-links">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
