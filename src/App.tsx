// src/App.tsx
// import React from 'react';
import NavbarComponent from './components/Navbar';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import CTA from './components/CTA';
import FAQ from './components/FAQs'
import Testimonials from './components/Testimonials';
import Booking from './components/BookingFormComponent'
import './App.css'
import './index.css'


const App = () => {
  return (
    <div>
      <NavbarComponent />
      <Services />
      <Gallery />
      <Booking/>
      <FAQ/>
      <Testimonials/>
      <Contact />
      <CTA />
    </div>
  );
};

export default App;
