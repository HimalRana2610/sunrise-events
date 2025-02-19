import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import videoSrc from "./vid2.mp4";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <section id="hero">
      <div className="video-container">
        <video className="video-bg" autoPlay muted loop playsInline>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="overlay"></div>
      <div className={`cont ${isVisible ? "slide-in" : ""}`}>
        <h1>Welcome to Our Website</h1>
        <p>"From weddings to corporate gatherings, we bring your vision to life with seamless planning and flawless execution."</p>
      </div>
    </section>
  );
};

export default HeroSection;
