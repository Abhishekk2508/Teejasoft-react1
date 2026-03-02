import React from "react";
import "../styles/BlogsSection.css";

import img1 from "../assets/images/blog1.png";
import img2 from "../assets/images/blog2.png";
import img3 from "../assets/images/blog3.png";

const articles = [
  {
    id: 1,
    tag: "Digital Marketing",
    title: "10 Digital Marketing Trends for 2026",
    desc: "Stay ahead of the curve with the latest digital marketing strategies that are transforming businesses.",
    time: "5 min read",
    image: img1,
  },
  {
    id: 2,
    tag: "SEO",
    title: "The Complete Guide to SEO in 2026",
    desc: "Master the art of search engine optimization with our comprehensive guide covering everything.",
    time: "8 min read",
    image: img2,
  },
  {
    id: 3,
    tag: "Design",
    title: "How AI is Revolutionizing Web Design",
    desc: "Explore how artificial intelligence is changing the landscape of web design and user experience.",
    time: "6 min read",
    image: img3,
  },
];

const BlogsSection = () => {
  return (
    <section className="blog-section">
      <p className="blog-subtitle">Our Blogs</p>
      <h2 className="blog-title">Latest Blogs & Articles</h2>
      <p className="blog-desc">
        Stay updated with the latest trends, tips, and industry insights 
      </p>

      <div className="blog-grid">
        {articles.map((item) => (
          <div className="blog-card" key={item.id}>
            <div className="blog-img-wrapper">
              <img src={item.image} alt={item.title} />
              <span className="blog-tag">{item.tag}</span>
            </div>

            <div className="blog-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <div class="test-divider"></div>

              <div className="blog-footer">
  <span>{item.time}</span>
  <button className="read-btn">Read More →</button>
</div>

            </div>
          </div>
        ))}
      </div>

      <button className="view-btn">View All Articles</button>
    </section>
  );
};

export default BlogsSection;


