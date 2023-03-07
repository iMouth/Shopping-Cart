import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/Kill_Crew_Logo.webp";
import cart from "./assets/cart.png";
import "./Header.css";

const Header = ({ amount }: {amount: number}) => {
  return (
    <div id="Header">
      <Link to="/">
        <img id="logo" src={logo} alt="" />
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <div className="cart-box">
          <Link to="/cart">
            <img src={cart} alt="Cart" />
            {amount > 0 ? (
              <div className="cart-amount">
                <p>{amount}</p>
              </div>
            ) : null}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
