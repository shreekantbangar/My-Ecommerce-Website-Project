import React from 'react'
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from 'react-router-dom';
import Container from '../Components/Container';

const ShippingPolicy = () => {
  return (
    <>
        <Meta title={"Shipping Pilicy"} />
      <BreadCrumb title="Shipping Pilicy" />
       <Container class1="policy-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="policy">

              </div>
            </div>
          </div>
       </Container>

     
    </>
  )
}

export default ShippingPolicy