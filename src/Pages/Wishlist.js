import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Container from "../Components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image ">
                    <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                </div>
                <div className="py-3 px-3">
                <h5 className="title">Honor T1 16 GB Ram Latest 10.1 prosessor</h5>
                <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image ">
                    <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                </div>
                <div className="py-3 px-3">
                <h5 className="title">Honor T1 16 GB Ram Latest 10.1 prosessor</h5>
                <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image ">
                    <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                </div>
                <div className="py-3 px-3">
                <h5 className="title">Honor T1 16 GB Ram Latest 10.1 prosessor</h5>
                <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
        </Container>
    
    </>
  );
};

export default Wishlist;
