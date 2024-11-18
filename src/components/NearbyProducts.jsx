
import React, { useState, useEffect } from "react";
import axios from "axios";
import products from "../data/products";
import { calculateDistance } from "../utils/geolocation";
import ProductCard from "./ProductCard";
import { TextField, Button, Box, CircularProgress, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const NearbyProducts = () => {
  const [inputPlace, setInputPlace] = useState(""); // Input location
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products
  const [error, setError] = useState(""); // Error state
  const [loading, setLoading] = useState(false); // Loading state
  const [userLocation, setUserLocation] = useState(null); // User's current location

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
        findNearbyProducts(latitude, longitude);
      },
      () => setError("Unable to fetch your location.")
    );
  }, []);

  // Handle input change for custom location
  const handleInputChange = (e) => setInputPlace(e.target.value);

  // Handle search for custom location
  const handleSearch = async () => {
    if (!inputPlace.trim()) {
      setError("Please enter a valid location.");
      return;
    }

    setLoading(true);
    setError("");
    setFilteredProducts([]);

    try {
      // Fetch geolocation of entered place from OpenStreetMap
      const geocodeURL = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(inputPlace)}&addressdetails=1&limit=1`;
      const response = await axios.get(geocodeURL);

      if (response.data.length > 0) {
        const location = response.data[0];
        const latitude = parseFloat(location.lat);
        const longitude = parseFloat(location.lon);
        
        // Fetch nearby products based on the entered location
        findNearbyProducts(latitude, longitude);
      } else {
        setError("Could not find the location. Try a different place.");
      }
    } catch (err) {
      setError("Failed to fetch location. Check your input or try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Function to find products near the given lat/lon
  const findNearbyProducts = (lat, lon) => {
    const nearbyProducts = products.filter((product) => {
      const distance = calculateDistance(lat, lon, product.latitude, product.longitude);
      return distance <= 100; // Distance threshold of 100 km
    });
    setFilteredProducts(nearbyProducts);
  };

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: "center", fontWeight: "bold" }}>
        Find Products Near You
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <TextField
          variant="outlined"
          placeholder="Enter a location (e.g., Munnar)"
          value={inputPlace}
          onChange={handleInputChange}
          sx={{
            width: "300px",
            marginRight: "10px",
            backgroundColor: "#fff",
            borderRadius: "4px",
            boxShadow: 1,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            borderRadius: "4px",
            height: "100%",
            boxShadow: 2,
          }}
        >
          <SearchIcon sx={{ mr: 1 }} />
          Search
        </Button>
      </Box>

      {/* Error and loading messages */}
      {error && <Typography color="error" align="center">{error}</Typography>}
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <CircularProgress />
        </Box>
      )}

      {/* Display products */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : !loading && !error ? (
          <Typography variant="h6" align="center" sx={{ width: "100%", mt: 5 }}>
            No products found near the entered location.
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
};

export default NearbyProducts;
