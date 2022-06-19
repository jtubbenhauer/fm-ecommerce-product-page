import React from "react";
import Price from "./Price";
import AddToCart from "./AddToCart";

const ProductInfo = ({ product, addToCart }) => {
  return (
    <div className="flex flex-col text-left w-screen p-5 gap-3 lg:max-w-lg lg:-mt-8">
      <span className="font-bold text-xs tracking-widest text-orange">
        SNEAKER COMPANY
      </span>
      <h1 className="text-[1.7rem] font-bold leading-8 lg:text-[2.5rem] lg:leading-none">
        {product.title}
      </h1>
      <p className="leading-relaxed opacity-80">{product.description}</p>
      <Price price={250} discounted={125} />
      <AddToCart product={product} addToCart={addToCart} />
    </div>
  );
};

export default ProductInfo;
