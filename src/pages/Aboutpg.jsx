import React, { useEffect } from "react"; import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../sections/AboutSection";
import "../styles/Aboutpg.css";
import whoImg from "../assets/images/whower.png";
import Leadership from "../components/Leadership/Leadership";


const Aboutpg = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* ===== HERO BANNER ===== */}
      <section className="aboutpg-hero">
        <div className="aboutpg-content">

          <div className="aboutpg-badge">
            Get to Know Us
          </div>

          <h1 className="aboutpg-title">
            About <span>Us</span>
          </h1>

          <p className="aboutpg-subtitle">
            Transforming Ideas into Digital Reality.
          </p>

        </div>
      </section>

      {/* ===== WHO WE ARE SECTION ===== */}
      <section className="who-we-are">
        <div className="who-container">

          {/* LEFT CONTENT */}
          <div className="who-content">
            <span className="who-label">Who We Are</span>

            <h2 className="who-title">
              Innovators in <br />
              <span>Digital Transformation</span>
            </h2>

            <p>
              At Teejaysoft, we transform ideas into impactful digital experiences that drive real growth.
              With years of
              industry expertise, we turn complex challenges into smart, scalable and high-performing solutions.
            </p>

            <p>
              Our team of passionate developers, creative designers, and digital strategists work collaboratively to
              deliver solutions that not only meet expectations but consistently exceed them. By blending technology,
              creativity and strategy, we help businesses grow, adapt and lead in competitive markets.
            </p>

            <div className="who-features">
              <div className="who-feature">
                <div className="who-icon">
                  <i className="fa-solid fa-rocket"></i>
                </div>
                <div>
                  <h4>Innovation First</h4>
                  <span>Cutting-edge solutions</span>
                </div>
              </div>

              <div className="who-feature">
                <div className="who-icon">
                  <i className="fa-solid fa-user-tie"></i>
                </div>
                <div>
                  <h4>Client Focused</h4>
                  <span>Your success is ours</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="who-image">
            <img src={whoImg} alt="Team discussion" />

            <div className="who-badge">
              <strong>98%</strong>
              <span>Client Satisfaction </span>
            </div>
          </div>

        </div>
      </section>


      <section className="foundation-section">
        <div className="foundation-container">

          {/* TOP TEXT */}
          <span className="foundation-label">Our Foundation</span>

          <h2 className="foundation-title">
            Vision. Mission. Values.
          </h2>

          <p className="foundation-subtitle">
            The three pillars that guide our journey towards excellence
          </p>

          {/* CARDS */}
          <div className="foundation-cards">

            {/* VISION */}
            <div className="foundation-card">
              <div className="foundation-icon">
                <i className="fa-solid fa-eye"></i>
              </div>

              <h4>Vision</h4>

              <p>
                To become a driving force in digital transformation by delivering innovative, scalable and
                future-ready technology solutions. We aim to help businesses adapt to change,
                embrace innovation and achieve sustainable growth in an increasingly competitive digital landscape.
              </p>
              <p>
                We envision a future where technology empowers organizations to unlock new opportunities,
                improve efficiency and create meaningful digital experiences.
              </p>
            </div>

            {/* MISSION */}
            <div className="foundation-card">
              <div className="foundation-icon">
                <i className="fa-solid fa-bullseye"></i>
              </div>

              <h4>Mission</h4>

              <p>
                Our mission is to provide high-quality digital solutions that combine creativity,
                technical expertise and strategic insight. We focus on delivering measurable results that
                enhance performance, strengthen brand presence and accelerate business growth.
              </p>
              <p>
                Through dedication, collaboration and continuous improvement,
                we strive to exceed expectations and build lasting digital success.
              </p>
            </div>

            {/* VALUES */}
            <div className="foundation-card">
              <div className="foundation-icon">
                <i className="fa-solid fa-heart"></i>
              </div>

              <h4>Values</h4>

              <p>
                We are guided by integrity, innovation and accountability in everything we do.
                Our work is built on trust, transparency and a
                commitment to delivering excellence at every stage of the process.
              </p>

              <p>
                By fostering teamwork, embracing new ideas and prioritizing client success,
                we create impactful solutions that drive long-term value.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/*  LEADERSHIP SECTION */}
      <Leadership />

      {/* ===== ABOUT CONTENT ===== */}
      {/* <AboutSection /> */}

      <Footer />
    </>
  );
};

export default Aboutpg;
