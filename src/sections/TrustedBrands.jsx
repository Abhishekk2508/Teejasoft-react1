import React, { useEffect, useState } from "react";
import "../styles/TrustedBrands.css";

import T1 from "../assets/images/T1.png";
import T2 from "../assets/images/T2.png";
import T3 from "../assets/images/T3.png";
import T4 from "../assets/images/T4.png";
import T5 from "../assets/images/T5.png";
import T6 from "../assets/images/T6.png";
import T7 from "../assets/images/T7.png";
import T8 from "../assets/images/T2.png";
import T9 from "../assets/images/T4.png";

const initialItems = [
  { id: 1, src: T1, alt: "Brand 1" },
  { id: 2, src: T2, alt: "Brand 2" },
  { id: 3, src: T3, alt: "Brand 3" },
  { id: 4, src: T4, alt: "Brand 4" },
  { id: 5, src: T5, alt: "Brand 5" },
  { id: 6, src: T6, alt: "Brand 6" },
  { id: 7, src: T7, alt: "Brand 7" },
  { id: 8, src: T8, alt: "Brand 8" },
  { id: 9, src: T9, alt: "Brand 9" },
];

const TrustedBrands = () => {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const arr = [...prev];
        const last = arr.pop();
        arr.unshift(last);
        return arr;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="trusted-section">
      <div className="trusted-scale-wrapper">
        {/* Heading */}
        <p className="trusted-tag">Trusted By</p>
        <h2 className="trusted-title">Leading Brands Worldwide</h2>
        <p className="trusted-desc">
          Join hundreds of successful companies that trust us with their digital transformation
        </p>

        {/* Carousel — exactly 7 cards */}
        <div className="carousel-track">
          {items.slice(0, 7).map((item, index) => {
            const isCenter = index === 3; // center card

            return (
              <div
                key={item.id}
                className={`box
                  ${index === 0 || index === 6 ? "tiny" : ""}
                  ${index === 1 || index === 5 ? "small" : ""}
                  ${index === 2 || index === 4 ? "medium" : ""}
                  ${isCenter ? "center" : ""}
                `}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`brand-img ${isCenter ? "active" : ""}`}
                />
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <p className="trusted-footer">
          {/* And <span>100+</span> more amazing clients worldwide */}
        </p>
      </div>
    </section>
  );
};

export default TrustedBrands;
