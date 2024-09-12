import React from 'react';
import './JobListSection.css';

const JobListSection = () => {
  const jobs = [
    { title: 'UX Designer', company: 'Advoit Digital Agency', type: 'Fulltime', location: 'Onsite', salary: '$200K', applied: 24 },
    { title: 'Fitter', company: 'Advoit Digital Agency', type: 'Fulltime', location: 'Onsite', salary: '$200K', applied: 24 },
    { title: 'UX Designer', company: 'Advoit Digital Agency', type: 'Fulltime', location: 'Onsite', salary: '$200K', applied: 24 },
    { title: 'UX Designer', company: 'Advoit Digital Agency', type: 'Fulltime', location: 'Onsite', salary: '$200K', applied: 24 },
    { title: 'UX Designer', company: 'Advoit Digital Agency', type: 'Fulltime', location: 'Onsite', salary: '$200K', applied: 24 },
    { title: 'UX Designer', company: 'Advoit Digital Agency', type: 'Fulltime', location: 'Onsite', salary: '$200K', applied: 24 }
  ];

  return (
    <div className="block job-list-section">
      <h2>Newest <span className="highlight">Jobs</span> For You</h2>
      <p>Get The Fastest Application So That Your Name Is Above Other Application</p>
      <div className="categories">
        <span className="active">All Recent</span>
        <span>Engineer</span>
        <span>Mechanic</span>
        <span>Technician</span>
        <span>Fitter</span>
      </div>
      <div className="job-cards">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-info">
              <div className="job-type">
                <span>{job.type}</span>
                <span>{job.location}</span>
                <span>{job.salary}</span>
              </div>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
            </div>
            <button className="apply-button">More Details</button>
            {/* <p className="applied-info">{job.applied} Applied</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListSection;
