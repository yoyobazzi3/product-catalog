import React from "react";
// import {useState , useEffect } from "react";
// import axios from "axios";
import ProductCards from "../Components/ProductCard";
import "./GetProducts.css";
const GetProducts = () => {
  return (
    <div>
      <div className="nav">
        <h1>DigitalNEST Shop</h1>
      </div>
      <div className="cards-container">
        <h1>Products</h1>
        <ProductCards className="productCards" />
      </div>
    </div>
  );
};
export default GetProducts;
