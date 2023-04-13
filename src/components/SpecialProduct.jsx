import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import watch from "../images/watch.jpg";

function SpecialProduct() {

  return (
    <div className="col-6 mb-3">
      <div className="special-product-card ">
        <div className="d-flex justify-content-between">
          <div>
            <img src={watch} alt="watch" className="img-fluid" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">APPLE</h5>
            <h6 className="title">iPhone 13 (Starlight, 128 GB)</h6>
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">₹58,999</span> &nbsp;
              <strike>69,900</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>3 </b>days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Products : 5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-label="Basic example"
                  style={{ width: "45%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link to="/" className="button">
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
