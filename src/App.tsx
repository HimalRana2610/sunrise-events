// src/App.tsx
import React from 'react';
import NavigationBar from './components/Navbar';
import Gallery from './components/Gallery';
import Services from './components/Services';
import CTA from './components/CTA';
import Testimonials  from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQs';
import BookingFormComponent from './components/BookingFormComponent';
import './App.css';
import './index.css'
import './components/Navbar.css'
const App = () => {
  return (
    <div>
      <NavigationBar />
        <div className="content">
        <Gallery />
        <Services />
        <Testimonials />
        <BookingFormComponent/>
        <FAQ/>
        <Contact/>
        <CTA/>
        
      </div>
    </div>
  );
};

export default App;
