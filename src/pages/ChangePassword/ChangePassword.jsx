import React from 'react';
import Meta from '../../components/Meta';
import BreadCrumb from '../../components/BreadCrumb';
import { Link } from 'react-router-dom';

function ChangePassword() {
  return (
    <>
         <Meta title={"Change Password"} />
      <BreadCrumb title="Change Password" />
      <div className="forgot-password-wrapper home-wrapper-2  py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card-forgot-password">
                <h3 className="text-center mb-3">Change Your Password </h3>                
                <form action="" className="gap-15">
                  <div className="mb-3">
                    <input
                      type="password"
                      name="oldpassword"
                      className="form-control"
                      placeholder="Enter your old password"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      name="newpassword"
                      className="form-control"
                      placeholder="Enter your new password"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      name="confirmpassword"
                      className="form-control"
                      placeholder="Enter your confirm password"
                    />
                  </div>

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
        </div>
      </div>
    </>
  )
}

export default ChangePassword;