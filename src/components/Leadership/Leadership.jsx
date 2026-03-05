import React, { useRef, useEffect } from "react";
import "./Leadership.css";

import T1 from "../../assets/images/CEO.png";
import T2 from "../../assets/images/ravinder.png";
import T3 from "../../assets/images/yogesh.png";
import T4 from "../../assets/images/pooja.png";
import T5 from "../../assets/images/ankit.png";
import T6 from "../../assets/images/abhishek.png";
import T7 from "../../assets/images/seomanager.png";

const leaders = [
  { name: "Inderpreet Singh", role: "CEO & Founder", img: T1, bg: "#FFE0C2" },
  { name: "Ravinder Sharma", role: "Full-Stack Developer", img: T2, bg: "#FFD6D6" },
  { name: "Yogesh", role: "SEO Expert", img: T3, bg: "#DCEFFF" },
  { name: "Pooja", role: "Social Media Manager", img: T4, bg: "#FFE9CC" },
  { name: "Ankit Mandial", role: "UI/UX Designer", img: T5, bg: "#FFD6D6" },
  { name: "Abhishek Kumar", role: "Software Engineer", img: T6, bg: "#DCEFFF" },
  { name: "Robin Beni", role: "Digital Marketing Manager", img: T7, bg: "#FFE9CC" },
];

export default function Leadership() {

  const scrollRef = useRef(null);

  const getCardWidth = () => {
    const card = scrollRef.current.querySelector(".leader-card");
    return card.offsetWidth + 30;
  };

  const scroll = (dir) => {

    const container = scrollRef.current;
    const cardWidth = getCardWidth();

    container.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });

  };

  // Infinite loop
  const handleScroll = () => {

    const container = scrollRef.current;
    const cardWidth = getCardWidth();
    const totalWidth = cardWidth * leaders.length;

    if (container.scrollLeft >= totalWidth) {
      container.scrollLeft = 0;
    }

  };

  // Auto scroll
  useEffect(() => {

    const interval = setInterval(() => {

      scroll("right");

    }, 2500);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="leadership-section">

      <div className="leadership-container">

        <span className="leadership-label">Our Team</span>

        <h2 className="leadership-title">
          Meet Our Visionaries
        </h2>

        <p className="leadership-subtitle">
          The masterminds driving innovation and excellence
        </p>

        <div className="leadership-row-container">

          <div
            className="leadership-row"
            ref={scrollRef}
            onScroll={handleScroll}
          >

            {[...leaders, ...leaders].map((item, i) => (

              <div className="leader-card" key={i}>

                <div
                  className="leader-image-wrap"
                  style={{ background: item.bg }}
                >
                  <img src={item.img} alt={item.name} />
                </div>

                <h4 className="leader-name">
                  {item.name}
                </h4>

                <span className="leader-role">
                  {item.role}
                </span>

              </div>

            ))}

          </div>

        </div>

        <div className="leadership-nav">

          <button
            className="nav-btn"
            onClick={() => scroll("left")}
          >
            Prev
          </button>

          <button
            className="nav-btn"
            onClick={() => scroll("right")}
          >
            Next
          </button>

        </div>

      </div>

    </section>

  );

}