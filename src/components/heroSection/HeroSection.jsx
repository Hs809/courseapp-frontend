import "./HeroSection.css";

import React from "react";

import Technology from "../../assets/technology.png";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <p className="join-us">Join Us</p>
        <p className="courses">Highly Distinguished Courses</p>
        <p className="large-objects">We know how large objects will act,</p>
        <p className="small-scale">but things on a small scale</p>
        <div className="cta-container">
          <button className="quote-btn">Get Quote Now</button>
          <button className="learn-btn">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-image-background"></div>
        {/* Your image goes here */}
        <img className="technology-image" src={Technology} alt="Hero" />
      </div>
    </div>
  );
};

export default HeroSection;
