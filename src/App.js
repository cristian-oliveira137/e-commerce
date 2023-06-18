import React from "react";
import "./App.css";
import Home from "./home/index";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Search from "./home/search";
import ProductDetails from "./product-details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/detalhes/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
