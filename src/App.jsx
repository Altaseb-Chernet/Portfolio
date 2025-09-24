import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Hackathons from './components/sections/Hackathons';
import Contact from './components/sections/Contact';
import Testimonials from './components/sections/Testimonials';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Hackathons />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

export default App;