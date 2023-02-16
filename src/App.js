import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import OurStore from './Pages/OurStore';
import Blog from './Pages/Blog';
import CompareProduct from './Pages/CompareProduct';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';
import Forgotpassword from './Pages/Forgotpassword';
import Signup from './Pages/Signup';
import Resetpassword from './Pages/Resetpassword';
import SingalBlog from './Pages/SingalBlog';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ShippingPolicy from './Pages/ShippingPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import TermOfServices from './Pages/TermOfServices';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Layout />}>
         <Route  index element= {<Home />} />
         <Route path='about' element={<About/>} />
         <Route path='contact' element={<Contact/>} />
         <Route path='product' element={<OurStore/>} />
         <Route path='product/:id' element={<SingleProduct/>} />
         <Route path='blogs' element={<Blog/>} />
         <Route path='blog/:id' element={<SingalBlog/>} />
         <Route path='cart' element={<Cart/>} />
         <Route path='checkout' element={<Checkout/>} />
         <Route path='compare-product' element={<CompareProduct/>} />
         <Route path='wishlist' element={<Wishlist/>} />
         <Route path='login' element={<Login/>} />
         <Route path='forgot-password' element={<Forgotpassword/>} />
         <Route path='signup' element={<Signup/>} />
         <Route path='reset-password' element={<Resetpassword/>} />
         <Route path='privacy-policy' element={<PrivacyPolicy/>} />
         <Route path='shipping-policy' element={<ShippingPolicy/>} />
         <Route path='refund-policy' element={<RefundPolicy/>} />
         <Route path='termof-service' element={<TermOfServices/>} />
         
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
