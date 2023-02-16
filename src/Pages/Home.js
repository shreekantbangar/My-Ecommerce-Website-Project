import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../Components/BlogCard";
import ProductCard from "../Components/ProductCard";
import SpecialProduct from "../Components/SpecialProduct";
import Container from "../Components/Container";
import { services } from "../Utils/Data";



const Home = () => {
  return (
    <>
     <Container class1="home-wrapper-2 py-5"> 
           <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 or
                    <br />
                    $41.62/mo.
                  </p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SELL</h4>
                    <h5>Laptop Max</h5>
                    <p>
                      From $1699.00 or
                      <br />
                      $64.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner gap-10 position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% OFF</h4>
                    <h5>Smartwatch 7</h5>
                    <p>
                      Shop the latest brand
                      <br />
                      styles and color.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>
                      From $599.00 or
                      <br />
                      $49.62 for 12 mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>FREE ENGRAVING</h4>
                    <h5>AirPods Max</h5>
                    <p>
                      Hi-Fidelity Playback &<br /> Ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
           </div>
        </Container>

          <Container class1="home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
              {
                    services?.map((i,j)=>{
                      return (
                        <div className="d-flex align-items-center gap-15 key={j}">
                  <img src={i.image} alt="services" />
                  <div>
                    <h6>{i.title}</h6>
                    <p className="mb-0">{i.tagline}</p>
                  </div>
                </div>
                );
                })}

              </div>
            </div>
          </div>
          </Container>

          <Container class1="home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/mouse.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Camera</h6>
                    <p>6 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>SmartTV</h6>
                    <p>4 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Headphones</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Mobile & Tablet</h6>
                    <p>6 Items</p>
                  </div>
                  <img src="images/mobile.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Accessories</h6>
                    <p>7 Items</p>
                  </div>
                  <img src="images/acc.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Home Appliences</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/homeapp.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>3 Items</p>
                  </div>
                  <img src="images/smartwatch.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
          </Container>
    
         <Container class1="featured-wrapper py-5 home-wrapper-2">
         <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
         </Container>
         
         <Container class1="famous-wrapper py-5 home-wrapper-2">
         <div className="row">
              <div className="col-3">
                <div className="famous-card position-relative">
                <img src="images/famous-1.jpg" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399or $16.62/mo. for 24 mo.</p>
                </div> 
                </div>
              </div>
              <div className="col-3">
                <div className="famous-card position-relative">
                <img src="images/famous-2.jpg" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits of Brightness</h6>
                  <p className="text-dark">27-inch 5k Ratina Display</p>
                </div> 
                </div>
              </div>
              <div className="col-3">
                <div className="famous-card position-relative">
                <img src="images/famous-3.jpg" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Smartphone</h5>
                  <h6 className="text-dark">Smart Phone13 Pro.</h6>
                  <p className="text-dark">Now in Green. From $999.00 or $41.62/mo. for 24 mo.</p>
                </div> 
                </div>
              </div>
              <div className="col-3">
                <div className="famous-card position-relative">
                <img src="images/famous-4.jpg" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Home Speakers</h5>
                  <h6 className="text-dark">Room filling-sound</h6>
                  <p className="text-dark">From $999.00 or $41.62/mo. for 12 mo.</p>
                </div> 
                </div>
              </div>
            </div>
         </Container>
     
      <Container class1="special-wrapper py-5 home-wrapper-2">  
          <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div> 
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div> 
          </div> 
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>

      <Container class1="marque-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12 ">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                 <div className="mx-4 w-25">
                 <img src="images/brand-01.png" alt="brand" />
                 </div>
                 <div className="mx-4 w-25">
                 <img src="images/brand-02.png" alt="brand" />
                 </div>
                 <div className="mx-4 w-25">
                 <img src="images/brand-03.png" alt="brand" />
                 </div>
                 <div className="mx-4 w-25">
                 <img src="images/brand-04.png" alt="brand" />
                 </div>
                 <div className="mx-4 w-25">
                 <img src="images/brand-05.png" alt="brand" />
                 </div>
                 <div className="mx-4 w-25">
                 <img src="images/brand-06.png" alt="brand" />
                 </div>
                 <div className="mx-4 w-25">
                 <img src="images/brand-07.png" alt="brand" />
                 </div>
                 <div className="mx-4 w-25">
                 <img src="images/brand-08.png" alt="brand" />
                 </div>
                </Marquee>
              </div>
            </div>
          </div>
      </Container>  

      <Container class1="blog-wrapper py-5 home-wrapper-2">
          <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div> 
          </div>
          <div className="row">
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
          </div>
      </Container>
    </>
  );
};

export default Home;
