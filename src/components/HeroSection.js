import React from "react";
import "./HeroSection.css";
import jobCard1 from "../assets/img/job-card.png";
import jobCard2 from "../assets/img/job-card.png";
import arrow from "../assets/img/arrow.png";
import heroAnim from "../assets/videos/hero.mp4";
//import ewslogosvg from "../assets/img/logo-svg.svg";
import { ReactTyped } from 'react-typed';

const HeroSection = () => {
    return (
        <section className="hero-section">
            {/*<div className="hero-content">
                 <div className="hero-left-sec">
                    <h1 className="hero-title">
                        <ReactTyped
                            strings={["One Step Closer To Your Dream Job"]}
                            typeSpeed={60}
                            backSpeed={30}
                            loop
                        />
                    </h1>
                    <p className="hero-subtitle">
                        Let Us Help You Find A Job That Suits You The Best!
                    </p>
                    <div className="hero-buttons">
                        <button className="btn-get-started">Find Job</button>
                        <button className="btn-story">Our Story</button>
                    </div> */}
                {/* <i className="bi bi-arrow-down hero-arrow">hi</i> */}

                {/* <img src={arrow} alt="Arrow" className="" /> */}
                {/* <img src={jobCard2} alt="Job Card 2" className="job-card-2" /> */}
                {/* Add job posters */}
                {/* <div className="hero-graphic job-card-1">
        <img src={jobCard2} alt="UX Designer Job Card" />
      </div>
      <div className="hero-graphic job-card-2">
        <img src={jobCard2} alt="UX Designer Job Card" />
      </div> 


                </div>*/}
                {/* Add doen arrow */}
                {/* <div className="spring-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                    </svg>
                </div>
                <div className="hero-right-sec">
                    <div className="ews-logo-svg"></div>
                </div> 
                </div> */}
                <video autoplay={"autoplay"} loop muted preload={"auto"}>
                    <source src={heroAnim} type="video/mp4" />
                    {"Your browser does not support the video tag."}
                </video>
        </section>
    );
};

export default HeroSection;
