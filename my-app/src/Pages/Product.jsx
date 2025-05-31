import react from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://cart-api.alexrodriguez.workers.dev/products")
      .then((res) => {
        const response = res.data.find((product) => product.id === id);
        if (response) {
          setProduct(response);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);
  const goToHomePage = () => {
    navigate("/");
  };

  if (!product) return <p className="product-loading">Loading...</p>;
  

  return (
    <div className="product-detail-container">
      <button onClick={goToHomePage} className="back-to-home-button">
        &larr; Back to All Products
      </button>
      <h2 className="product-name">{product.name}</h2> {/* Added className */}
      <img
        className="product-image"
        src={product.image}
        alt={product.name}
      />{" "}
      {/* Added className, removed inline style */}
      <p className="product-price">
        <strong>Price:</strong> ${product.price}
      </p>{" "}
      {/* Added className */}
      <p className="product-description">
        <strong>Description:</strong>{" "}
        {product.description || "No description available."}
      </p>
    </div>
  );
};
export default Product;
