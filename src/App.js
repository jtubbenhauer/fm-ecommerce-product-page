import Product from "./components/Product";
import Navbar from "./components/Navbar";
import imageProductOneThumbnail from "./images/image-product-1-thumbnail.jpg";
import imageProductTwoThumbnail from "./images/image-product-2-thumbnail.jpg";
import { useState, useEffect } from "react";

const menuItems = ["Collections", "Men", "Women", "About", "Contact"];

const product = {
  title: "Fall Limited Edition Sneakers",
  description: `These low-profile sneakers are your perfect casual wear companion.
  Featuring a durable rubber out sole , they'll withstand everything the
  weather can offer.`,
  image: imageProductTwoThumbnail,
  price: 250,
  salePrice: 125,
};

const product1 = {
  title: "Autumn Limited Edition Sneakers",
  description: `These low-profile sneakers are your perfect casual wear companion.
  Featuring a durable rubber out sole , they'll withstand everything the
  weather can offer.`,
  image: imageProductOneThumbnail,
  qty: 3,
  price: 125,
};

function App() {
  const [cartItems, setCartItems] = useState([product1]);
  const [totalItems, setTotalItems] = useState(0);
  let dupe = false;
  let dupeIndex;
  let itemsCount = 0;

  // Get total cart items
  const getTotalItems = () => {
    for (let i = 0; i < cartItems.length; i++) {
      itemsCount += cartItems[i].qty;
    }
    setTotalItems(itemsCount);
  };

  useEffect(() => getTotalItems());

  const addToCart = (obj, qty) => {
    // Check if item exists in cart
    cartItems.forEach((i, index) => {
      if (i.title === obj.title) {
        dupe = true;
        dupeIndex = index;
      }
    });

    // Handle duplicate or new item
    if (dupe) {
      let newArray = cartItems;
      let newTotal = newArray[dupeIndex].qty + qty;
      console.log(newArray[dupeIndex]);
      newArray[dupeIndex].qty = newTotal;
      setCartItems(newArray);
      getTotalItems();
    } else {
      obj.qty = qty;
      setCartItems([...cartItems, obj]);
      getTotalItems();
    }
  };

  return (
    <div className="flex flex-col items-center w-screen h-screen bg-white">
      <Navbar
        menuItems={menuItems}
        cartItems={cartItems}
        totalItems={totalItems}
        setItems={setCartItems}
      />
      <Product product={product} addToCart={addToCart} />
    </div>
  );
}

export default App;
