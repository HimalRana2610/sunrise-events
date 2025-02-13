// src/App.tsx
// import React from 'react';
import NavbarComponent from './components/Navbar';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Booking from './components/Booking';
import CTA from './components/CTA';
import FAQ from './components/FAQs'
import './App.css'
import './index.css'


const App = () => {
  return (
    <div>
      <NavbarComponent />
      <Services />
      <Gallery />
      <FAQ/>
      <Contact />
      <Booking />
      <CTA />
    </div>
  );
};

export default App;
