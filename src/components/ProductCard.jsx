import React from "react";
import { Link } from "react-router-dom";
import product1 from "../images/watch.jpg";
import product12 from "../images/watch-1.avif";
import ReactStars from "react-rating-stars-component";
import wish from "../images/wish.svg";
import prodcompare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import addcart from "../images/add-cart.svg";

function ProductCard() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    // <div className="col-3">
    <Link className="product-card position-relative">
      <div className="wishlist-icon position-absolute">
        <Link>
          <img src={wish} alt="" />
        </Link>
      </div>
      <div className="product-image">
        <img src={product1} alt="" className="img-fluid" />
        <img src={product12} alt="" className="img-fluid" />
      </div>
      <div className="product-details">
        <h6 className="brand">Fire Bolt</h6>
        <h5 className="product-title">
          A beautiful sunday morning renaissance
        </h5>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          value={4}
          edit={false}
          activeColor="#ffd700"
        />
        <p className="price">₹950</p>
      </div>
      <div className="action-bar position-absolute">
        <div className="d-flex flex-column gap-15">
          <Link>
            <img src={prodcompare} alt="prodcompare" />
          </Link>
          <Link>
            <img src={view} alt="view" />
          </Link>
          <Link>
            <img src={addcart} alt="addcart" />
          </Link>
        </div>
      </div>
    </Link>
    // </div>
  );
}

export default ProductCard;
