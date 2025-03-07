import React from "react";
import "./Blogs.css";

import BlogSection from "./BlogSection/BlogSection";
import BlogSection2 from "./LatestPost/LatestPost";
import Quote from "./Quote/Quote";

function Blogspg1() {
  return (
    <div className="blogs-pg1-container">
      <BlogSection />
      <BlogSection2 />
      <Quote />
      
    </div>
  );
}

export default Blogspg1;
