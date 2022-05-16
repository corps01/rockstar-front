import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import { Box, Stack } from "@mui/material";
import Buy from "./views/Buy";
import Cart from "./views/Cart";
import Checkout from "./views/Checkout"
import Sidebar from './components/Sidebar'
import Player from "./components/Player";
import Library from "./views/Library";


function App() {
  return (
    <>
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header />
    <Sidebar/>
    <Stack justifyContent="space-between" alignItems="center" sx= {{width: '100%'}} >
    <Box component="main" sx={{ marginTop:6, width: '90%', minHeight:'150%'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/details/:id" element={<Buy />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/library" element={<Library />} />
          </Routes>
          </Box>
          <Player/>
          </Stack>
        </Box>
    </>
  );
}

export default App;
