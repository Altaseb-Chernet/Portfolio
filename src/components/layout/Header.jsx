import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const cvLink = "https://drive.google.com/file/d/1G2I-g_wpAVfVg757c3HlUjp5Dt7yVySW/view?usp=sharing";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/About' },
    { name: 'Skills', to: '/Skills' },
    { name: 'Projects', to: '/Projects' },
    { name: 'Hackathons', to: '/Hackathons' },
    { name: 'Testimonials', to: '/Testimonials' },
    { name: 'Contact', to: '/Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold gradient-text hover:scale-110 transition-transform"
            onClick={() => setIsMenuOpen(false)}
          >
            Altaseb
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `text-gray-300 transition-all duration-300 font-medium relative group hover:text-white ${
                    isActive ? 'text-white' : ''
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* Desktop CV Button */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm" animated>
              <a 
                href={cvLink} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 glass rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 w-6 bg-white transition-transform ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transition-opacity ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transition-transform ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-gray-900/90 backdrop-blur-lg glass transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col space-y-4 p-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              end={item.to === '/'}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2 px-2 rounded-lg hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}

          <Button variant="primary" className="w-full mt-2">
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </Button>
        </div>
      </div>

      {/* Background Overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
