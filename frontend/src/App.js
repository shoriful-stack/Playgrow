import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Root from "./Layout/Root";
import About from "./Pages/About/About";
import FAQ from "./Pages/FAQ/FAQ";
import Contact from "./Pages/Contact/Contact";
import ShopList from "./Pages/Shop/ShopList";
import ShopSingle from "./Pages/Shop/ShopSingle";
import MyAccount from "./Pages/Shop/ShopPages/MyAccounts";
import Wishlist from "./Pages/Shop/ShopPages/Wishlist";
import Cart from "./Pages/Shop/ShopPages/Cart";
import Checkout from "./Pages/Shop/ShopPages/Checkout";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shop-list" element={<ShopList />} />
          <Route path="/shop-single" element={<ShopSingle />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
