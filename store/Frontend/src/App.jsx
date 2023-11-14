import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../src/Pages/HomePage";
import ContactPage from "../src/Pages/ContactPage"
import CartPage from '../src/Pages/CartPage'
import ShopPage from '../src/Pages/ShopPage'
import ProductDetailsPage from "../src/Pages/ProductDetailsPage"
import AuthPage from '../src/Pages/AuthPage'

import "./App.css";

function App() {
  return (
    <Routes>
 <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
    </Routes>
  );
}

export default App;