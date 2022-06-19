import React from "react";
import { useState } from "react";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import cart from "../images/icon-cart-white.svg";

const AddToCart = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-col lg:flex-row p-5 lg:p-0 lg:mt-2 lg:justify-between lg:items-center lg:gap-5">
      <div className="flex items-center justify-between bg-light-grayish-blue p-4 px-5 mb-4 lg:mb-0 rounded-lg lg:w-1/3">
        <div
          onClick={decrease}
          className="flex items-center justify-center w-5 h-5 cursor-pointer"
        >
          <img src={minus} alt="Minus Icon" />
        </div>
        <span className="text-sm font-bold">{quantity}</span>
        <div
          onClick={increase}
          className="flex items-center justify-center w-5 h-5 cursor-pointer"
        >
          <img src={plus} alt="Plus Icon" />
        </div>
      </div>
      <button
        className="flex gap-2 items-center justify-center lg:w-2/3 bg-orange rounded-lg p-4 lg:p-3 text-light-grayish-blue font-bold shadow-orange/50 shadow-[0_10px_20px]"
        onClick={() => addToCart(product, quantity)}
      >
        <img src={cart} className="w-4 h-4" />
        <span>Add to cart</span>
      </button>
    </div>
  );
};

export default AddToCart;
