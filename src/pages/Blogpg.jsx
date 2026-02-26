import React from "react";
import { Link } from "react-router-dom"; // ✅ FIXED

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogsSection from "../sections/BlogsSection";
import "../styles/Blogpg.css";
import blogImage from "../assets/images/blog2.png";

const Blogpg = () => {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="blog-hero">
        <div className="blog-hero-overlay"></div>

        <div className="blog-hero-content">
          <div className="blogg-left">

            {/* Breadcrumb Button */}
            <div className="breadcrumb-pill">
              <Link to="/" className="breadcrumb-link">
                Home
              </Link>
              <span className="breadcrumb-separator">&gt;</span>
              <span className="breadcrumb-current">Blog</span>
            </div>

            <h1 className="hero-title">
              Discover Our <br />
              <span>Tech Insights</span>
            </h1>

            <p className="hero-description">
              Explore cutting edge technology trends, development practices,
              and industry innovations from our expert team.
            </p>

            <button className="blog-btn">
              Explore Articles <span>→</span>
            </button>
          </div>

          <div className="blog-right">
            <div className="floating-card card-1">
              <h3>20+</h3>
              <p>Articles</p>
            </div>

            <div className="floating-card card-2">
              <h3>10K</h3>
              <p>Readers</p>
            </div>

            <div className="orange-square"></div>
            <div className="orange-circle"></div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED ARTICLE ================= */}
      <section className="featured-section">
        <div className="featured-card">
          <div className="featured-left">
            <span className="featured-badge">Featured Articles</span>
            <img src={blogImage} alt="Featured Blog" />
          </div>

          <div className="featured-right">
            <h2>The Complete Guide to SEO in 2026</h2>

            <p>
              Master the art of search engine optimization with our comprehensive
              guide covering everything from basics to advanced strategies.
            </p>
                          <div class="feature-divider"></div>


            <div className="featured-bottom">
              <span className="read-time">8 min read</span>

              <button className="read-mor-btn">
                Read More <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BROWSE CATEGORY ================= */}
      <section className="category-section">
  <div className="category-container">
    <h2>Browse by Category</h2>
    <p>Find articles that match your interests</p>

    <div className="category-buttons">
      <button className="category-btn active category1-btn">All</button>
      <button className="category-btn category2-btn">Digital Marketing</button>
      <button className="category-btn category3-btn">Design</button>
      <button className="category-btn category4-btn">SEO</button>
    </div>
  </div>
</section>


      <div className="blog-page">
        <BlogsSection />
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

export default Blogpg;
