import React from "react";
import "./Shop.css";

const Shop = ({ images }) => {
  const items = Object.keys(images).map((img, index) => {
    return (
      <div className="item" key={index}>
        <div className="itemImg">
          <img src={images[img].src} alt={"Picture of: " + images[img].name} />
        </div>
        <div className="itemInfo">
          <h1>{images[img].name}</h1>
          <p>{"$" + images[img].price}</p>
        </div>
        <div className="itemSize">
          <p>Size</p>
          <select name="" id="">
            <option value="XS">XS (24-26)</option>
            <option value="S">S (26-30)</option>
            <option value="M">M (30-32)</option>
            <option value="L">L (32-34)</option>
            <option value="XL">XL (34-36)</option>
            <option value="2XL">2XL (36-38)</option>
            <option value="3XL">3XL (38-46)</option>
            <option value="4XL">4XL (46-52)</option>
          </select>
        </div>
        <button type="button">Add to Cart</button>
      </div>
    );
  });

  return <div id="Shop">{items}</div>;
};

export default Shop;
