// src/App.tsx
import React from 'react';
import NavigationBar from './components/Navbar';
import Gallery from './components/Gallery';
import Services from './components/Services';
import './App.css';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <div className="content">
        <Services />
        <Gallery />
        {/* Add other components here */}
      </div>
    </div>
  );
};

export default App;
