import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsProvider } from "./contexts/products/productsContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
