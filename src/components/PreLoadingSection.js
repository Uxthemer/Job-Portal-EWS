// PreLoader.js
import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import "./PreLoadingSection.css"; // Create this file for custom styles

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3-second loading
    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="preloader">
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" className="preload-logo" />
        </div>
      </div>
    )
  );
};

export default PreLoader;
