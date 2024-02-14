// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          NINOS
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              List Page
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/product/:id"  className="navbar-link">
              Detail Page
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
