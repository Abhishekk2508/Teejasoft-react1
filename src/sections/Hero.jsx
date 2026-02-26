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
          Welcome to Digital Excellence
        </span>

        <h1>
          Transform Your <span>Digital Presence</span>
        </h1>

        <p>
          Empowering businesses with cutting-edge IT solutions, digital marketing
          strategies, and innovative design services. Let’s build your success
          story together.
        </p>

        <div className="hero-btns">
          <button className="btn-primary">Let’s Start Your Journey</button>
          <button className="btn-secondary">View Our Work</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
