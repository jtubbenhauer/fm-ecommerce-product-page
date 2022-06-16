import React from "react";
import { useState } from "react";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import cart from "../images/icon-cart-white.svg";

const AddToCart = () => {
  const [quantity, setQuantity] = useState(0);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    quantity === 0 ? setQuantity(0) : setQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-col p-5 w-screen">
      <div className="flex items-center justify-between bg-light-grayish-blue p-5 rounded-lg">
        <div
          onClick={decrease}
          className="flex items-center justify-center w-5 h-5 "
        >
          <img src={minus} alt="Minus Icon" />
        </div>
        <span className="text-sm font-bold">{quantity}</span>
        <div
          onClick={increase}
          className="flex items-center justify-center w-5 h-5 "
        >
          <img src={plus} alt="Plus Icon" />
        </div>
      </div>
      <button className="flex gap-2 items-center justify-center bg-orange rounded-lg p-4 text-light-grayish-blue font-bold shadow-orange/50 shadow-[0_10px_20px]">
        <img src={cart} className="w-4 h-4" />
        <span>Add to cart</span>
      </button>
    </div>
  );
};

export default AddToCart;
