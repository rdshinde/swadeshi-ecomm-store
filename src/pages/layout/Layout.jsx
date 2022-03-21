import React from "react";
import { Footer, Navbar } from "../../components";
import "./layout.css";

export const Layout = ({ children }) => {
  return (
    <div>
      <header className="header-container">
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
