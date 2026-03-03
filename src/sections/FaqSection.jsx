import React, { useState } from "react";
import "../styles/FaqSection.css";

const faqData = [
  {
    q: "What services do you offer?",
    a: "Teejaysoft provides end-to-end digital solutions including website development, UI/UX design, logo and creative design, digital marketing, paid advertising and domain & hosting services tailored to business needs."
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines depend on scope and complexity. A standard website typically takes 2–4 weeks, while larger or custom projects may require additional time. We provide a clear timeline before starting."
  },
  {
    q: "What is your pricing structure?",
    a: "Our pricing is based on project requirements, features and deliverables. We offer flexible packages to suit startups, growing businesses and enterprises."
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes, we offer ongoing website maintenance, performance monitoring, updates and technical support to ensure your digital presence runs smoothly."
  },
  {
    q: "Can you help with SEO and digital marketing?",
    a: "Absolutely. We provide SEO, social media marketing, paid advertising and content strategies designed to increase visibility, traffic, and conversions."
  },
  {
    q: "Do you work with businesses of all sizes?",
    a: "Yes, we work with startups, small businessess and established enterprises across various industries, delivering customized digital solutions."
  }
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq-section">
      <p className="faq-subtitle">FAQs</p>
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-desc">
        Find answers to common questions about our services and process
      </p>

      <div className="faq-container">
        {faqData.map((item, i) => (
          <div
            key={i}
            className={`faq-item ${active === i ? "active" : ""}`}
            onClick={() => toggle(i)}
          >
            <div className="faq-question">
              {item.q}
              <span className="arrow"></span>
            </div>
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
