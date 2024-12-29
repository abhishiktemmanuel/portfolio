'use client'

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Portfolio', href: '#portfolio' },
    { title: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleScroll = () => {
      const scrollContainer = document.querySelector('.scroll-container');
      const currentScrollY = scrollContainer ? scrollContainer.scrollTop : window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 20) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 20) {
        setIsVisible(false);
      }
      
      setIsScrolled(currentScrollY > 20);
      lastScrollY = currentScrollY;
    };

    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    }

    handleScroll();

    return () => {
      const scrollContainer = document.querySelector('.scroll-container');
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out md:block ${
        isScrolled 
          ? 'bg-black/75 backdrop-filter backdrop-blur-lg' 
          : 'bg-transparent'
      } ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-white/90"></span>
            </div>

            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors duration-300 font-medium ${
                    isScrolled 
                      ? 'text-white/90 hover:text-white' 
                      : 'text-white/80 hover:text-white'
                  } relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full`}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden fixed top-4 right-4 z-50 p-2 rounded-lg transition-all duration-300 ${
          isScrolled ? 'bg-black/5 backdrop-blur-lg' : 'bg-transparent'
        }`}
      >
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/90 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col p-16 items-start justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <a
              key={link.title}
              href={link.href}
              className={`text-2xl text-white hover:text-gray-300 transform transition-all duration-300 ${
                isOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-full opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms` 
              }}
              onClick={(e) => {
                handleNavClick(e, link.href);
                setIsOpen(false);
              }}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
