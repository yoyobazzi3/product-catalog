import React from "react";
// import {useState , useEffect } from "react";
// import axios from "axios";
import ProductCards from "../Components/ProductCard";
import "./GetProducts.css";
const GetProducts = () => {
  return (
    <div>
      <div className="nav">
        <h1>Digital Shop</h1>
      </div>
      <div className="cards-container">
        <ProductCards className="productCards" />
      </div>
    </div>
  );
};
export default GetProducts;
