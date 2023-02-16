import React from "react";
import { icons } from "react-icons";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import {AiOutlineHome,AiOutlineMail} from "react-icons/ai"
import {BiPhoneCall,BiInfoCircle} from "react-icons/bi"
import Container from "../Components/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15048.23097746301!2d73.31662038658119!3d19.453077022789977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be783805a28fcab%3A0xacbf8ca7bc27847!2sShahapur%2C%20Maharashtra%20421601!5e0!3m2!1sen!2sin!4v1674042146963!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder="Mobile Number"/>
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
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
                      <li className="mb-2 d-flex gap-10 align-items-center"><AiOutlineHome className="fs-5" />
                      <address className="mb-0">Hno: 222 Near Bank of Baroda Tower,
                             Shahapur, Maharashtra</address>
                      </li>
                      <li className="mb-2 d-flex gap-10 align-items-center"><BiPhoneCall className="fs-5" />
                      <a href="tel:+91 9222036222"> +91 9222036222 </a>
                      </li>
                      <li className="mb-2 d-flex gap-10 align-items-center"><AiOutlineMail className="fs-5" />
                      <a href="mailto:shreekantbangar22@gmail.com">shreekantbangar22@gmail.com</a>
                      </li>
                      <li className="mb-2 d-flex gap-10 align-items-center"><BiInfoCircle className="fs-5" />
                      <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
    </>
  );
};

export default Contact;
