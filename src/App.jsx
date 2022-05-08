import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Home from "./views/Home";
import { Box } from "@mui/material";
import Details from "./views/Details";

function App() {
  return (
    <>
        <Header />
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Box>
    </>
  );
}

export default App;
