import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import { ImOffice } from "react-icons/im";
import { FaCalendarAlt, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper home-wrapper-2  py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7360.098185446646!2d75.8837869!3d22.7264166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4773f75357%3A0xd4c16ad55b02adbe!2sNew%20Palasia%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1681717919463!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                // style="border:0;"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12  mt-5">
              <div className="contact-inner-wrapper d-flex  justify-content-between">
                <div>
                  <h3 className="contact-title  mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15    ">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="form-control w-100"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className=" d-flex gap-15 align-items-center">
                        <address className="fs-5">
                          <span className=" me-2">
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
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <a className="d-block fs-5 " href="+919874563120">
                          <span className=" me-2">
                            <FaPhoneSquareAlt className="fs-4" />
                          </span>
                          +91 9874563120
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <a
                          className="mt-2 d-block fs-5"
                          href="dkart@mailinator.com"
                        >
                          <span className=" me-2">
                            <MdEmail className="fs-4" />
                          </span>
                          dkart@mailinator.com
                        </a>
                      </li>

                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <a
                          className="mt-2 d-block fs-5"
                          href="dkart@mailinator.com"
                        >
                          <span className=" me-2">
                            <FaCalendarAlt className="fs-4" />
                          </span>
                          Monday - Saturday | 9 AM to 8 PM
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
