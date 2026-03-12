import React from "react";
import "../styles/ProjectMockups.css";
import eyeIcon from "../assets/images/eye.png";

import mock1 from "../assets/mockups/aboutpg.pdf";
import mock2 from "../assets/mockups/blogpg.pdf";
import mock3 from "../assets/mockups/contactuspg.pdf";
import mock4 from "../assets/mockups/contactuspg.pdf";

const EcommerceProject = () => {

  const mockups = [
    { title: "About Page", file: mock1 },
    { title: "Blog Page", file: mock2 },
    { title: "Contact Page", file: mock3 },
    { title: "Landing Page", file: mock4 },
  ];

  return (
    <section className="project-page">

      <div className="project-container">

        <div className="project-hero">

          <h1>E-commerce Platform</h1>

          <p>
            Explore the modern UI mockups designed for this ecommerce platform.
            Each screen demonstrates usability, responsiveness and clean design.
          </p>

        </div>

        <div className="mockup-grid">

          {mockups.map((item, i) => (
            <div className="mockup-card" key={i}>

              <div className="mockup-card-inner">

                <h3>{item.title}</h3>

                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn"
                >

                  <span>View Mockup</span>

                  <img src={eyeIcon} alt="view"/>

                </a>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default EcommerceProject;