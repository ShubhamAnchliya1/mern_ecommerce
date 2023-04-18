import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />
      <div className="forgot-password-wrapper home-wrapper-2  py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card-forgot-password">
                <h3 className="text-center mb-3">Reset Your Password </h3>
                <p className="text-center mt-2 mb-3 ">
                  We will send you an email to reset your password
                </p>
                <form action="" className="gap-15">
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center ">
                      <button className="button border-0" type="submit">
                        Submit
                      </button>
                      <Link to="/login" className="button cancel">
                        Cancel
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
