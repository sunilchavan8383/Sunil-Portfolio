import React from "react";
import "./LatestPost.css";
import blogImage1 from "./WhatsApp Image 2025-03-06 at 10.48.49_e8b82a93.jpg";
import blogImage2 from "./trophy1.jpg";
import author1 from "./img1.jpeg";
import author2 from "./img1.jpeg";

const blogs = [
  {
    id: 1,
    title: "University-level cricket player",
    image: blogImage1,
    author: "Ranold Jeff",
    authorImage: author1,
    date: "May 4th, 2022",
  },
  {
    id: 2,
    title: "Headed a cricket tournament",
    image: blogImage2,
    author: "Patricia Anderson",
    authorImage: author1,
    date: "Apr 27th, 2022",
  },
  {
    id: 3,
    title: "Developed the official website for a robotics championship",
    image: blogImage2,
    author: "Elaine Luna",
    authorImage: author2,
    date: "Apr 26th, 2022",
  },
  {
    id: 4,
    title: "Smart India Hackathon (SIH) 2024 participant",
    image: blogImage1,
    author: "Ranold Jeff",
    authorImage: author1,
    date: "May 4th, 2022",
  },
  {
    id: 5,
    title: "Avishkar 2024 (Zonal Level) participan",
    image: blogImage2,
    author: "Patricia Anderson",
    authorImage: author1,
    date: "Apr 27th, 2022",
  },
  {
    id: 6,
    title: "The most Popular Business Of the Year",
    image: blogImage2,
    author: "Elaine Luna",
    authorImage: author2,
    date: "Apr 26th, 2022",
  },
];

const BlogSection2 = () => {
  return (
    <div className="blog-container2">
      <div className="blog-header-wrapper">
       
        <h2 className="blog-main-title">Extracurricular</h2>
      </div>

      <div className="blog-card-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-article-card">
            <img src={blog.image} alt="Blog Post" className="blog-thumbnail" />
            <div className="blog-details">
              <h3 className="blog-heading">{blog.title}</h3>
              <div className="blog-author-info">
          
                <p className="author-name">{blog.author}</p>
              </div>
              <span className="blog-publication-date">{blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection2;
