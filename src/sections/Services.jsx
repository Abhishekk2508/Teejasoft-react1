import React, { useState, useRef, useEffect } from "react";
import { FaChartLine, FaPaintBrush, FaBullhorn, FaGlobe,FaLaptopCode } from "react-icons/fa";
import "../styles/services.css";

const services = [
  {
     icon: FaLaptopCode,
    title: "Website Development",
    desc: "Build fast, secure, and scalable websites tailored to your business goals.",
    points: ["Custom Website Development", "E-commerce Website Development", "WordPress Development", "Website Maintenance & Support"]
  },
   {
    icon: FaChartLine,
    title: "Digital Marketing",
    desc: "Boost your online presence with data-driven marketing strategies that deliver measurable results.",
    points: ["SEO", "Social Media Marketing", "Content Strategy", "Email Marketing"]
  },
  {
    icon: FaPaintBrush,
    title: "Design Services",
    desc: "Create visually compelling designs that strengthen your brand and enhance user experience.",
    points: ["UI/UX Design", "Logo Design", "Banner & Creative Design", "Website Mockup Design"]
  },
  {
    icon: FaBullhorn,
    title: "Paid Advertising",
    desc: "Maximize ROI with targeted paid campaigns across major digital platforms.",
    points: ["Google Ads", "Facebook & Instagram Ads", "YouTube & LinkedIn Ads", "Remarketing Campaigns"]
  },
  {
    icon: FaGlobe,
    title: "Domain & Hosting",
    desc: "Secure your online presence with reliable and high-performance hosting solutions.",
    points: ["Domain Registration", "Web Hosting", "SSL Certificates", "Server Management"]
  }
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const gridRef = useRef(null);

  const cardsToShow = 4;
  const totalCards = services.length;

  // Clone first few cards for infinite effect
  const extendedServices = [...services, ...services.slice(0, cardsToShow)];

  const handleNext = () => {
    setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => prev - 1);
  };

  useEffect(() => {
    const cardWidth = gridRef.current.children[0].offsetWidth + 16; // include gap
    gridRef.current.style.transition = "transform 0.5s ease";
    gridRef.current.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    // Infinite loop handling
    if (currentIndex >= totalCards) {
      setTimeout(() => {
        gridRef.current.style.transition = "none"; // disable transition for jump
        setCurrentIndex(0);
        gridRef.current.style.transform = `translateX(0px)`;
      }, 500);
    } else if (currentIndex < 0) {
      setTimeout(() => {
        gridRef.current.style.transition = "none";
        setCurrentIndex(totalCards - 1);
        const jumpX = (totalCards - 1) * cardWidth;
        gridRef.current.style.transform = `translateX(-${jumpX}px)`;
      }, 500);
    }
  }, [currentIndex, totalCards]);

  return (
    <section className="services">
      <div className="services-container">
        <p className="ta">Our Services</p>
        <h2 className="title">Comprehensive IT Solutions</h2>
        <p className="subtitle">
          From strategy to execution, we provide end-to-end digital services to grow your business
        </p>

        <div className="grid-wrapper">
          <div className="grid" ref={gridRef}>
            {extendedServices.map((item, i) => {
              const Icon = item.icon;
              return (
                <div className="card" key={i}>
                  <div className="icons-box">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p className="desc">{item.desc}</p>
                  <ul>
                    {item.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="slider-buttons">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </section>
  );
}