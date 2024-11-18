import React, { useState } from "react";

const AddProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && location && imageUrl && price && description) {
      const newProduct = {
        id: Date.now(),
        name,
        location,
        imageUrl,
        price,
        description,
      };
      onAddProduct(newProduct); // Pass the new product to the parent
      setName("");
      setLocation("");
      setImageUrl("");
      setPrice("");
      setDescription("");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.textarea}
        />
        <button type="submit" style={styles.submitButton}>
          Add Product
        </button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    marginTop: "80px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    width: "50%",
    margin: "auto",
  },
  input: {
    padding: "10px",
    width: "100%",
    margin: "10px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    width: "100%",
    margin: "10px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
    minHeight: "100px",
  },
  submitButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    width: "100%",
  },
};

export default AddProductForm;
