import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';   // <— use NavLink for active styles
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // each item points to a route path now
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
                end={item.to === '/'} // only on home exactly
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

          <div className="hidden md:block">
            <Button variant="primary" size="sm" animated>
              Download CV
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 glass rounded-lg">
            <div className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  end={item.to === '/'}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <Button variant="primary" className="w-full mt-2">
                Download CV
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
