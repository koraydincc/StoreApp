import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../src/Pages/HomePage";
import ContactPage from "../src/Pages/ContactPage"
import CartPage from '../src/Pages/CartPage'
import ShopPage from '../src/Pages/ShopPage'
import ProductDetailsPage from "../src/Pages/ProductDetailsPage"
import AuthPage from '../src/Pages/AuthPage'
import UpdateCategoryPage from "./Pages/Admin/Categories/UpdateCategoryPage";
import CreateProductPage from "./Pages/Admin/Products/CreateProductPage";
import ProductPage from "./Pages/Admin/Products/ProductPage";
import UpdateProductPage from "./Pages/Admin/Products/UpdateProductPage";
import AdminUserPage from "./Pages/Admin/AdminUserPage";

import "./App.css";

import CategoryPage from "./Pages/Admin/Categories/CategoryPage"
import CreateCategoryPage from "./Pages/Admin/Categories/CreateCategoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="/admin/*">
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/create" element={<CreateCategoryPage></CreateCategoryPage>}></Route>
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
        <Route path="products/create" element={<CreateProductPage />} />
        <Route path="products" element={<ProductPage></ProductPage>}></Route>
        <Route path="products/update/:id" element={<UpdateProductPage></UpdateProductPage>}></Route>
        <Route path="users" element={<AdminUserPage />} />
      </Route>

    </Routes>
  );
}

export default App;