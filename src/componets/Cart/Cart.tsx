import React from "react";
import uniqid from "uniqid";
import { useNavigate } from "react-router-dom";
import lock from "./assets/lock.png";
import "./Cart.css";
import { CartIF } from "../../types";

interface Props {
  cart: CartIF[];
  inc: (item: number, size: string) => void;
  dec: (item: number, size: string) => void;
  total: number;
  deleteItem: (item: number, size: string) => void;
}

const Cart = ({ cart, inc, dec, total, deleteItem }: Props) => {
  let navigate = useNavigate();
  const itemList: any = [];
  Object.keys(cart).forEach((item: any) => {
    Object.keys(cart[item].sizes).forEach((size) => {
      if (cart[item].sizes[size] < 1) return;
      const i: CartIF = cart[item];
      itemList.push(
        <div className="cart-item" key={uniqid()}>
          <span className="itemClose" onClick={() => deleteItem(item, size)}></span>
          <div className="cart-img">
            <img src={i.src} alt={"Picture of: " + i.name}></img>
          </div>
          <div className="cart-info">
            <h1>{i.name}</h1>
            <p>{size}</p>
            <p>{"$" + i.price}</p>
            <div className="amount">
              <button type="button" onClick={() => (i.sizes[size] !== 1 ? dec(item, size) : null)}>
                -
              </button>
              <p>{i.sizes[size]}</p>
              <button type="button" onClick={() => inc(item, size)}>
                +
              </button>
            </div>
            <p>
              Total: $<span className="total">{(parseInt(i.price) * i.sizes[size]).toFixed(2)}</span>
            </p>
          </div>
        </div>
      );
    });
  });

  if (itemList.length === 0) {
    return <p className="noItems">There are no items in your cart.</p>;
  }

  return (
    <div id="Cart">
      <div>{itemList}</div>
      <div className="checkout">
        <p className="back" onClick={() => navigate("/shop")}>
          &#x2190; Go Back
        </p>
        <p className="subtotal">
          <span>Subtotal:&nbsp;</span>
          <span>${total.toFixed(2)}</span>
        </p>
        <button type="button" className="pay">
          {" "}
          <img src={lock} alt="" />
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
