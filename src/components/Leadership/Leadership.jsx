import React, { useRef, useEffect } from "react";
import "./Leadership.css";

// Correct image imports
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
  { name: "Yogesh", role: "SEO & Digital Marketing Expert", img: T3, bg: "#DCEFFF" },
  { name: "Pooja", role: "Social Media Manager", img: T4, bg: "#FFE9CC" },
  { name: "Ankit Mandial", role: "UI/UX And Graphic Designer", img: T5, bg: "#FFD6D6" },
  { name: "Abhishek Kumar", role: "Software Engineer", img: T6, bg: "#DCEFFF" },
  { name: "Robin Beni", role: "Digital Marketing Manager", img: T7, bg: "#FFE9CC" },
];

export default function Leadership() {
  const scrollRef = useRef(null);

  // Manual Scroll Function
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 310; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // --- AUTOMATIC SCROLL LOGIC ---
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // Agar end tak pahunch gaye ho toh wapas start pe aa jao
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scroll("right");
        }
      }
    }, 3000); // Har 3 second mein slide hoga

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="leadership-section">
      <div className="leadership-container">
        <span className="leadership-label">Our Team</span>
        <h2 className="leadership-title">Meet Our Visionaries</h2>
        <p className="leadership-subtitle">
          The masterminds driving innovation and excellence
        </p>

        <div className="leadership-row-container">
          <div className="leadership-row" ref={scrollRef}>
            {leaders.map((item, i) => (
              <div className="leader-card" key={i}>
                <div className="leader-image-wrap" style={{ background: item.bg }}>
                  <img src={item.img} alt={item.name} />
                </div>
                <h4 className="leader-name">{item.name}</h4>
                <span className="leader-role">{item.role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="leadership-nav">
          <button className="nav-btn" onClick={() => scroll("left")}>
            <span className="nav-text">Prev</span>
            <div className="nav-arrow left-arrow"></div>
          </button>

         

          <button className="nav-btn" onClick={() => scroll("right")}>
            <span className="nav-text">Next</span>
            <div className="nav-arrow right-arrow"></div>
          </button>
        </div>

        <div className="leadership-cta">
          <h3>Ready to <span>Transform</span> Your Business?</h3>
          <p>Let's work together to bring your vision to life</p>
          <button className="ctaa-btn">Get Started Today</button>
        </div>
      </div>
    </section>
  );
}