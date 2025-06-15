// src/App.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import HeroAndFeatures from './components/HeroAndFeatures';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroAndFeatures />
    </div>
  );
}

export default App;