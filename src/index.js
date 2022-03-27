import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsProvider } from "./contexts/products/productsContext";

import { FilterProvider } from "./contexts/filter/FilterContext";

import { AuthProvider } from "./contexts/auth/authContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
   <AuthProvider>
      <Router>
        <ProductsProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </ProductsProvider>
      </Router>
   </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
