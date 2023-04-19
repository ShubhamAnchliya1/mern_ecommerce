import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import blog1 from "../../images/blog-1.jpg";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function SingleBlog() {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2  py-5">
        <div className="container-xxl">
          <div className="row">
            {/* <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
            </div> */}
            {/* <div className="col-9"></div> */}
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10 ">
                  <BsArrowLeft className="fs-4" /> Go back to blogs
                </Link>
                <h3 className="title">What is Lorem Ipsum?</h3>
                <img
                  src={blog1}
                  alt="blog"
                  className="img-fluid  w-100 my-4  "
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
