import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const expertiseData = {
  "Digital Marketing": ["Facebook Ads", "WhatsApp Ads", "Instagram Ads"],
  "Organic SEO": ["On Page SEO", "Off Page SEO", "Technical SEO"],
  "SEO for Industries": ["Ecommerce SEO", "Local SEO", "Enterprise SEO"],
  "PPC for Industries": ["Google Ads", "Bing Ads", "YouTube Ads"],
  "Meta Ads": ["Meta Pixel Setup", "Conversion API", "Retargeting Ads"],
};

const Footer = () => {
  const [active, setActive] = useState("Meta Ads");

  return (
    <footer className="footer">

      {/* GRID */}
      <div className="footer-grid">
        <div>
          <h4 className="gradient-underline">Quick Links</h4>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Aboutpg">About Us</Link>
            </li>
            <li>
              <Link to="/services/web-development">Our Services</Link>
            </li>
            <li>
              <Link to="/Portfoliopg">Portfolio</Link>
            </li>
            <li>
              <Link to="/Blogpg">Blogs</Link>
            </li>
            <li>
              <Link to="/Contactpg">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="gradient-underline">Our Services</h4>

          <ul>
            <li>
              <Link to="/services/web-development">Web Development</Link>
            </li>
            <li>
              <Link to="/services/digital-marketing">Digital Marketing</Link>
            </li>
            <li>
              <Link to="/services/graphic-design">Design Services</Link>
            </li>
            <li>
              <Link to="/services/paid-ads">Paid Advertising</Link>
            </li>
            <li>
              <Link to="/services/Domainhosting">Domain & Hosting</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info (replacing newsletter) */}
        <div className="contact-replace">
          <h4 className="gradient-underline">Contact Us</h4>
          <span className="contact-item">
            <FaEnvelope className="contact-icon" />
            info@teejaysoft.com
          </span>
          <span className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            +91 98724 69996
          </span>
          <p className="contactus">Follow Us on:</p>
          <div className="icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className="divider" />

      {/* EXPERTISE */}
      <div className="keywords-section">
        <div className="keywords-box">
          <h4 className="gradient-underline">Our Expertise Keywords</h4>

          <div className="keyword-tags">
            {Object.keys(expertiseData).map((key) => (
              <div
                key={key}
                className={`tag ${active === key ? "active" : ""}`}
                onClick={() => setActive(key)}
              >
                <span className="tag-text">{key}</span>
                <span className="tag-arrow"></span>
              </div>
            ))}
          </div>

          <div className="sub-tags-box">
            <ul>
              {expertiseData[active].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="divider" />

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© Copyright 2026 by Teejasoft. All rights reserved.</p>
        <div className="bottom-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;