import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";
import Footer from "../Footer";

import "./Digitalmarketing.css";
import bannerImg from "../../assets/images/digitalm-banner.jpg";
import { useEffect } from "react";

import seoImg from "../../assets/images/seo.png";
import socialmmImg from "../../assets/images/socialmm.png";
import payperaImg from "../../assets/images/Pay-Pera.png";
import contentmImg from "../../assets/images/contentm.png";
// import emailmImg from "../../assets/images/emailm.png";
// import analyticsImg from "../../assets/images/analytics-reporting.png";


const Webdevelopment = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section
        className="digital-hero"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="digital-overlay">
          <div className="digital-content">

            {/* Updated Breadcrumb */}
            <div className="breadcrumbbb-pill">
              <Link to="/" className="breadcrumbbb-link">
                Home
              </Link>
              <span className="breadcrumbbb-separator">&gt;</span>
              <span className="breadcrumbbb-current">Our Services</span>
            </div>

            <h1>
              Web&nbsp;<span>Development</span>
            </h1>

            <p>
              Build a strong online presence with custom web development designed around your goals. At Teejaysoft, we create fast, responsive and scalable websites that look premium, load quickly and guide visitors to take action—so you get more leads, more sales and better brand trust.            </p>

            <button className="hero-btn">
              <span className="hero-btn-text">Get Started Today</span>
              <span className="hero-btn-arrow">→</span>
            </button>

          </div>
        </div>
      </section>
      <section className="servicesoffer-section">
        <div className="services-header">
          <p className="mini-title">What We Offer</p>
          <h2>Comprehensive Web Development Services</h2>
          <p className="sub-text">
            We offer end-to-end web development services—from strategy and UI/UX to development, testing and launch. Whether you need a business website, ecommerce store or a custom web app, we build fast, responsive and scalable solutions that are designed to perform and grow with your business.
          </p>
        </div>
      </section>

      <section className="services-section">

        {/* 1st SERVICE */}
        <div className="service-row service-one">

          {/* LEFT IMAGE */}
          <div className="service-image">
            <div className="image-card"></div>

            <img
              src={seoImg}
              alt="Search Engine Optimization"
            />

            {/* Bottom Left Overlay Card */}
            <div className="image-badge">
              <div className="badge-icon">
                {/* <i className="fas fa-magnifying-glass"></i> */}
                <i className="fas fa-pencil-ruler"></i>
              </div>
              <div className="badge-text">
                <span>Service # 1</span>
                <h5>Premium Quality</h5>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="service-content">
            <div className="icon-box">
              <i className="fas fa-pencil-ruler"></i>

            </div>

            <h3>UI/UX & Responsive Design</h3>
            <p>
              Create a clean, modern experience that looks perfect on every device. We design user-friendly interfaces that guide visitors smoothly and improve engagement.            </p>

            <ul>
              <li><i className="fas fa-check-circle"></i> Mobile-first layouts</li>
              <li><i className="fas fa-check-circle"></i> Wireframes & prototyping</li>
              <li><i className="fas fa-check-circle"></i> Conversion-focused UI</li>
              <li><i className="fas fa-check-circle"></i> Consistent brand design</li>
            </ul>

            {/* <button className="learn-btn">Learn More</button> */}
          </div>
        </div>

        {/* 2nd SERVICE */}
        <div className="service-row service-two reverse">

          {/* RIGHT IMAGE */}
          <div className="service-image">
            <div className="image-card right-tilt"></div>

            <img
              src={socialmmImg}
              alt="Social Media Marketing"
            />

            {/* Bottom Right Overlay Badge */}
            <div className="image-badge badge-right">
              <div className="badge-icon">
                <i className="fas fa-layer-group"></i>

              </div>
              <div className="badge-text">
                <span>Service # 2</span>
                <h5>Premium Quality</h5>
              </div>
            </div>
          </div>

          {/* LEFT CONTENT */}
          <div className="service-content">
            <div className="icon-box">
              <i className="fas fa-layer-group"></i>
            </div>

            <h3>Custom Website Development</h3>
            <p>
              Get a website built specifically for your business goals—fast, scalable and easy to manage. From simple pages to complex features, we develop it the right way.            </p>

            <ul>
              <li><i className="fas fa-check-circle"></i> Custom functionality</li>
              <li><i className="fas fa-check-circle"></i> Fast loading pages</li>
              <li><i className="fas fa-check-circle"></i> Secure development</li>
              <li><i className="fas fa-check-circle"></i> Scalable architecture</li>
            </ul>

            {/* <button className="learn-btn">Learn More</button> */}
          </div>

        </div>

        {/* 3rd SERVICE */}
        <div className="service-row service-one">

          {/* LEFT IMAGE */}
          <div className="service-image">
            <div className="image-card"></div>

            <img
              src={payperaImg}
              alt="Pay Per Click Advertising"
            />

            {/* Bottom Left Overlay Card */}
            <div className="image-badge">
              <div className="badge-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <div className="badge-text">
                <span>Service # 3</span>
                <h5>Premium Quality</h5>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="service-content">
            <div className="icon-box">
              <i className="fas fa-shopping-cart"></i>
            </div>

            <h3>Ecommerce Development</h3>
            <p>
              Launch an online store that’s simple to browse, smooth to checkout and built to convert. We focus on performance, trust and a seamless shopping experience.            </p>

            <ul>
              <li><i className="fas fa-check-circle"></i> Product & category setup</li>
              <li><i className="fas fa-check-circle"></i> Payment gateway integration</li>
              <li><i className="fas fa-check-circle"></i> Cart & checkout optimization</li>
              <li><i className="fas fa-check-circle"></i> Order & inventory support</li>
            </ul>

            {/* <button className="learn-btn">Learn More</button> */}
          </div>
        </div>

        {/* 4th SERVICE */}
        <div className="service-row service-two reverse">

          {/* RIGHT IMAGE */}
          <div className="service-image">
            <div className="image-card right-tilt"></div>

            <img
              src={contentmImg}
              alt="Content Marketing"
            />

            {/* Bottom Right Overlay Badge */}
            <div className="image-badge badge-right">
              <div className="badge-icon">
                <i className="fas fa-tools"></i>              </div>
              <div className="badge-text">
                <span>Service # 4</span>
                <h5>Premium Quality</h5>
              </div>
            </div>
          </div>

          {/* LEFT CONTENT */}
          <div className="service-content">
            <div className="icon-box">
              <i className="fas fa-tools"></i>            </div>

            <h3>Website Maintenance & Support</h3>
            <p>
              Keep your website secure, updated and running smoothly. We handle performance checks, bug fixes, backups and updates—so you can focus on business.            </p>

            <ul>
              <li><i className="fas fa-check-circle"></i> Security updates & backups</li>
              <li><i className="fas fa-check-circle"></i> Speed optimization</li>
              <li><i className="fas fa-check-circle"></i> Bug fixes & monitoring</li>
              <li><i className="fas fa-check-circle"></i> Content updates support</li>
            </ul>

            {/* <button className="learn-btn">Learn More</button> */}
          </div>

        </div>

        {/* 5th SERVICE */}
        {/* <div className="service-row service-one">

          <div className="service-image">
            <div className="image-card"></div>

            <img
              src={emailmImg}
              alt="Email Marketing"
            />

            <div className="image-badge">
              <div className="badge-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="badge-text">
                <span>Service # 5</span>
                <h5>Premium Quality</h5>
              </div>
            </div>
          </div>

       
          <div className="service-content">
            <div className="icon-box">
                <i className="fa-solid fa-envelope"></i>
            </div>

            <h3>Email Marketing</h3>
            <p>
              Build lasting relationships with personalized email campaigns that drive engagement and sales. Our automated workflows nurture leads and convert them into loyal customers.
            </p>

            <ul>
              <li><i className="fas fa-check-circle"></i> Email List Building & Segmentation</li>
              <li><i className="fas fa-check-circle"></i> Automation & Drip Campaigns</li>
              <li><i className="fas fa-check-circle"></i> A/B Testing & Optimization</li>
              <li><i className="fas fa-check-circle"></i> Newsletter Design & Copywriting</li>
            </ul>

            <button className="learn-btn">Learn More</button>
          </div>
        </div> */}


        {/* <div className="service-row service-two reverse">

       
          <div className="service-image">
            <div className="image-card right-tilt"></div>

            <img
              src={analyticsImg}
              alt="Analytics"
            />

            <div className="image-badge badge-right">
              <div className="badge-icon">
                <i className="fa-solid fa-chart-column"></i> 
              </div>
              <div className="badge-text">
                <span>Service # 6</span>
                <h5>Premium Quality</h5>
              </div>
            </div>
          </div>

          <div className="service-content">
            <div className="icon-box">
                <i className="fa-solid fa-chart-column"></i> 
            </div>

            <h3>Analytics & Reporting</h3>
            <p>
              Make informed decisions with comprehensive analytics and insights. We track, measure, and optimize every aspect of your web development to ensure maximum performance.
            </p>

            <ul>
              <li><i className="fas fa-check-circle"></i> Google Analytics Setup & Tracking</li>
              <li><i className="fas fa-check-circle"></i> Custom Dashboard Creation</li>
              <li><i className="fas fa-check-circle"></i> Monthly Performance Reports</li>
              <li><i className="fas fa-check-circle"></i> Competitor Analysis & Benchmarking</li>
            </ul>

            <button className="learn-btn">Learn More</button>
          </div>

        </div> */}
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="why-section">

        <div className="why-header">
          <p className="mini-title">Why Choose Our</p>
          <h2>Web Development Services?</h2>
          <p className="subb-text">
            We deliver results that matter to your business
          </p>
        </div>

        <div className="why-cards">

          <div className="why-card">
            <span className="card-number">01</span>
            <h4>Data-Driven Approach</h4>
            <p>
              Every decision backed by analytics and real-time performance data.
            </p>
          </div>

          <div className="why-card">
            <span className="card-number">02</span>
            <h4>Expert Team</h4>
            <p>
              Certified specialists with years of industry experience.
            </p>
          </div>

          <div className="why-card">
            <span className="card-number">03</span>
            <h4>Transparent Reporting</h4>
            <p>
              Clear, detailed reports showing exactly where your investment goes.
            </p>
          </div>

        </div>

      </section>

      <section className="cta-section-full">
        <div className="cta-container-full">

          <div className="cta-content-left">
            <h2 className="cta-heading">
              Ready to Grow Your Business?
            </h2>

            <p className="cta-text">
              Let's create a web development strategy tailored to your unique goals.
              Get a free consultation today!
            </p>
          </div>

          <div className="cta-content-right">
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

export default Webdevelopment;
