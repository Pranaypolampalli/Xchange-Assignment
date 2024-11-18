import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "./ProductCard";
import { calculateDistance } from "../utils/geolocation";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [nearbyProducts, setNearbyProducts] = useState([]);

  useEffect(() => {
    const selectedProduct = products.find((product) => product.id === parseInt(productId));
    if (selectedProduct) {
      setProduct(selectedProduct);

      const nearby = products.filter((product) => {
        const distance = calculateDistance(
          selectedProduct.latitude,
          selectedProduct.longitude,
          product.latitude,
          product.longitude
        );
        return distance <= 100 && product.id !== selectedProduct.id; // Distance threshold
      });
      setNearbyProducts(nearby);
    } else {
      navigate("/"); // Redirect if product not found
    }
  }, [productId, navigate]);

  if (!product) return <p style={{ textAlign: "center", fontSize: "18px" }}>Loading...</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>{product.name}</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            background: "#f9f9f9",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "20px",
          }}
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "10px",
              objectFit: "cover",
              border: "1px solid #ccc",
            }}
          />
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "16px", margin: "10px 0" }}>
              <strong>Location:</strong> {product.location}
            </p>
            <p style={{ fontSize: "16px", margin: "10px 0" }}>
              <strong>Price:</strong> <span style={{ color: "#007BFF" }}>${product.price}</span>
            </p>
            <p style={{ fontSize: "16px", color: "#555", marginTop: "20px" }}>{product.description}</p>
          </div>
        </div>

        <h2 style={{ marginTop: "40px", textAlign: "center", color: "#444" }}>Nearby Products</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: nearbyProducts.length ? "flex-start" : "center",
          }}
        >
          {nearbyProducts.length > 0 ? (
            nearbyProducts.map((nearbyProduct) => (
              <ProductCard key={nearbyProduct.id} product={nearbyProduct} />
            ))
          ) : (
            <p style={{ textAlign: "center", fontSize: "16px", color: "#888" }}>No nearby products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
