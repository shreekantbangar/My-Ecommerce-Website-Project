import React from 'react'
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from 'react-router-dom';
import Container from '../Components/Container';
import CustomeInput from '../Components/CustomeInput';
const Signup = () => {
  return (
    <>
         <Meta title={"Sign Up"} />
<BreadCrumb title="Sign Up" />
<Container class1="login-wrapper home-wrapper-2 py-5">
   <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center mb-3'>Sign Up</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                    <CustomeInput type="text" name="name" placeholder='Name' />
                    <CustomeInput type="tel" name="mobile" placeholder='Mobile Number' />
                    <CustomeInput type="email" name="Email" placeholder='Email' />
                    <CustomeInput type="password" name="Password" placeholder='Password' />
                        <div> 
                            <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                <button className='button border-0'>Sign Up</button>
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
   </Container>

    </>
  )
}

export default Signup