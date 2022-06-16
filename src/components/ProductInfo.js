import React from "react";
import Price from "./Price";

const ProductInfo = () => {
  return (
    <div className="flex flex-col text-left  w-screen p-5 gap-3">
      <span className="font-bold text-xs tracking-widest text-orange">
        SNEAKER COMPANY
      </span>
      <h1 className="text-[1.7rem] font-bold leading-8">
        Fall Limited Edition Sneakers
      </h1>
      <p className=" leading-relaxed opacity-80">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber out sole , they'll withstand everything the
        weather can offer.
      </p>
      <Price price={250} discounted={125} />
    </div>
  );
};

export default ProductInfo;
