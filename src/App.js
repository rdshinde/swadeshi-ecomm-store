import "./stylesheets/App.css";
import { Route, Routes } from "react-router-dom";
import MockAPI from "./mockMan";
import {
  Home,
  Cart,
  LoginPage,
  ProductFilter,
  SignupPage,
  Wishlist,
  ProductDetailsPage,
  Layout,
  PageNotFound,
} from "./pages";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductFilter />} />
          <Route path="/products/details" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/mock-api" element={<MockAPI />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
