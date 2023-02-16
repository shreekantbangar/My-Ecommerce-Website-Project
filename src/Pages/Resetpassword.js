import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../Components/Container";
import CustomeInput from "../Components/CustomeInput";

const Resetpassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <Container className="login-wrapper home-wrapper-2 py-5">
      <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomeInput  type="password"
                    name="newpassword"
                    placeholder="New Password" />
                
              <CustomeInput type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password" />
             
                <div>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
   
    </>
  );
};

export default Resetpassword;
