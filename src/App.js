import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PartnerSection from './components/PartnerSection';
import CompaniesSection from './components/CompaniesSection';
import JobListSection from './components/JobListSection';
import CategoriesSection from './components/CategoriesSection';
import JobAlertsSection from './components/JobAlertsSection';
import FooterSection from './components/FooterSection';
import PreLoader from './components/PreLoadingSection';
import LogoAnimation from './components/LogoAnimation';
import LogoTest from './components/logo-test';
import PreloaderEWS from './components/PreloaderEWS';
import './App.css'

function App() {
  return (
    <div className="App">
      <PreloaderEWS />
      {/* <LogoTest /> */}
      {/* <LogoAnimation /> */}
      {/* <PreLoader /> */}
      <Navbar />
      <HeroSection />

      <PartnerSection />
      <CompaniesSection />
      <JobListSection />
      <CategoriesSection />
      <JobAlertsSection />
      <FooterSection />

    </div>
  );
}

export default App;
