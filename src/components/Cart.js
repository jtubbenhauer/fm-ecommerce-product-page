import React from "react";
import deleteIcon from "../images/icon-delete.svg";

const Cart = ({ items, setItems }) => {
  const deleteItem = (item) => {
    let newArray = [...items];
    for (let i = 0; i < newArray.length; i++) {
      if (item.title === newArray[i].title) {
        newArray.splice(i, 1);
        setItems(newArray);
      }
    }
  };

  return (
    <div className=" bg-white shadow-lg rounded-lg w-[95vw] flex flex-col">
      <span className="font-bold p-5">Cart</span>
      <div className="border-t border-y-light-grayish-blue"></div>
      <div className="flex flex-col p-5">
        {items.map((i) => (
          <div key={i.title} className="flex mb-3 items-center">
            <img src={i.image} className="w-12 rounded-md mr-3" />
            <div className="text-very-dark-blue text-sm">
              <p>{i.title.slice(0, 25)}...</p>
              <p>
                ${i.price.toFixed(2)} x {i.qty}
                <span className="font-bold ml-2">
                  ${(i.qty * i.price).toFixed(2)}
                </span>
              </p>
            </div>
            <img
              className="ml-auto cursor-pointer"
              src={deleteIcon}
              onClick={() => deleteItem(i)}
            />
          </div>
        ))}
        <button className="bg-orange rounded-lg text-light-grayish-blue py-3 text-sm font-bold">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
