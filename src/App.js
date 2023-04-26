import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import Contact from "./pages/Contact/Contact";
import OurStore from "./pages/OurStore/OurStore";
import Blog from "./pages/Blog/Blog";
import CompareProduct from "./pages/CompareProduct/CompareProduct";
import Wishlist from "./pages/Wishlist/Wishlist";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy/ShippingPolicy";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/product" element={<OurStore />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/compare-product" element={<CompareProduct />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
