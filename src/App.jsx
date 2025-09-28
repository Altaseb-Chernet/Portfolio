import React from 'react';
import { Routes, Route } from "react-router-dom";
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
      <Routes>
      <Route path='/' element={<Hero />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Skills' element={<Skills />}/>
      <Route path='/Projects' element={<Projects />}/>
      <Route path='/Hackathons' element={<Hackathons />}/>
      <Route path='/Testimonials' element={<Testimonials />}/>
      <Route path='/Contact' element={  <Contact />}/>
      
    </Routes>
    </Layout>
  );
}

export default App;