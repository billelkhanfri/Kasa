import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import Logement from "../pages/Logement";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:logementId" element={<Logement />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routers;
