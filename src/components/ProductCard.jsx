import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`); 
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        width: "200px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{ width: "100%", height: "auto", borderRadius: "4px" }}
      />
      <h3>{product.name}</h3>
      <p>{product.price} USD</p>
    </div>
  );
};

export default ProductCard;
