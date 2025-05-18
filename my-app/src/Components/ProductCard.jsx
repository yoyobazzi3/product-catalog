import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./ProductCard.css"
// import axios from "axios";

const ProductCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://cart-api.alexrodriguez.workers.dev/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="card-container">
      <ul>
        {products.map((product) => {
            return(
                <div className="item-card" key={product.id}>
              <p className="item-image">
             
              <img src={product.image} alt={product.name} width="100" />
            </p>
              <p className="item-name">
                {product.name}
              </p>
            <p className="item-price">
               ${product.price}
            </p>
            
          </div>
            );
        }
    )}
      </ul>
    </div>
  );
};
export default ProductCards;
