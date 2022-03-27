import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsProvider } from "./contexts/products/productsContext";
import { CartAndWishlistProvider } from "./contexts/cart-and-wishlist/cartAndWishlistContext";
import { FilterProvider } from "./contexts/filter/FilterContext";

import { AuthProvider } from "./contexts/auth/authContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <ProductsProvider>
          <CartAndWishlistProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </CartAndWishlistProvider>
        </ProductsProvider>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
