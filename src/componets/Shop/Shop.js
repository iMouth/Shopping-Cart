import React from "react";
import "./Shop.css";
import { ImageIF } from "../../types";

// interface Props {
//   images: { [key: string]: ImageIF};
//   add: (index: number, size: string) => void;
// }

const Shop = ({ images, add }) => {
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
        <form className="itemSize">
          <p>Size</p>
          <select data-item-number={index} name="Size Chart">
            <option value="XS">XS (24-26)</option>
            <option value="S">S (26-30)</option>
            <option value="M">M (30-32)</option>
            <option value="L">L (32-34)</option>
            <option value="XL">XL (34-36)</option>
            <option value="2XL">2XL (36-38)</option>
            <option value="3XL">3XL (38-46)</option>
            <option value="4XL">4XL (46-52)</option>
          </select>
        </form>
        <button
          type="button"
          onClick={() => {
            const item = document.querySelector("[data-item-number='" + index + "']");
            const size = item.options[item.selectedIndex].text;
            add(index, size);
          }}
        >
          Add to Cart
        </button>
      </div>
    );
  });

  return <div id="Shop">{items}</div>;
};

export default Shop;
