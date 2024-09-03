import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import logo from '../assets/img/logo.png';
import ContactUs from '../components/ContactUsBtn';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="EWS Logo" className="logo" /> 
          </a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">Job</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">Client</a>
          </li>
          <li className="navbar-item">
            <a href="#pricing" className="navbar-link">Services</a>
          </li>
          <li className="navbar-item">
            <a href="#features" className="navbar-link">About Us</a>
          </li>
        </ul>
       
      </div>
      <div className="navbar-buttons">
          {/* <a href="/register" className="navbar-btn register-btn">Contact Us</a> */}
          <ContactUs className="navbar-btn register-btn"/>
        </div>
    </nav>
  );
};

export default Navbar;
