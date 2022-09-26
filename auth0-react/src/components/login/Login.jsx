import "./login.css";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

function Login() {
  const navigate = useNavigate();

  const login = () => {
    navigate("overview");
  };

  return (
    <Box className="login-container">
      <Typography variant="h4">Welcome to the pokedex</Typography>
      <Typography variant="caption">Gotta catch em all</Typography>
      <Button variant="contained" onClick={login}>
        Login
      </Button>
    </Box>
  );
}

export default Login;
