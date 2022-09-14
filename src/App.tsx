import React from "react";
import "./stylesheets/App.css";
import { HomePage } from "./pages";
import { Layout } from "./pages/layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}

export default App;
