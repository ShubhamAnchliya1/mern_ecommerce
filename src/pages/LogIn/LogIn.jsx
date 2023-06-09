import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import CustomInput from "../../components/CustomInput";

function LogIn() {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper home-wrapper-2  py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card-login">
              <h3 className="text-center mb-3">LogIn</h3>
              {/* <form action="" className="d-flex flex-cloumn gap-15 "> */}
              <form action="" className="gap-15">
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="mb-3"
                />
                {/* <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div> */}
                {/* <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div> */}
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  className="mb-3"
                />
                <div>
                  <Link to="/forgot-password">Forgot Password</Link>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center ">
                    <button className="button border-0" type="submit">
                      LogIn
                    </button>
                    <Link to="/signup" className="button signup">
                      SignUp
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

export default LogIn;
