import React from "react";
import { useState } from "react";
import hamburger from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import closeIcon from "../images/icon-close.svg";
import Cart from "./Cart";

const Navbar = ({ menuItems, cartItems, totalItems }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      {/* Mobile menu and shadow */}
      <div
        className={
          mobileOpen
            ? "fixed top-0 left-0 bottom-0 w-[65%] max-w-[275px] min-w-[160px] bg-white z-50"
            : "hidden"
        }
      >
        <div className="flex flex-col items-start m-5">
          <img
            src={closeIcon}
            alt="X Close Icon"
            onClick={() => setMobileOpen(!mobileOpen)}
          />
          <ul className="mt-8">
            {menuItems.map((item, index) => (
              <li className="font-bold text-lg my-3" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={
          mobileOpen
            ? "fixed w-screen h-screen bg-black opacity-75 z-30"
            : "hidden"
        }
      ></div>
      <div className="bg-white w-screen flex items-center p-5 justify-between sticky top-0 z-20">
        {/* Hamburger menu and logo */}
        <div className="flex items-center">
          <img
            src={hamburger}
            alt="Hamburger Menu Icon"
            className="pr-3 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          />

          <img src={logo} alt="Sneakers Logo" />
          {/* Desktop menu */}
          <ul className="hidden md:block ml-10">
            {menuItems.map((item, index) => (
              <li className="inline-block mr-5" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Profile and cart */}
        <div className="flex items-center gap-4">
          <img
            src={cart}
            alt="Shopping Cart Icon"
            onClick={() => setCartOpen(!cartOpen)}
          />
          <div>{totalItems}</div>
          <img src={avatar} alt="User Avatar" className="h-[22px]" />
        </div>
      </div>
      {/* Floating shopping cart */}
      <div className={cartOpen ? "fixed top-[4.3rem] z-50" : "hidden"}>
        <Cart />
      </div>
    </>
  );
};

export default Navbar;
