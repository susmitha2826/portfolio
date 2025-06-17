import React from 'react';
import './App.css';
import AnimateOnScroll from './components/AnimateOnScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAnimation from './styles/BackgroundAnimation';

function App() {
  return (
    <>
      <BackgroundAnimation />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <AnimateOnScroll />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}



export default App;