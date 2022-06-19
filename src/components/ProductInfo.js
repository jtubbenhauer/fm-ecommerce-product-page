import React from "react";
import Price from "./Price";
import AddToCart from "./AddToCart";

const ProductInfo = ({ product, addToCart }) => {
  return (
    <div className="flex flex-col text-left  w-screen p-5 gap-3 md:max-w-lg">
      <span className="font-bold text-xs tracking-widest text-orange">
        SNEAKER COMPANY
      </span>
      <h1 className="text-[1.7rem] font-bold leading-8">{product.title}</h1>
      <p className=" leading-relaxed opacity-60">{product.description}</p>
      <Price price={250} discounted={125} />
      <AddToCart product={product} addToCart={addToCart} />
    </div>
  );
};

export default ProductInfo;
