import React from "react";
import newsletter from "../images/newsletter.png";
import { BsLinkedin, BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import googleplay from "../images/googlestore.svg";
import applestore from "../images/applestore.svg";
import { ImOffice } from "react-icons/im";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data  d-flex  gap-30  align-items-center  ">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  <span className="text-white  me-2">
                    <ImOffice className="fs-4" />
                  </span>
                  <span className="address-inner ">
                    H.No: 42 Near Palasia ,
                    <br />
                    Indore, M.P.
                    <br />
                    PinCode: 452001
                  </span>
                </address>
                <a
                  className="mt-3 d-block mb-1 text-white"
                  href="+919874563120"
                >
                  <span className="text-white  me-2">
                    <FaPhoneSquareAlt className="fs-4" />
                  </span>
                  +91 9874563120
                </a>
                <a
                  className="mt-2 d-block mb-0 text-white"
                  href="dkart@mailinator.com"
                >
                  <span className="text-white  me-2">
                    <MdEmail className="fs-4" />
                  </span>
                  dkart@mailinator.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsFacebook className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>

            <div className="col-2">
              <h4 className="text-white mb-4">Our App</h4>
              <div className="footer-link d-flex flex-column">
                <p className="text-white py-2 mb-1">
                  Download our app and get 10% off on first order
                </p>
                <Link to="/" className="py-2 text-white">
                  <div className="d">
                    <img src={googleplay} alt="" width="150px" />
                  </div>
                </Link>
                <Link to="/" className="py-2 text-white">
                  <img src={applestore} alt="" width="150px" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center  mb-0  text-white">
                &#169; {new Date().getFullYear()} by IDM. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
