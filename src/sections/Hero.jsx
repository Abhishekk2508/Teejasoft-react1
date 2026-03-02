import React from "react";
import "../styles/hero.css";
import heroImg from "../assets/images/hero.jpg";
import { FaRocket } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <img src={heroImg} alt="Hero" />
      </div>

      <div className="hero-right">
        <span className="hero-badge">
          <FaRocket className="rocket-icon" />
          Welcome to Teejaysoft
        </span>

        <h1>
          Transform Your <span>Digital Presence</span>
        </h1>

        <p>
          Empowering brands with innovative IT solutions and performance-driven
           digital marketing strategies that accelerate measurable growth.
        </p>

        <div className="hero-btns">
          <button className="btn-primary">Get Free Consultation</button>
          <button className="btn-secondary">View Our Services</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
