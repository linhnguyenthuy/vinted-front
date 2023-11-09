import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Offers from "./pages/Offers";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers/:id" element={<Offers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
