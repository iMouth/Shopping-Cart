import React from "react";
import uniqid from "uniqid";
import "./Cart.css";

function Cart({ cart }) {
  const itemList = [];
  Object.keys(cart).forEach((item) => {
    Object.keys(cart[item].sizes).forEach((size) => {
      itemList.push(
        <div key={uniqid()}>
          <div className="cart-img">
            <img src={cart[item].src} alt={"Picture of: " + cart[item].name}></img>
          </div>
          <div className="cart-info">
            <h1>{cart[item].name}</h1>
            <p>{size}</p>
            <p>{cart[item].price}</p>
            <div className="cart-amount">
              <button type="button">-</button>
              <p>{cart[item].sizes[size]}</p>
              <button type="button">+</button>
            </div>
          </div>
        </div>
      );
    });
  });
  return <div id="Cart">{itemList}</div>;
}

export default Cart;
