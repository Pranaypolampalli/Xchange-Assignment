import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function SearchAppBar() {
  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    navigate("/"); // Redirects to the home page
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          width: "100%",
          zIndex: 1300,
          minHeight: 48,
          boxShadow: 2,
        }}
      >
        <Toolbar
          sx={{
            minHeight: 48,
            padding: "0 16px",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={handleHomeRedirect}
            sx={{
              display: { xs: "none", sm: "block" },
              fontSize: "1rem",
              fontWeight: "bold",
              color: "white",
              cursor: "pointer",
            }}
          >
            Nearby Products
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
