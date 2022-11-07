import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="content_wrapper">
        <Sidebar />
        <Routes>
          <Route path="/order" element={<Products />} />
          <Route path="/order/:prId" element={<Product />} />
          <Route path="/*" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
