import React from "react";
import { Link } from "react-router-dom"; //  FIXED

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogsSection from "../sections/BlogsSection";
import "../styles/Contactpg.css";
import contactImg from "../assets/images/contact.png";

import blogImage from "../assets/images/contactbanner1.png";

const Blogpg = () => {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <div className="blog-left">

            {/* Breadcrumb Button */}
            <div className="breadcrumb-pill">
              <Link to="/" className="breadcrumb-link">
                Home
              </Link>
              <span className="breadcrumb-separator">&gt;</span>
              <span className="breadcrumb-current">ContactUs</span>
            </div>

            <h1 className="hero-title">
              Let's  <br />
              <span>Talk</span>
            </h1>

            <p className="hero-description">
              Ready to transform your digital presence? We're here to make it happen. Let's create something extraordinary together.
            </p>

           <div className="scroll-indicator">
  <span className="arrow-icon">↓  </span>
  Scroll to get in touch
</div>

          </div>

          <div className="contact-right">
            <div className="floatting-card card-1">
               <h3>50+</h3>
              <p>Projects Done</p>
              
            </div>

            <div className="floatting-card card-2">
              <h3>98%</h3>
              <p>Happy Clients</p>
            </div>

            <div className="floatting-card card-3">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>

<section className="contact-section">
  <div className="contact-container">

    {/* LEFT — FORM */}
    <div className="contact-form-card">
      <h2>Send us a Message</h2>
      <p className="subtitle">
        Fill out the form below and we’ll get back to you within 24 hours
      </p>

      <form className="contact-form">

        <div className="form-group full">
          <label>Your Name</label>
          <div className="input-wrap">
            <i className="fas fa-user"></i>
            <input className="namep" type="text" placeholder="Your Name" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email Address</label>
            <div className="input-wrap">
              <i className="fas fa-envelope"></i>
              <input className="email namep" type="email" placeholder="Yourname@gmail.com" />
            </div>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <div className="input-wrap">
              <i className="fas fa-phone"></i>
              <input className="phone namep" type="text" placeholder="+91 00000 4321" />
            </div>
          </div>
        </div>

        <div className="form-group full">
          <label className="serviceinput">Service Type</label>
          <div className="input-wrap">
            <i className="fas fa-briefcase"></i>
            <select className="drodown namep">
              <option>Select a Service</option>
            </select>
          </div>
        </div>

        <div className="form-group full">
          <label>Your Message</label>
          <div className="input-wrap textarea-wrap">
            <i className="fas fa-comment-dots"></i>
            <textarea className="msg namep" placeholder="Tell us about your project..."></textarea>
          </div>
        </div>

        <button className="submit-btn">
          <span className="btn-text">Send Message</span>
          <span className="btn-arrow">➜</span>
        </button>

        <p className="privacy-note">
          🔒 Your information is safe with us. We respect your privacy.
        </p>

      </form>
    </div>

    {/* RIGHT — IMAGE */}
    <div className="contact-image-card">
      <img src={contactImg} alt="Contact Us" />
    </div>

  </div>
</section>

<section className="reach-section">
  <div className="reach-container">

    {/* Top Text */}
    <span className="reach-tag">Choose your</span>

    {/* Heading */}
    <h2 className="reach-title">Other Ways to Reach Us</h2>

    <p className="reach-subtitle">
      Choose the method that works best for you
    </p>

    {/* Cards */}
    <div className="reach-grid">

      <div className="reach-card">
        <div className="reach-icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div>
          <h4>Visit Our Office</h4>
          <p>lorem ipsum &nbsp; lorem ipsum</p>
        </div>
      </div>

      <div className="reach-card">
        <div className="reach-icon">
          <i className="fas fa-phone"></i>
        </div>
        <div>
          <h4>Call Us</h4>
          <p>+91 98765 43213</p>
        </div>
      </div>

      <div className="reach-card">
        <div className="reach-icon">
          <i className="fas fa-envelope"></i>
        </div>
        <div>
          <h4>Email Us</h4>
          <p>info@reejaysoft.com</p>
        </div>
      </div>

      <div className="reach-card">
        <div className="reach-icon">
          <i className="fas fa-clock"></i>
        </div>
        <div>
          <h4>Working Hours</h4>
          <p>Monday - Friday: 9:30 AM – 6:30 PM</p>
        </div>
      </div>

    </div>
  </div>
</section>


      <Footer />
    </>
  );
};

export default Blogpg;
