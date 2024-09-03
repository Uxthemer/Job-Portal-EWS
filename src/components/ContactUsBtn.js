import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import './ContactUsBtn.css'; // We'll keep the CSS in a separate file

const MySection = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const common = {
      targets: '.polymorph',
      easing: 'easeOutQuad',
      duration: 600,
      loop: false,
    };

    const handleShowContent = () => {
      setIsActive(false);
      anime({
        ...common,
        points: [{ value: '215,110 0,110 186,86 215,0' }],
      });
    };

    const handleHideContent = () => {
      setIsActive(true);
      anime({
        ...common,
        points: [{ value: '215,110 0,110 0,0 215,0' }],
      });
    };

    const btnCta = document.querySelector('#cta');
    const btnClose = document.querySelector('#close');

    btnCta.addEventListener('click', handleShowContent);
    btnClose.addEventListener('click', handleHideContent);

    return () => {
      btnCta.removeEventListener('click', handleShowContent);
      btnClose.removeEventListener('click', handleHideContent);
    };
  }, []);

  return (
    <section id="my-section">
      <div id="wrap-cta" className={ isActive ? 'active ' : ''}>
        <button className='contactus-btn' id="cta">Contact Us</button>
      </div>

      <svg viewBox="0 0 215 110" preserveAspectRatio="none" className={isActive ? '' : 'active'}>
        <polygon className="polymorph" points="215,110 0,110 0,0 215,0"></polygon>
      </svg>

      <div className="container">
        <div id="content" className={isActive ? '' : 'active'}>
          <h1>Give us a call, and let’s accelerate your career.</h1>
          <p>EWSrecruitment@gmail.com</p>
          <button id="close">Done</button>
        </div>
      </div>
    </section>
  );
};

export default MySection;
