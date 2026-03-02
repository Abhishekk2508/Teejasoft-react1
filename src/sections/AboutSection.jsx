import React from "react";
import "../styles/AboutSection.css";
import aboutImg from "../assets/images/About.png";
import rewardIcon from "../assets/images/reward.png"; // Add your reward icon here

const AboutSection = () => {
  return (
    <section className="about-wrapper">
      <div className="about-scale">
        <div className="about-container-1920">

          {/* IMAGE BLOCK */}
          <div className="about-image-wrap">
            <img src={aboutImg} alt="About" />

            {/* TOP RIGHT SHAPE with Icon */}
            <div className="corner-shape">
              <img src={rewardIcon} alt="Reward" className="corner-icon" />
            </div>

            {/* BOTTOM LEFT EXPERIENCE BOX */}
            <div className="experience-box">
              <h3>09+</h3>
              <p>Years</p>
            </div>
          </div>

          {/* CONTENT BLOCK */}
          <div className="about-content-wrap">
            <span className="about-label">About Us</span>
            <h2>We Are Your Digital Success Partners</h2>
            <p>
              Teejaysoft delivers end-to-end IT and digital marketing solutions designed for performance and scalability. 
              By combining technical expertise with advanced marketing strategies, we help businesses improve search visibility,
              optimize user experience and accelerate revenue growth in a rapidly evolving digital landscape.
            </p>
            <p>
              From cutting-edge web development to result-driven digital marketing campaigns, we provide comprehensive IT services tailored to your unique business needs.
              Our mission is to empower your brand with technology and creativity.
            </p>
            <button className="about-btn">Read More</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
