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

function App() {
  const [cartItems, setCartItems] = useState([
    { title: "one", description: "one", qty: 2 },
    { title: "two", description: "two", qty: 2 },
    { title: "three", description: "three", qty: 2 },
  ]);
  const [totalItems, setTotalItems] = useState(0);

  const addToCart = (obj, qty) => {
    obj.qty = qty;
    let dupe = false;
    let dupeIndex;

    cartItems.map((i, index) => {
      if (i.title === obj.title) {
        dupe = true;
        dupeIndex = index;
      }
    });

    if (dupe) {
      let newArray = cartItems;
      console.log(newArray[dupeIndex].qty, obj.qty);
    } else {
      setCartItems([...cartItems, obj]);
    }
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
