import React from "react";
import { useState, useRef } from "react";
import hamburger from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import closeIcon from "../images/icon-close.svg";
import Cart from "./Cart";

const Navbar = ({ menuItems, cartItems, totalItems, setItems }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // Close cart if clicked outside
  const cartDropdown = useRef(null);
  const cartIcon = useRef(null);
  const closeOpenCart = (e) => {
    if (
      cartDropdown.current &&
      cartOpen &&
      !cartDropdown.current.contains(e.target) &&
      cartIcon.current &&
      !cartIcon.current.contains(e.target)
    ) {
      setCartOpen(false);
    }
  };
  document.addEventListener("mousedown", closeOpenCart);

  //Close mobile menu when clicked outside
  const mobileMenu = useRef(null);
  const closeMobileMenu = (e) => {
    if (
      mobileMenu.current &&
      mobileOpen &&
      !mobileMenu.current.contains(e.target)
    ) {
      setMobileOpen(false);
    }
  };
  document.addEventListener("mousedown", closeMobileMenu);

  return (
    <>
      {/* Mobile menu and shadow */}
      <div
        className={
          mobileOpen
            ? "fixed top-0 left-0 bottom-0 w-[65%] max-w-[275px] min-w-[160px] bg-white z-40"
            : "hidden"
        }
        ref={mobileMenu}
      >
        <div className="flex flex-col items-start m-5">
          <img
            src={closeIcon}
            alt="X Close Icon"
            className="cursor-pointer"
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
      <div className="bg-white w-screen flex items-center p-5 justify-between sticky top-0 z-20 lg:w-4/5">
        {/* Hamburger menu and logo */}
        <div className="flex items-center">
          <img
            src={hamburger}
            alt="Hamburger Menu Icon"
            className="pr-3 md:hidden cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          />
          <img src={logo} alt="Sneakers Logo" className="cursor-pointer" />
          {/* Desktop menu */}
          <ul className="hidden md:block ml-14">
            {menuItems.map((item, index) => (
              <li
                className="group inline-block mr-8 text-very-dark-blue opacity-80 hover:opacity-100 cursor-pointer"
                key={index}
              >
                {item}
                <div className="border-orange group-hover:border-2 w-14 fixed mt-10"></div>
              </li>
            ))}
          </ul>
        </div>
        {/* Profile and cart */}
        <div className="flex items-center gap-4 lg:gap-10">
          <div className="flex items-center cursor-pointer" ref={cartIcon}>
            <img
              src={cart}
              alt="Shopping Cart Icon"
              onClick={() => setCartOpen(!cartOpen)}
              ref={cartIcon}
            />
          </div>
          <div
            onClick={() => setCartOpen(!cartOpen)}
            ref={cartIcon}
            className="fixed cursor-pointer bg-orange rounded-md text-white text-[0.6rem] px-2 -translate-y-3 translate-x-2"
          >
            {totalItems}
          </div>
          <img
            src={avatar}
            alt="User Avatar"
            className="h-[22px] md:h-[40px] hover:border-orange hover:border-2 hover: cursor-pointer rounded-full"
          />
        </div>
      </div>
      {/* Floating shopping cart */}
      <div
        ref={cartDropdown}
        className={
          cartOpen
            ? "fixed top-[4.3rem] z-50 opacity-100 visible transition-[opacity_visibility] ease-in-out"
            : "fixed invisible opacity-0 z-50 "
        }
      >
        <Cart items={cartItems} setItems={setItems} />
      </div>
      <div className="border w-4/5 mt-4 border-light-grayish-blue"></div>
    </>
  );
};

export default Navbar;
