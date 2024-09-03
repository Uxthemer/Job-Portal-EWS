import React from 'react';
import './CategoriesSection.css';

const CategoriesSection = () => {
  return (
    <div className="categories-section">
      <h2>
        Explore By <span className="highlight">Categories</span>
      </h2>
      <p>Can’t find what you looking for?</p>
      <div className="categories-container">
        <div className="popular-categories">
          <h3>Popular Categories</h3>
          <ul>
            <li>
              <span>System analyst</span>
              <span className="badge">6</span>
            </li>
            <li className="highlighted">
              <span>Frontend developer</span>
              <span className="badge">12</span>
            </li>
            <li>
              <span>Backend developer</span>
              <span className="badge">14</span>
            </li>
            <li className="highlighted">
              <span>Full Stack developer</span>
              <span className="badge">8</span>
            </li>
          </ul>
        </div>
        <div className="other-categories">
          <div className="category-card">
            <div className="icon arts"></div>
            <span>Arts Media or Communication</span>
          </div>
          <div className="category-card">
            <div className="icon hr"></div>
            <span>Human Resources</span>
          </div>
          <div className="category-card active">
            <div className="icon business"></div>
            <span>Business Development</span>
          </div>
          <div className="category-card">
            <div className="icon finance"></div>
            <span>Financial Accounting</span>
          </div>
        </div>
      </div>
      <button className="get-started-btn">Get Started</button>
    </div>
  );
};

export default CategoriesSection;
