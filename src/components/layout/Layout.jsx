import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AnimatedBackground from '../ui/AnimatedBackground';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBackground />
      <Header />
      <main className="flex-grow pt-16 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;