import React, { useEffect, useState } from "react";
import "../styles/BlogsSection.css";
import { Link } from "react-router-dom";
import { client, urlFor } from "../sanityClient";

const BlogsSection = ({ showViewAll = true, category = "All" }) => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {

    const query = `*[_type == "post" && defined(slug.current)] | order(_createdAt desc){
      _id,
      title,
      slug,
      category,
      description,
      readTime,
      image
    }`;

    client.fetch(query).then((data) => {
      console.log("Sanity Data:", data);
      setArticles(data);
    });

  }, []);

  /* ================= FILTER ================= */

  const filteredArticles =
    category === "All"
      ? articles
      : articles.filter(
          (item) => item.category?.toLowerCase() === category.toLowerCase()
        );

  return (
    <section className="blog-section">

      <p className="blog-subtitle">Our Blogs</p>
      <h2 className="blog-title">Latest Blogs & Articles</h2>

      <p className="blog-desc">
        Stay updated with the latest trends, tips and industry insights
      </p>

      <div className="blog-grid">

        {filteredArticles.length === 0 && (
          <p style={{ textAlign: "center" }}>No Blogs Found</p>
        )}

        {filteredArticles.map((item) => (

          <div className="blog-card" key={item._id}>

            <div className="blog-img-wrapper">

              {item.image && (
                <img
                  src={urlFor(item.image).width(600).url()}
                  alt={item.title}
                />
              )}

              <span className="blog-tag">{item.category}</span>

            </div>

            <div className="blog-content">

              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="test-divider"></div>

              <div className="blog-footer">

                <span>{item.readTime}</span>

                <Link to={`/blog/${item.slug.current}`}>
                  <button className="read-btn">
                    Read More →
                  </button>
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

      {showViewAll && (
        <Link to="/blogpg">
          <button className="view-btn">
            View All Articles
          </button>
        </Link>
      )}

    </section>
  );
};

export default BlogsSection;