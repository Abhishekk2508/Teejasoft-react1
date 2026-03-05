import React from "react";
import "../styles/PortfolioSection.css";
import eyeIcon from "../assets/images/eye.png";
import { Link } from "react-router-dom";

import p1 from "../assets/images/ecom.png";
import p2 from "../assets/images/consultancy platform.png";
import p3 from "../assets/images/Industrial Platform.png";
import p4 from "../assets/images/SEO Campaign.png";
import p5 from "../assets/images/Association Platform.png";
import p6 from "../assets/images/Small Business Platform.png";

const projects = [
  {
    title: "E-commerce Platform",
    desc: "Complete e-commerce solution with 200% increase in sales",
    img: p1,
  },
  { title: "Consultancy Platform", img: p2 },
  { title: "Industrial Platform", img: p3 },
  { title: "SEO Campaign", img: p4 },
  { title: "Association Platform", img: p5 },
  { title: "Small Business Platform", img: p6 },
];

const PortfolioSection = ({ showViewAll = true }) => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <span className="portfolio-tag">Our Portfolio</span>
        <h2 className="portfolio-title">Recent Success Stories</h2>
        <p className="portfolio-subtitle">
          Explore our portfolio of successful projects that have driven real business results
        </p>

        <div className="portfolio-grid">
          {projects.map((item, i) => (
            <div className="portfolio-card" key={i}>
              <img src={item.img} alt={item.title} />

              <div className="portfolio-overlay">
                <h3>{item.title}</h3>

                <p>
                  {item.desc ||
                    "Complete e-commerce solution with 200% increase in sales"}
                </p>

                <button className="view-project-btn">
                  <span className="btn-text">View Project</span>
                  <span className="btn-eye">
                    <img src={eyeIcon} alt="view" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Conditionally render View All button */}
        {showViewAll && (
          <Link to="/Portfoliopg">
            <button className="view-all-btn">View All Projects</button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;