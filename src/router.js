import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/home";
import About from "./components/about";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}