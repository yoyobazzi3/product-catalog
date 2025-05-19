import react from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get("https://cart-api.alexrodriguez.workers.dev/products")
      .then((res) => {
        const response = res.data.find((product) => product.id === id);
        setProduct(response);
      })

      .catch((err) => console.error(err));
  }, [id]);
  if(!product) return <p>Loading...</p>

  return(
    <div>
        <h2>{product.name}</h2>
    </div>
  )
};
export default Product