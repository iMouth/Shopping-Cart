import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ImageIF } from "./types";

function importPictures(r: __WebpackModuleApi.RequireContext) {
  let images: ImageIF[] = [];
  r.keys().map((item, index: number) => {
    images[index] = {
      name: item.replace("./", "").split(".")[0],
      src: r(item),
      price: "49.00",
    };
  });
  return images;
}
const images = importPictures(require.context("./componets/Shop/assets", false, /\.(png|jpe?g|svg|webp)$/));
console.log(images);
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App images={images} />
  </React.StrictMode>
);
