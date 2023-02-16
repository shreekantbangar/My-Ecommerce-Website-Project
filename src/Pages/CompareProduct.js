import React from 'react'
import BreadCrumb from "../Components/BreadCrumb";
import Color from '../Components/Color';
import Meta from "../Components/Meta";
import Container from '../Components/Container';

const CompareProduct = () => {
  return (
    <>
         <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="comapare-product-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-3">
                <div className="compare-product-card position-relative">
                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                    <div className="product-card-image">
                        <img src="images/watch.jpg" alt="watch" />
                    </div>
                    <div className="compare-product-details">
                        <h5 className="title">Honor T1 16 GB Ram Latest 10.1 prosessor</h5>
                        <h6 className="price mb-3 mt-3">$ 100</h6>
                        <div>
                            <div className='product-detail'>
                                  <h5>Brand</h5>
                                  <p>Havals</p>
                            </div>
                            <div className='product-detail'>
                                  <h5>Type</h5>
                                  <p>Watch</p>
                            </div>
                            <div className='product-detail'>
                                  <h5>Availability</h5>
                                  <p>In Stock</p>
                            </div>
                            <div className='product-detail'>
                                  <h5>Color</h5>
                                  <Color />
                            </div>
                            <div className='product-detail'>
                                  <h5>Size</h5>
                                  <div className="d-flex gap-10">
                                  <p>S</p>
                                  <p>M</p>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="compare-product-card position-relative">
                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                    <div className="product-card-image">
                        <img src="images/watch.jpg" alt="watch" />
                    </div>
                    <div className="compare-product-details">
                        <h5 className="title">Honor T1 16 GB Ram Latest 10.1 prosessor</h5>
                        <h6 className="price mb-3 mt-3">$ 100</h6>
                        <div>
                            <div className='product-detail'>
                                  <h5>Brand</h5>
                                  <p>Havals</p>
                            </div>
                            <div className='product-detail'>
                                  <h5>Type</h5>
                                  <p>Watch</p>
                            </div>
                            <div className='product-detail'>
                                  <h5>Availability</h5>
                                  <p>In Stock</p>
                            </div>
                            <div className='product-detail'>
                                  <h5>Color</h5>
                                  <Color />
                            </div>
                            <div className='product-detail'>
                                  <h5>Size</h5>
                                  <div className="d-flex gap-10">
                                  <p>S</p>
                                  <p>M</p>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </>
  )
}

export default CompareProduct