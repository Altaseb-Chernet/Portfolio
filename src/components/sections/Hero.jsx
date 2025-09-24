import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import Button from '../ui/Button';
import AnimatedElement from '../ui/AnimatedElement';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background elements remain the same */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement animation="slideInLeft">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
                Hi, I'm <span className="gradient-text">{portfolioData.personalInfo.name}</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-300 mb-6">
                {portfolioData.personalInfo.title}
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                {portfolioData.personalInfo.bio}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button  variant="primary" size="lg" animated>
                  <a href="https://github.com/Altaseb-Chernet">View My Projects</a>
                </Button>
                <Button variant="secondary" size="lg" animated>
                  Download CV
                </Button>
              </div>
              
              <div className="flex justify-center lg:justify-start space-x-6 mt-8">
                {portfolioData.socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125"
                    style={{ animationDelay: `${index * 100 + 800}ms` }}
                  >
                    <span className="text-2xl">{link.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slideInRight" delay={300}>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  {/* THIS IS THE CHANGED PART - my Photo */}
                  <div className="w-72 h-72 bg-slate-800 rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="/images/profile.jpg" 
                      alt="Altaseb Chernet"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 glass rounded-full p-4 animate-float">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="absolute -bottom-4 -left-4 glass rounded-full p-4 animate-float" style={{animationDelay: '3s'}}>
                  <span className="text-2xl">💡</span>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Hero;