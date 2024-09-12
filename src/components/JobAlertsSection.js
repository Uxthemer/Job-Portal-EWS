import React from 'react';
import './JobAlertsSection.css';

const JobAlertsSection = () => {
  return (
    <div className="block job-alerts-section">
      <div className="alerts-container">
        <div className="alert-card">
          <div className="alert-header">
            <div className="menu-icon"></div>
          </div>
          <div className="alert-content">
            <div className="alert-item">
              <input type="checkbox" checked readOnly />
              <span>Job a Alerts</span>
              <span className="new-job">1 new job for front end (fulltim..)</span>
            </div>
            <div className="progress-bars-sec">
              <div className="progress-bar">
                <input type="checkbox" checked readOnly />
                <div className="bar"></div>
              </div>
              <div className="progress-bar">
                <input type="checkbox" checked readOnly />
                <div className="bar filled"></div>
              </div>
              <div className="progress-bar">
                <input type="checkbox" checked readOnly />
                <div className="bar"></div>
              </div>
              <div className="progress-bar">
                <input type="checkbox" checked readOnly />
                <div className="bar filled"></div>
              </div>
            </div>
          </div>
          <div className="alert-content">
            <div className="alert-item">
              <input type="checkbox" checked readOnly />
              <span>Job a Alerts</span>
              <span className="new-job">1 new job for front end (fulltim..)</span>
            </div>
            <div className="progress-bars-sec">
              <div className="progress-bar">
                <input type="checkbox" checked readOnly />
                <div className="bar"></div>
              </div>
              <div className="progress-bar">
                <input type="checkbox" checked readOnly />
                <div className="bar filled"></div>
              </div>
              <div className="progress-bar">
                <input type="checkbox" checked readOnly />
                <div className="bar"></div>
              </div>
              <div className="progress-bar">
                <input type="checkbox" checked readOnly />
                <div className="bar filled"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="subscribe-section">
        <h2>
          Always Get The <span className="highlight">Latest</span> Information
        </h2>
        <p>
        Can’t find what you looking for? Keep in touch with Us. We will bring you the oppertunity.
        </p>
        <div className="email-subscribe">
          <input type="email" placeholder="Email." />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default JobAlertsSection;
