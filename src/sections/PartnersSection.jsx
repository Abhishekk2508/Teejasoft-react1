import React from "react";
import "../styles/PartnersSection.css";

/* IMPORT IMAGES FROM SRC */
import godaddy from "../assets/images/Godaddy-logo.png";
import shopify from "../assets/images/shopify.png";
import shipium from "../assets/images/shiviom.png";
import meta from "../assets/images/Meta.png";
import wordpress from "../assets/images/wordpress.png";
import googleads from "../assets/images/googleads.png";
import resellerclub from "../assets/images/club.png";
import analytics from "../assets/images/googleanalytics.png";
import wix from "../assets/images/wix2.png";
import who from "../assets/images/who.png";
import { GiPointySword } from "react-icons/gi";

const partners = [
  { name: "GoDaddy", logo: godaddy },
  { name: "Shopify", logo: shopify },
  { name: "Shipium", logo: shipium },
  { name: "Meta", logo: meta },
  { name: "WordPress", logo: wordpress },
  { name: "Google Ads", logo: googleads },
  { name: "ResellerClub", logo: resellerclub },
  { name: "Google Analytics", logo: analytics },
  { name: "Wix Studio", logo: wix },
  { name: "WHO", logo: who }
];

export default function PartnersSection() {
  return (
    <section className="partners-section">
      <div className="partners-container">
        <p className="partners-subtitle">Our Partnerships</p>

        <h2 className="partners-title">
          Trusted Technology Partners
        </h2>

        <p className="partners-desc">
          We collaborate with industry leaders to deliver the best solutions for your business
        </p>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div className="partner-card" key={index}>
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

