import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import AboutSection from "../sections/AboutSection";
import SuccessNumbers from "../sections/SuccessNumbers";
import PartnersSection from "../sections/PartnersSection";
import Services from "../sections/Services";
import Expertise from "../sections/Expertise";
import TrustedBrands from "../sections/TrustedBrands";
import Testimonials from "../sections/Testimonials";
import PortfolioSection from "../sections/PortfolioSection";
import BlogsSection from "../sections/BlogsSection";
import FaqSection from "../sections/FaqSection";

const Home = () => {
  return (
    <>
      <Navbar />   {/*  hh */}

      <Hero />
      <AboutSection />
      <SuccessNumbers />
      <PartnersSection />
      <Services />
      <Expertise />
      <TrustedBrands />
      <Testimonials />
      <PortfolioSection />
      <BlogsSection />
      <FaqSection />

      <Footer />   {/*  YE */}
    </>
  );
};

export default Home;
