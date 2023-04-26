import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import watch from "../../images/watch.jpg";

function Checkout() {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">D Kart</h3>
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-dark total-price" to="/cart">
                        Cart
                      </Link>
                    </li>
                    <li className="breadcrumb-item total-price  active">
                      Information
                    </li>
                    <li className="breadcrumb-item total-price  active">
                      Shipping
                    </li>
                    <li className="breadcrumb-item total-price  active">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Contact Information</h4>
                <p className="user-details total">user name (user email id)</p>
                <h4 className="mb3">Shipping Address</h4>
                <form
                  action=""
                  className="d-flex gap-15  flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <select
                      class="form-select  form-control"
                      aria-label="Default select example"
                    >
                      <option value="" disabled selected>
                        Select Country
                      </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Apartment, Suite ,etc"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select
                      class="form-select form-control"
                      aria-label="Default select example"
                    >
                      <option value="" disabled selected>
                        select state
                      </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Zipcode"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <IoIosArrowBack />
                        Return to cart
                      </Link>
                      <Link to="/cart" className="button">
                        Continue to Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-10 mb-2 align-content-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "2px" }}
                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                      >
                        1
                      </span>
                      <img src={watch} alt="product" className="img-fluid" />
                    </div>
                    <div>
                      <h5 className="total-price">fdrgsg</h5>
                      <p className="total-price">dasdsa faf</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="total">₹9999</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex  justify-content-between align-item-center">
                  <p className="total">Subtotal</p>
                  <p className="total-price">₹11000</p>
                </div>
                <div className="d-flex  justify-content-between align-item-center">
                  <p className="total">Shipping</p>
                  <p className="total-price">₹11000</p>
                </div>
              </div>
              <div className="d-flex  justify-content-between align-items-center border-bottom py-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">₹11000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
