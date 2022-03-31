import React from "react";
import { Footer, Navbar } from "../../components";
import "./layout.css";
import { ToastContainer } from "react-toastify";
export const Layout = ({ children }) => {
  return (
    <div>
      <header className="header-container">
        <Navbar />
        <ToastContainer />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
