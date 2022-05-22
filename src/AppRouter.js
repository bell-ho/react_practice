import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { Box, Typography } from "@mui/material";
import App from "./App";
import SignUp from "./components/SignUp";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright"}
      hi , {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<App />} />
          </Routes>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
