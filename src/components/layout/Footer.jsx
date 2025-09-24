import React from 'react';
import { portfolioData } from '../../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {portfolioData.socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <p className="text-gray-400">
          © {currentYear} {portfolioData.personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;