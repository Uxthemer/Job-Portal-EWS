import React from 'react';
import './FooterSection.css';
import logo from '../assets/img/logo.png';

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="footer-help">
          <p>Need help? <a href="mailto:support@example.com">support@example.com</a></p>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footer-copyright">
        <p>© 2024 UxThemer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
