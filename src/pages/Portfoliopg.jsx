import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PortfolioSection from "../sections/PortfolioSection";
import "../styles/Portfoliopg.css";
import bannerImg from "../assets/images/blog-banner.png";

const Portfoliopg = () => {
  return (
    <>
      <Navbar />

      {/* ================= FULL WIDTH BANNER ================= */}
      <section className="portfolio-banner">

        {/* background */}
        <div className="portfolio-banner-bg"></div>

        {/* 1920 reference content */}
        <div className="portfolio-banner-content">

          {/* ✅ FIXED BREADCRUMB (CLICKABLE HOME) */}
          <div className="breadcrumb-pill">
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>
            <span>&nbsp;&gt;&nbsp;</span>
            <span className="breadcrumb-current">Portfolio</span>
          </div>

          <h1 className="portfolio-title-fixed">
            Our <br />
            <span>Portfolio</span>
          </h1>

          <p className="portfolio-desc-fixed">
            Take a closer look at the work that defines our expertise. From website development
             to digital marketing campaigns,
             we create solutions designed to generate impact and long-term success.
          </p>

          <div className="portfolio-buttons-fixed">
            <button className="btn-primary-fixed">Request A Quote</button>
            <button className="btn-secondary-fixed">Get Started</button>
          </div>

          {/* 👉 RIGHT SIDE IMAGE */}
          <img
            src={bannerImg}
            alt="Portfolio visual"
            className="portfolio-right-img"
          />

        </div>
      </section>

      {/* ================= PORTFOLIO CARDS ================= */}
      <div className="portfolio-page">
        <PortfolioSection />
      </div>

      {/* ================= CTA ================= */}
      <section className="project-cta-section">
        <div className="project-cta-container">
          <div className="cta-left">
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-description">
              Let's collaborate and bring your vision to life with cutting-edge technology
            </p>
          </div>
          <div className="cta-right">
            <button className="cta-contact-btn">
              Contact Us <span className="cta-arrow">↗</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Portfoliopg;
