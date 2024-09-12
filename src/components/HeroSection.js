import React, { useState } from "react";
import "./HeroSection.css";
import heroAnim1 from "../assets/videos/hero.mp4";
import heroAnim from "../assets/videos/hero-1.mp4";

const HeroSection = () => {
    const [slideToggle, setSlideToggle] = useState(false);

    // Function to toggle the slideToggle state
    const handleToggle = () => {
        setSlideToggle(prevToggle => !prevToggle);
    };

    return (
        <section className="hero-section">
            {/* Button to toggle video */}
            <button onClick={handleToggle} className="toggle-button">
                Toggle Video
            </button>

            {/* Conditionally render the video based on slideToggle state */}
            <video 
                key={slideToggle ? 'video2' : 'video1'} 
                autoPlay 
                loop 
                muted 
                preload="auto" 
                className="hero-video"
            >
                <source src={slideToggle ? heroAnim1 : heroAnim} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    );
};

export default HeroSection;
