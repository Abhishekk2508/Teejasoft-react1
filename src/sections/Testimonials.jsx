import React, { useEffect, useRef } from "react";
import "../styles/Testimonials.css";

const testimonials = Array(6).fill({
  text: "Outstanding service! They transformed our digital presence and doubled our online leads within 3 months. Highly professional team.",
  name: "Johnson",
  role: "CEO, TechStart Inc.",
});

const Testimonials = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 640 && gridRef.current) {
      gridRef.current.scrollLeft = 0;
    }
  }, []);

  const scrollSlide = (dir) => {
    if (!gridRef.current) return;
    const card = gridRef.current.querySelector(".test-card");
    if (!card) return;

    const cardWidth = card.offsetWidth + 16; // include gap
    gridRef.current.scrollBy({
      left: dir * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="test-section">
      <div className="test-container">

        <span className="test-tag">Testimonials</span>
        <h2 className="test-title">What Our Clients Say</h2>
        <p className="test-subtitle">
          Don't just take our word for it - hear from our satisfied clients
        </p>

        {/* MOBILE NAV */}
        <div className="test-nav">
          <button onClick={() => scrollSlide(-1)}>‹</button>
          <button onClick={() => scrollSlide(1)}>›</button>
        </div>

        {/* GRID / CAROUSEL */}
        <div className="test-grid" ref={gridRef}>
          {testimonials.map((item, i) => (
            <div className="test-card" key={i}>

              <div className="test-top">
                <div className="test-stars">★★★★★</div>
                <div className="test-quote">”</div>
              </div>

              <p className="test-text">{item.text}</p>

              <div className="test-divider"></div>

              <div className="test-footer">
                <div className="test-avatar">
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 12}`}
                    alt="avatar"
                  />
                </div>
                <div>
                  <p className="test-name">{item.name}</p>
                  <p className="test-role">{item.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
