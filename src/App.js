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
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  // Current cart items
  const addToCart = (obj, qty) => {
    let newArray = [...cartItems];
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
