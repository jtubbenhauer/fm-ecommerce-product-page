import React from "react";

const Price = ({ price, discounted }) => {
  const discount = ((price - discounted) / price) * 100;

  return (
    <div className="flex items-center justify-between mt-3 lg:flex-col lg:items-start">
      <div className="flex gap-3 items-center">
        <span className="font-bold text-2xl">${discounted.toFixed(2)}</span>
        <div className="flex items-center justify-center p-1 px-2 bg-pale-orange rounded-md ">
          <span className="text-sm text-orange font-bold">{discount}%</span>
        </div>
      </div>
      <div>
        <span className="line-through font-bold text-dark-grayish-blue">
          ${price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default Price;
