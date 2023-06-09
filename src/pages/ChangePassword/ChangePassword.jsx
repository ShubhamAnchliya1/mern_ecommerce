import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import CustomInput from "../../components/CustomInput";

function ChangePassword() {
  return (
    <>
      <Meta title={"Change Password"} />
      <BreadCrumb title="Change Password" />
      <Container class1="forgot-password-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card-forgot-password">
              <h3 className="text-center mb-3">Change Your Password </h3>
              <form action="" className="gap-15">
                <CustomInput
                  type="password"
                  name="oldpassword"
                  className="mb-3"
                  placeholder="Enter your old password"
                />

                <CustomInput
                  type="password"
                  name="newpassword"
                  className="mb-3"
                  placeholder="Enter your new password"
                />

                <CustomInput
                  type="password"
                  name="confirmpassword"
                  className="mb-3"
                  placeholder="Enter your confirm password"
                />

                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center ">
                    <button className="button border-0" type="submit">
                      Submit
                    </button>
                    <Link to="/" className="button cancel">
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

export default ChangePassword;
