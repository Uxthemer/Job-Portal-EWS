import React, { useEffect } from 'react';
import anime from 'animejs';
import './LogoAnimation.css'; // Import the CSS

const LogoAnimation = () => {
  useEffect(() => {
    const logoAnimation = anime.timeline({ 
      autoplay: true,
      delay: 200
    });

    logoAnimation.add({
      targets: '#logo',
      translateY: [-100, 0],
      opacity: [0, 1],
      elasticity: 600,
      duration: 1600
    }).add({
      targets: '#logo-hexagon',
      rotate: [-90, 0],
      duration: 1200,
      elasticity: 600,
      offset: 100
    }).add({
      targets: '#logo-circle',
      scale: [0, 1],
      duration: 1200,
      elasticity: 600,
      offset: 500
    }).add({
      targets: '#logo-mask',
      scale: [0, 1],
      duration: 1000,
      elasticity: 600,
      offset: 550
    }).add({
      targets: '#logo-text',
      translateX: ['-100%', 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo',
      offset: 1000
    });

    const restart = document.querySelector(".button-restart");
    restart.addEventListener("click", () => logoAnimation.restart());
  }, []);

  return (
    <div>
      <div className="site-logo">
        <figure id="logo">
          <svg width="100%" height="100%" viewBox="0 0 148 128">
            <defs>
              <mask id="circle-mask">
                <rect fill="white" width="100%" height="100%"></rect>
                <circle id="logo-mask" fill="black" cx="120" cy="96" r="28"></circle>
              </mask>
            </defs>
            <polygon id="logo-hexagon" fill="#00B4FF" points="64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96" mask="url(#circle-mask)"></polygon>
            <circle id="logo-circle" fill="#3F3C3C" cx="120" cy="96" r="20"></circle>
          </svg>
        </figure>
        <div className="site-title">
          <div id="logo-text" className="site-title-text">
            Elite<span>Workforce Solution</span>
          </div>
        </div>
      </div>

      <button className="button-restart">restart</button>
    </div>
  );
};

export default LogoAnimation;
