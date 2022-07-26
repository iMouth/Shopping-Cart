import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./componets/Home/Home";
import Cart from "./componets/Cart/Cart";
import Shop from "./componets/Shop/Shop";
import Error from "./componets/Error/Error";
import Header from "./componets/Header/Header";

function App({ images }) {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop images={images} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
