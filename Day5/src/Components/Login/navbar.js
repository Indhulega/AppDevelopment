
import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
        <p className="logo nav-text">Donate!</p>


        </Link>
        <ul className="nav-links">
          <Link to="/about">

          <li>About Us</li>
          </Link>
          <Link to="">
            
          <li>Contact Us</li>
          </Link>
          
          <li>Knowledge Hub</li>
          <Link to="/login">

            
          <li>Login</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
