import React, { useEffect, useState } from 'react'
import Navbar from './components/layout/nav';
import Hero from './components/ui/hero';
import Horizontal from './components/ui/horizontal';
import UserList from './components/ui/userlist';
import Count from './components/ui/count';
import ToDownload from './components/ui/todownload';
import Footer from './components/layout/footer';
import AboutUs from './components/ui/aboutus';
import WhyUni from './components/ui/whyuni';
import PrivacyPolicy from './components/privacy';
import TermsAndConditions from './components/term&conditions';

import './App.css'
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pendingSection, setPendingSection] = useState(null);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigate = (sectionId) => {
    if (sectionId === 'privacy' || sectionId === 'terms' || sectionId === 'security') {
      const legalSection =
        sectionId === 'terms' ? 'terms-section' : 'privacy-section';

      if (currentPage !== 'legal') {
        setCurrentPage('legal');
        setPendingSection(legalSection);
        return;
      }

      scrollToSection(legalSection);
      setPendingSection(null);
      return;
    }

    if (sectionId === 'home') {
      setPendingSection(null);
      setCurrentPage('home');
      scrollToSection('home');
      return;
    }

    if (currentPage !== 'home') {
      setCurrentPage('home');
      setPendingSection(sectionId);
      return;
    }

    scrollToSection(sectionId);
  };

  useEffect(() => {
    if (pendingSection) {
      scrollToSection(pendingSection);
      setPendingSection(null);
    }
  }, [currentPage, pendingSection]);

  return (
    <div>
      <Navbar currentPage={currentPage} onNavigatePage={handleNavigate} />
      {currentPage === 'home' ? (
        <>
          <Hero />
          <AboutUs />
        
          <Horizontal />
          <WhyUni />
          <UserList />
          <ToDownload />
          
        </>
      ) : (
        <>
          <PrivacyPolicy />
          <TermsAndConditions />
        </>
      )}
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export default App
