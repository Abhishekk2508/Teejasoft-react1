import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Contactpg.css";
import contactImg from "../assets/images/contact.png";

const Contactpg = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://teejasoft-react1-2.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("Form submitted successfully ✅");

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
      } else {
        alert(data.message || "Something went wrong");
      }

    } catch (error) {
      alert("Server Error ❌");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <div className="blog-left">
            <div className="breadcrumb-pill">
              <Link to="/" className="breadcrumb-link">
                Home
              </Link>
              <span className="breadcrumb-separator">&gt;</span>
              <span className="breadcrumb-current">ContactUs</span>
            </div>

            <h1 className="hero-title">
              Let's <br />
              <span>Talk</span>
            </h1>

            <p className="hero-description">
              Ready to transform your digital presence? We're here to make it happen.
              Let's create something extraordinary together.
            </p>

            <div className="scroll-indicator">
              <span className="arrow-icon">↓ </span>
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

      {/* ================= CONTACT FORM SECTION ================= */}
      <section className="contact-section">
        <div className="contact-container">

          <div className="contact-form-card">
            <h2>Send us a Message</h2>
            <p className="subtitle">
              Fill out the form below and we’ll get back to you within 24 hours
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="form-group full">
                <label>Your Name</label>
                <div className="input-wrap">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <div className="input-wrap">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Yourname@gmail.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <div className="input-wrap">
                    <i className="fas fa-phone"></i>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 4321"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group full">
                <label>Service Type</label>
                <div className="input-wrap">
                  <i className="fas fa-briefcase"></i>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a Service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="SEO">SEO</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                  </select>
                </div>
              </div>

              <div className="form-group full">
                <label>Your Message</label>
                <div className="input-wrap textarea-wrap">
                  <i className="fas fa-comment-dots"></i>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Send Message ➜"}
              </button>

              <p className="privacy-note">
                🔒 Your information is safe with us. We respect your privacy.
              </p>

            </form>
          </div>

          <div className="contact-image-card">
            <img src={contactImg} alt="Contact Us" />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contactpg;