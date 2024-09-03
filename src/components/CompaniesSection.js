import React from 'react';
import './CompaniesSection.css';

const CompaniesSection = () => {
  return (
    <div className="companies-section">
      <h2 className="companies-title">Work With Exciting Companies</h2>
      <p className="companies-subtitle">
        Join Exciting Companies and Work With The Best Teams To Realize Your Goals.
      </p>
      <div className="companies-logos">
        <span className="company-logo">Spotify</span>
        <span className="company-logo">Slack</span>
        <span className="company-logo">Amazon</span>
        <span className="company-logo">Google</span>
        <span className="company-logo">Apple</span>
        <span className="company-logo">Microsoft</span>
      </div>
    </div>
  );
};

export default CompaniesSection;
