import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";
import "./Digitalmarketing.css";
import bannerImg from "../../assets/images/digitalm-banner.jpg";

import seoImg from "../../assets/images/seo.png";
import socialmmImg from "../../assets/images/socialmm.png";
import payperaImg from "../../assets/images/Pay-Pera.png";
import contentmImg from "../../assets/images/contentm.png";
import emailmImg from "../../assets/images/emailm.png";
import analyticsImg from "../../assets/images/analytics-reporting.png";


const Digitalmarketing = () => {

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
              Digital&nbsp;<span>Marketing</span>
            </h1>

            <p>
              Build consistent visibility and long-term growth with strategic digital marketing tailored to your business goals. At Teejaysoft, we combine creativity, data and performance-driven strategies to help your brand reach the right audience, generate qualified leads and turn traffic into real business results.            </p>

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
          <h2>Comprehensive Digital Marketing Services</h2>
          <p className="sub-text">
            From strategy and content to optimization and analytics, we manage every part of your digital marketing journey. Our goal is to build strong online visibility, increase engagement and help your business grow sustainably.
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
                <i className="fas fa-search"></i>
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
              <i className="fas fa-search"></i>
            </div>

            <h3>Search Engine Optimization (SEO)</h3>
            <p>
              Improve your search visibility and attract the right audience with SEO strategies designed for long-term growth and consistent traffic.            </p>

            <ul>
              <li><i className="fas fa-check-circle"></i> Keyword research & strategy</li>
              <li><i className="fas fa-check-circle"></i> On-page SEO </li>
              <li><i className="fas fa-check-circle"></i> Technical SEO improvements</li>
              <li><i className="fas fa-check-circle"></i> Content optimization</li>
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
                <i className="fab fa-facebook-f"></i>
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
              <i className="fab fa-facebook-f"></i>


            </div>

            <h3>Social Media Marketing</h3>
            <p>
              Build a strong brand presence across social platforms with engaging content and targeted strategies that connect with your audience.            </p>

            <ul>
              <li><i className="fas fa-check-circle"></i> Content planning & posting</li>
              <li><i className="fas fa-check-circle"></i> Social media campaigns</li>
              <li><i className="fas fa-check-circle"></i> Audience engagement</li>
              <li><i className="fas fa-check-circle"></i> Performance tracking</li>
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
                <i className="fas fa-chart-pie"></i>
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
              <i className="fas fa-chart-pie"></i>
            </div>

            <h3>Analytics & Optimization</h3>
            <p>
              Measure performance and continuously improve results using real data and insights to refine strategies and maximize ROI.            </p>

            <ul>
              <li><i className="fas fa-check-circle"></i> Campaign performance tracking</li>
              <li><i className="fas fa-check-circle"></i> Conversion optimization</li>
              <li><i className="fas fa-check-circle"></i> Marketing analytics setup</li>
              <li><i className="fas fa-check-circle"></i> Data-driven strategy improvements</li>
            </ul>

            {/* <button className="learn-btn">Learn More</button> */}
          </div>
        </div>

        {/* 4th SERVICE */}
        {/* <div className="service-row service-two reverse">

        
          <div className="service-image">
            <div className="image-card right-tilt"></div>

            <img
              src={contentmImg}
              alt="Content Marketing"
            />

        
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

        </div> */}

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
              Make informed decisions with comprehensive analytics and insights. We track, measure, and optimize every aspect of your digital marketing to ensure maximum performance.
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
          <h2>Digital Marketing Services?</h2>
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
              Let's create a digital marketing strategy tailored to your unique goals.
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

export default Digitalmarketing;
