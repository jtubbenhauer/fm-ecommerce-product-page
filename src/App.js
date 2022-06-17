import Product from "./components/Product";
import Navbar from "./components/Navbar";
import { useState } from "react";

const menuItems = ["Collections", "Men", "Women", "About", "Contact"];

const product = {
  title: "Fall Limited Edition Sneakers",
  description: `These low-profile sneakers are your perfect casual wear companion.
  Featuring a durable rubber out sole , they'll withstand everything the
  weather can offer.`,
};

let totalItems = 0;

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Current cart items
  const addToCart = (obj, qty) => {
    obj.qty = qty;

    let itemExists = false;

    cartItems.forEach((i) => {
      if (i.name === obj.name) {
        itemExists = true;
        i.qty += obj.qty;
      }
      totalItems += i.qty;
    });

    if (itemExists) {
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, obj]);
    }

    console.log(cartItems);
    console.log(totalItems);
  };

  return (
    <div className="flex flex-col items-center w-screen h-screen bg-white">
      <Navbar
        menuItems={menuItems}
        cartItems={cartItems}
        totalItems={totalItems}
      />
      <Product product={product} addToCart={addToCart} />
    </div>
  );
}

export default App;
