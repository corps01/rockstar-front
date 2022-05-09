import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import { Box } from "@mui/material";
import Buy from "./views/Buy";
import Cart from "./views/Cart";

function App() {
  return (
    <>
        <Header />
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/details/:id" element={<Buy />} />
          </Routes>
        </Box>
    </>
  );
}

export default App;
