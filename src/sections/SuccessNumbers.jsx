import React, { useEffect, useState } from "react";
import "../styles/SuccessNumbers.css";
import { useInView } from "react-intersection-observer";
import { FaShieldAlt, FaCheckCircle, FaChartBar, FaSearch, FaUserFriends } from "react-icons/fa";

const stats = [
  { icon: <FaShieldAlt />, number: 100, suffix: "%", label: "Results Guaranteed" },
  { icon: <FaCheckCircle />, number: 9, suffix: "+", label: "Years Experience" },
  { icon: <FaChartBar />, number: 15, suffix: "K+", label: "Keywords Ranked" },
  { icon: <FaSearch />, number: 100, suffix: "+", label: "Projects Completed" },
  { icon: <FaUserFriends />, number: 2, suffix: "K+", label: "Leads Generated" },
];

function Counter({ end, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startVal = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      startVal += increment;
      if (startVal >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.floor(startVal));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [start, end]);

  return <span>{count}{suffix}</span>;
}

export default function SuccessNumbers() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="success-wrapper" ref={ref}>
      <div className="success-container">
        <p className="success-top fade-up">Figures / Results</p>
        <h2 className="success-heading fade-up delay-1">Our Success in Numbers</h2>
        <p className="success-subtext fade-up delay-2">
          Delivering exceptional results and exceeding expectations for our clients 
        </p>

        <div className="stats-grid">
          {stats.map((item, i) => (
            <div className={`stat-box fade-up delay-${i + 2}`} key={i}>
              <div className="icon-circle">{item.icon}</div>
              <div className="stat-number">
                <Counter end={item.number} suffix={item.suffix} start={inView} />
              </div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
