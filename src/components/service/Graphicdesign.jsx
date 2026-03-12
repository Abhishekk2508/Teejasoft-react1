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
import emailmImg from "../../assets/images/emailm.png";
import analyticsImg from "../../assets/images/analytics-reporting.png";


const Graphicdesign = () => {
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
              Graphic&nbsp;<span>Design</span>
            </h1>

            <p>
              Create a strong and memorable brand identity with design that communicates professionalism and trust. At Teejaysoft, we design visuals that are not only beautiful but also strategically crafted to strengthen your brand and attract the right audience.            </p>

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
          <h2>Creative Design Solutions</h2>
          <p className="sub-text">
            From brand identity to marketing creatives, we design assets that help your business stand out across digital and print platforms.
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
                <i className="fas fa-palette"></i>
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
              <i className="fas fa-palette"></i>
            </div>

            <h3>Brand Identity Design</h3>
            <p>
              Build a strong visual identity that represents your business clearly and consistently across all platforms.            </p>

            <ul>
              <li><i className="fas fa-check-circle"></i> Logo design</li>
              <li><i className="fas fa-check-circle"></i> Brand color palette</li>
              <li><i className="fas fa-check-circle"></i> Brand guidelines</li>
              <li><i className="fas fa-check-circle"></i> Iconography & visual elements</li>
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
                <i className="fas fa-bullhorn"></i>
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
              <i className="fas fa-bullhorn"></i>
            </div>

            <h3>Marketing & Social Media Creatives</h3>
            <p>
              Design engaging visuals for social media, ads and marketing campaigns that capture attention and drive engagement.            </p>

            <ul>
              <li><i className="fas fa-check-circle"></i> Social media post designs</li>
              <li><i className="fas fa-check-circle"></i> Ad creatives</li>
              <li><i className="fas fa-check-circle"></i> Campaign graphics</li>
              <li><i className="fas fa-check-circle"></i> Story & banner designs</li>
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
                <i className="fas fa-pencil-ruler"></i>              </div>
              <div className="badge-text">
                <span>Service # 3</span>
                <h5>Premium Quality</h5>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="service-content">
            <div className="icon-box">
              <i className="fas fa-pencil-ruler"></i>            </div>

            <h3>Website & UI Design</h3>
            <p>
              Design modern, user-friendly interfaces that improve usability and create a seamless digital experience.            </p>

            <ul>
              <li><i className="fas fa-check-circle"></i> Website layout design</li>
              <li><i className="fas fa-check-circle"></i> UI design systems</li>
              <li><i className="fas fa-check-circle"></i> Mobile-friendly layouts</li>
              <li><i className="fas fa-check-circle"></i> Landing & conversion-focused design</li>
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
                <i className="fas fa-file-alt"></i>              </div>
              <div className="badge-text">
                <span>Service # 4</span>
                <h5>Premium Quality</h5>
              </div>
            </div>
          </div>

          {/* LEFT CONTENT */}
          <div className="service-content">
            <div className="icon-box">
              <i className="fas fa-file-alt"></i>            </div>

            <h3>Marketing Collateral</h3>
            <p>
              Professionally designed materials that help communicate your message clearly across both digital and print channels.            </p>

            <ul>
              <li><i className="fas fa-check-circle"></i> Brochures & flyers</li>
              <li><i className="fas fa-check-circle"></i> Business cards</li>
              <li><i className="fas fa-check-circle"></i> Presentation designs</li>
              <li><i className="fas fa-check-circle"></i> Promotional graphics</li>
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

        {/* 6th SERVICE */}
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
              Make informed decisions with comprehensive analytics and insights. We track, measure, and optimize every aspect of your graphic design projects to ensure maximum performance.
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
          <h2>Graphic Design Services?</h2>
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
              Let's create a graphic design strategy tailored to your unique goals.
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

export default Graphicdesign;
