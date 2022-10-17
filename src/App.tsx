import React from "react";
import "./stylesheets/App.css";
import {
  CartPage,
  HomePage,
  LoginPage,
  PageNotFound,
  ProductDetailsPage,
  SignupPage,
  WishlistPage,
} from "./pages";
import { Layout } from "./pages/layout/Layout";
import { Routes, Route } from "react-router-dom";
import { FilterPage } from "./pages/filter/FilterPage";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<FilterPage />} />
          <Route path="/products/details" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
