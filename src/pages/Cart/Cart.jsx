import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import watch from "../../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <Meta title={"Cart Page"} />
      <BreadCrumb title="Cart Page" />
      <div className="cart-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-content-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data mb-2 py-3 d-flex justify-content-between align-content-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src={watch}
                      className="img-fluid"
                      alt="cart-product-image"
                    />
                  </div>
                  <div className="w-75">
                    <p>Name: xvvxcvxvvx</p>
                    <p>Size: zczxczxczx</p>
                    <p>Color: zxczxczxcv</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">₹9999</h5>
                </div>
                <div className="cart-col-3 gap-15 d-flex ">
                  <div>
                    <input
                      type="number"
                      className="form-control"
                      name=""
                      id=""
                      min={1}
                      max={10}
                    />
                  </div>
                  <div className="text-danger">
                    <AiFillDelete />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">₹9999</h5>
                </div>
              </div>
            </div>
            <div className="col-12  py-2 mt-4 ">
              <div className="d-flex  justify-content-between align-items-baseline ">
                <Link to="/product" className="button">
                  Continue to Shipping
                </Link>
                <div className="d-flex flex-column align-items-end">
                  <h4>SubTotal: ₹11000</h4>
                  <p>Taxes and shipping calculated at checkout</p>
                  <Link to="/checkout" className="button">
                    CheckOut
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
