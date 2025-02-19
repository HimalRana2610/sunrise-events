// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Gallery from './components/Gallery';
import Services from './components/Services';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQs';
import BookingFormComponent from './components/BookingFormComponent';
import AdminPage from './components/AdminPage';  // Import Admin Page
import './App.css';
import './index.css';
import './components/Navbar.css';
import HeroSection from './components/Hero';


const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <div className="content">
          <Routes>
            {/* Home Page Routes */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection/>
                  <Gallery />
                  <Services />
                  <BookingFormComponent />
                  <Testimonials />
                  <FAQ />
                  <Contact />
                  <CTA />
                  
                </>
              }
            />

            {/* Admin Page Route */}
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
