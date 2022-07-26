import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./componets/Home/Home";
import Cart from "./componets/Cart/Cart";
import Shop from "./componets/Shop/Shop";
import Header from "./componets/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
