import React from "react";
import "../styles/hero.css";
import heroImg from "../assets/images/hero.jpg";
import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

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
          <Link to="/consultation">
            <button className="btn-primary">Get Free Consultation</button>
          </Link>

          <Link to="/services">
            <button className="btn-secondary">View Our Services</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
