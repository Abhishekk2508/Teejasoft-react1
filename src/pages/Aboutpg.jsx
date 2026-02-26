import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../sections/AboutSection";
import "../styles/Aboutpg.css";
import whoImg from "../assets/images/whower.png";
import Leadership from "../components/Leadership/Leadership";




const Aboutpg = () => {
  return (
    <>
      <Navbar />

      {/* ===== HERO BANNER ===== */}
      <section className="aboutpg-hero">
        <div className="aboutpg-content">

          <div className="aboutpg-badge">
            Welcome to About Us
          </div>

          <h1 className="aboutpg-title">
            About <span>Us</span>
          </h1>

          <p className="aboutpg-subtitle">
            Transforming Ideas into Digital Reality.
          </p>

        </div>
      </section>

      {/* ===== WHO WE ARE SECTION ===== */}
<section className="who-we-are">
  <div className="who-container">

    {/* LEFT CONTENT */}
    <div className="who-content">
      <span className="who-label">Who We Are</span>

      <h2 className="who-title">
        Innovators in <br />
        <span>Digital Transformation</span>
      </h2>

      <p>
        We are more than just an IT company — we are your strategic partner
        in navigating the digital age. With 15 years of expertise, we've
        mastered the art of turning complex challenges into elegant solutions.
      </p>

      <p>
        Our team of passionate technologists, creative designers, and strategic
        thinkers work in perfect harmony to deliver solutions that don't just
        meet expectations — they exceed them.
      </p>

     <div className="who-features">
  <div className="who-feature">
    <div className="who-icon">
      <i className="fa-solid fa-rocket"></i>
    </div>
    <div>
      <h4>Innovation First</h4>
      <span>Cutting-edge solutions</span>
    </div>
  </div>

  <div className="who-feature">
    <div className="who-icon">
      <i className="fa-solid fa-user-tie"></i>
    </div>
    <div>
      <h4>Client Focused</h4>
      <span>Your success is ours</span>
    </div>
  </div>
</div>

    </div>

    {/* RIGHT IMAGE */}
<div className="who-image">
  <img src={whoImg} alt="Team discussion" />

  <div className="who-badge">
    <strong>98%</strong>
    <span>Client Satisfaction </span>
  </div>
</div>

  </div>
</section>


<section className="foundation-section">
  <div className="foundation-container">

    {/* TOP TEXT */}
    <span className="foundation-label">Our Foundation</span>

    <h2 className="foundation-title">
      Vision. Mission. Values.
    </h2>

    <p className="foundation-subtitle">
      The three pillars that guide our journey towards excellence
    </p>

    {/* CARDS */}
    <div className="foundation-cards">

      {/* VISION */}
      <div className="foundation-card">
        <div className="foundation-icon">
          <i className="fa-solid fa-eye"></i>
        </div>

        <h4>Vision</h4>

        <p>
          To revolutionize the digital landscape and become the most innovative
          IT solutions provider, empowering businesses globally with cutting-edge
          technology.
        </p>
         <p>
          Built on integrity, innovation, and impact. We believe in creating
          value through collaboration, maintaining transparency, and fostering
          growth for all stakeholders.
        </p>
      </div>

      {/* MISSION */}
      <div className="foundation-card">
        <div className="foundation-icon">
          <i className="fa-solid fa-bullseye"></i>
        </div>

        <h4>Mission</h4>

        <p>
          Delivering exceptional IT solutions that transform businesses through
          innovation, dedication, and a relentless pursuit of excellence in
          everything we do.
        </p>
         <p>
          Built on integrity, innovation, and impact. We believe in creating
          value through collaboration, maintaining transparency, and fostering
          growth for all stakeholders.
        </p>
      </div>

      {/* VALUES */}
      <div className="foundation-card">
        <div className="foundation-icon">
          <i className="fa-solid fa-heart"></i>
        </div>

        <h4>Values</h4>

        <p>
          Built on integrity, innovation, and impact. We believe in creating
          value through collaboration, maintaining transparency, and fostering
          growth for all stakeholders.
        </p>

         <p>
          Built on integrity, innovation, and impact. We believe in creating
          value through collaboration, maintaining transparency, and fostering
          growth for all stakeholders.
        </p>
      </div>

    </div>
  </div>
</section>

 {/* 🔥 LEADERSHIP SECTION */}
      <Leadership />

      {/* ===== ABOUT CONTENT ===== */}
      {/* <AboutSection /> */}

      <Footer />
    </>
  );
};

export default Aboutpg;
