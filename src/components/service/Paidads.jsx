import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../navbar";
import Footer from "../footer";
import "./Digitalmarketing.css";
import bannerImg from "../../assets/images/digitalm-banner.jpg";

import seoImg from "../../assets/images/seo.png";
import socialmmImg from "../../assets/images/socialmm.png";
import payperaImg from "../../assets/images/Pay-Pera.png";
import contentmImg from "../../assets/images/contentm.png";
import emailmImg from "../../assets/images/emailm.png";
import analyticsImg from "../../assets/images/analytics-reporting.png";


const Paidads = () => {
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
              Paid Ads <br />
              <span>Solutions</span>
            </h1>

            <p>
              Elevate your brand with data-driven paid advertising strategies that deliver measurable results and maximize your ROI.
            </p>

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
          <h2>Comprehensive Paid Advertising Services</h2>
          <p className="sub-text">
            From Google Ads to Facebook campaigns, we provide end-to-end paid advertising solutions
            that help your business grow and thrive in the digital landscape.
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
                <i className="fas fa-magnifying-glass"></i>
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
              <i className="fas fa-magnifying-glass"></i>
            </div>

            <h3>Search Engine Optimization</h3>
            <p>
              Boost your website's visibility and organic traffic with our comprehensive SEO strategies. We optimize your online presence to rank higher in search results and attract quality leads.
            </p>

            <ul>
              <li><i className="fas fa-check-circle"></i> Keyword Research & Analysis</li>
              <li><i className="fas fa-check-circle"></i> On-Page & Technical SEO</li>
              <li><i className="fas fa-check-circle"></i> Link Building & Outreach</li>
              <li><i className="fas fa-check-circle"></i> Performance Tracking & Reporting</li>
            </ul>

            <button className="learn-btn">Learn More</button>
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
                <i className="fas fa-share-nodes"></i>
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
              <i className="fas fa-share-nodes"></i>
            </div>

            <h3>Social Media Marketing</h3>
            <p>
              Engage your audience and build a strong brand presence across all major social platforms. Our creative campaigns drive engagement, followers, and conversions.
            </p>

            <ul>
              <li><i className="fas fa-check-circle"></i> Multi-Platform Management</li>
              <li><i className="fas fa-check-circle"></i> Content Creation & Curation</li>
              <li><i className="fas fa-check-circle"></i> Community Engagement</li>
              <li><i className="fas fa-check-circle"></i> Influencer Partnerships</li>
            </ul>

            <button className="learn-btn">Learn More</button>
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
                <i className="fa-solid fa-dollar-sign"></i>
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
                <i className="fa-solid fa-dollar-sign"></i>
            </div>

            <h3>Pay-Per-Click Advertising</h3>
            <p>
              Maximize your advertising ROI with targeted PPC campaigns. We create data-driven strategies that convert clicks into customers across Google Ads, Facebook, and more.
            </p>

            <ul>
              <li><i className="fas fa-check-circle"></i> Campaign Strategy & Setup</li>
              <li><i className="fas fa-check-circle"></i> Ad Copy & Creative Design</li>
              <li><i className="fas fa-check-circle"></i> Bid Management & Optimization</li>
              <li><i className="fas fa-check-circle"></i> Conversion Rate Optimization</li>
            </ul>

            <button className="learn-btn">Learn More</button>
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
                <i className="fa-solid fa-newspaper"></i>
              </div>
              <div className="badge-text">
                <span>Service # 4</span>
                <h5>Premium Quality</h5>
              </div>
            </div>
          </div>

          {/* LEFT CONTENT */}
          <div className="service-content">
            <div className="icon-box">
                <i className="fa-solid fa-newspaper"></i>
            </div>

            <h3>Content Marketing</h3>
            <p>
              Tell your brand story with compelling content that resonates with your audience. From blog posts to videos, we create content that educates, entertains, and converts.
            </p>

            <ul>
              <li><i className="fas fa-check-circle"></i> Content Strategy Development</li>
              <li><i className="fas fa-check-circle"></i> Blog Writing & SEO Articles</li>
              <li><i className="fas fa-check-circle"></i> Video Production & Marketing</li>
              <li><i className="fas fa-check-circle"></i> Infographics & Visual Content</li>
            </ul>

            <button className="learn-btn">Learn More</button>
          </div>

        </div>

        {/* 5th SERVICE */}
        <div className="service-row service-one">

          {/* LEFT IMAGE */}
          <div className="service-image">
            <div className="image-card"></div>

            <img
              src={emailmImg}
              alt="Email Marketing"
            />

            {/* Bottom Left Overlay Card */}
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

          {/* RIGHT CONTENT */}
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
        </div>

        {/* 6th SERVICE */}
        <div className="service-row service-two reverse">

          {/* RIGHT IMAGE */}
          <div className="service-image">
            <div className="image-card right-tilt"></div>

            <img
              src={analyticsImg}
              alt="Analytics"
            />

            {/* Bottom Right Overlay Badge */}
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

          {/* LEFT CONTENT */}
          <div className="service-content">
            <div className="icon-box">
                <i className="fa-solid fa-chart-column"></i> 
            </div>

            <h3>Analytics & Reporting</h3>
            <p>
              Make informed decisions with comprehensive analytics and insights. We track, measure, and optimize every aspect of your paid advertising to ensure maximum performance.
            </p>

            <ul>
              <li><i className="fas fa-check-circle"></i> Google Analytics Setup & Tracking</li>
              <li><i className="fas fa-check-circle"></i> Custom Dashboard Creation</li>
              <li><i className="fas fa-check-circle"></i> Monthly Performance Reports</li>
              <li><i className="fas fa-check-circle"></i> Competitor Analysis & Benchmarking</li>
            </ul>

            <button className="learn-btn">Learn More</button>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="why-section">

        <div className="why-header">
          <p className="mini-title">Why Choose Our</p>
          <h2>Paid Advertising Services?</h2>
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
              Let's create a paid advertising strategy tailored to your unique goals.
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

export default Paidads;
