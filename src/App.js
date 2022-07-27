import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./componets/Home/Home";
import Cart from "./componets/Cart/Cart";
import Shop from "./componets/Shop/Shop";
import Error from "./componets/Error/Error";
import Header from "./componets/Header/Header";

function App({ images }) {
  const [cart, setCart] = useState({});
  const [amount, setAmount] = useState(0);

  const addToCart = (index, size) => {
    if (cart[index]) {
      const sizes = cart[index].sizes;
      if (sizes[size]) sizes[size] = sizes[size] + 1;
      else sizes[size] = 1;
    } else cart[index] = { ...images[index], sizes: { [size]: 1 } };
    setCart(() => cart);
    setAmount(() => amount + 1);
  };

  return (
    <Router>
      <Header amount={amount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop images={images} add={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
