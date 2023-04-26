import React from "react";
import { Link } from "react-router-dom";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import Container from "../../components/Container";

function SignUp() {
  return (
    <>
      <Meta title={"SignUp"} />
      <BreadCrumb title="SignUp" />
      <Container class1="login-wrapper home-wrapper-2  py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card-login">
              <h3 className="text-center mb-3">Create a new account</h3>
              {/* <form action="" className="d-flex flex-cloumn gap-15 "> */}
              <form action="" className="gap-15">
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    name="mobilenumber"
                    className="form-control"
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center ">
                    <button className="button border-0" type="submit">
                      SignUp
                    </button>
                    <Link to="/login" className="button signup">
                      Cancel
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SignUp;
