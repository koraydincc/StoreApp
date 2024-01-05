import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Layout } from "./components/Layouts/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartProvider from "./context/CartProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartProvider>
      <Layout>
        <App></App>
      </Layout>
    </CartProvider>
  </BrowserRouter>
);
