import React, { useState } from "react";
import "../styles/FaqSection.css";

const faqData = [
  {
    q: "What services do you offer?",
    a: "We provide web development, UI/UX design, SEO, branding, and digital marketing solutions tailored to your business."
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary, but most websites take between 2–6 weeks depending on complexity."
  },
  {
    q: "What is your pricing structure?",
    a: "Our pricing is flexible and based on project scope, features, and business requirements."
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes, we offer maintenance and support packages to ensure your website runs smoothly."
  },
  {
    q: "Can you help with SEO and digital marketing?",
    a: "Absolutely. We provide complete SEO, social media marketing, and paid ad strategies."
  },
  {
    q: "Do you work with businesses of all sizes?",
    a: "Yes, from startups to enterprises — we tailor solutions for every scale."
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
