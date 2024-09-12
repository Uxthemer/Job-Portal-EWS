import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './PreloaderEWS.css';

const AnimatedLogo = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3-second loading
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleMouseMove = (e) => {
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        controls.start({ rotateY: x, rotateX: -y });
      };

      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [controls]);

  return (
    loading && <div className="logo-container" ref={containerRef}>
      <motion.div
        className="logo-wrapper"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div className="logo" animate={controls} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
          <div className="logo-letter blue">E</div>
          <motion.div
            className="logo-letter gray"
            animate={{ rotateY: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            W
          </motion.div>
          <div className="logo-letter blue">S</div>
        </motion.div>
      </motion.div>
      <motion.div
        className="company-name"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        ELITE WORKFORCE SOLUTIONS
      </motion.div>
      
    </div>
  );
};

export default AnimatedLogo;