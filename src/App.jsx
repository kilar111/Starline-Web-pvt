import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Services from './components/Services';
import Contact from './components/Contact';
import FloatingBackground from './components/FloatingBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <FloatingBackground />
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
