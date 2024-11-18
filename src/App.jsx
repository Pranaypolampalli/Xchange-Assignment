import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 import Navbar from "./components/Navbar";
import NearbyProducts from "./components/NearbyProducts";
import AddProductForm from "./components/AddProductForm";
import ProductDetailPage from "./components/ProductDetailPage"; 
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<NearbyProducts />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
