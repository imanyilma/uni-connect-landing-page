import React, { useState, useEffect, useRef, useCallback } from "react";
import { NAV_LINK, PERSONAL_INFO } from "../../components/utilits/constants";
import useScrollSpy from "react-use-scrollspy";
import { Code,Menu ,X } from "lucide-react";

function Navbar({ currentPage, onNavigatePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRefs = useRef({}); // Object to hold refs by ID
  const navRef = useRef(null);

  const activeSection = useScrollSpy({
    sectionElementRefs: Object.values(sectionRefs.current).filter(Boolean),
    offsetPx: -100,
  });

  // Populate refs after mount
  useEffect(() => {
    NAV_LINK.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el && !sectionRefs.current[link.id]) {
        sectionRefs.current[link.id] = { current: el };
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!isMenuOpen) return;
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isMenuOpen]);

  const scrollToSection = useCallback((sectionId) => {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleNavLinkClick = (sectionId) => {
    if (currentPage !== 'home' && onNavigatePage) {
      onNavigatePage(sectionId);
      setIsMenuOpen(false);
      return;
    }

    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 right-0 left-0 z-[1000] w-full py-4 transition-all duration-300 ${
        isScrolled ? "bg-black/30 backdrop-blur-lg" : "bg-transparent"
      }`}
      style={{ transform: "translate3d(0,0,0)" }}
    >
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
              aria-label="home"
            >
              {PERSONAL_INFO.name.split(" ")[0]}
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-4">
            {NAV_LINK.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavLinkClick(link.id)}
                className={`text-base font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-white"
                    : "text-white/70 hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
  <button
    onClick={() => handleNavLinkClick("contact")}
    className="px-7 py-1 bg-primary text-[#fffbfb] font-medium text-base rounded-[17px] hover:bg-primary/80 transition-all duration-300"
  >
    Contact us
  </button>
</div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-white/80 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6"/>}
              
            </button>
        </div>
      </div>
        {/* Mobile Menu */}
        <div 
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
            <div className="bg-black/95 backdrop-blur-lg 
            border-t border-white/10 px-5 py-6 space-y-3"
            >
                {NAV_LINK.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavLinkClick(link.id)}
                    className={`block w-full text-left px-4 py-3 rounded-b-lg font-medium transition-all duration-300 ${activeSection === link.id ?
                     "bg-white/20 text-white" : "text-white/70 hover:text-white"}`} >
                    {link.label}
                  </button>
                ))}
                    
                </div>
               </div>
              </nav>
           
    
  );
}

export default Navbar;
