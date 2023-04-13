import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../images/blog-1.jpg";

function BlogCard() {
  return (
    // <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src={blog1} alt="" className="img-fluid w-100" />
        </div>
        <div className="blog-content">
          <p className="date">12 Apr, 2023</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            quaerat accusamus officia
          </p>
          <Link to="/blog/:id" className="button ">
            Read More
          </Link>
        </div>
      </div>
    // </div>
  );
}

export default BlogCard;
