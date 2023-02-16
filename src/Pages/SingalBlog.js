import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from "../Components/Container";


function SingalBlog() {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>

                <img
                  src={blog}
                  className="img-fluid w-100 my-4"
                  alt="blog"
                />

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, sapiente facilis officiis odio sequi placeat, nihil
                  doloribus perspiciatis repellendus amet voluptatibus
                  voluptates velit reiciendis necessitatibus iure. Dolorem,
                  sapiente voluptatibus sit perferendis, aspernatur aliquam eum
                  veritatis beatae aliquid hic ducimus sequi quis ipsum
                  incidunt. Reprehenderit consequuntur corrupti iusto, dolores
                  saepe eveniet?
                </p>
              </div>
            </div>
          </div>
        </Container>
    </>
  );
}

export default SingalBlog;
