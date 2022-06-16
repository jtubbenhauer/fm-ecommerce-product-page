import React from "react";
import { useState } from "react";
import hamburger from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import closeIcon from "../images/icon-close.svg";
import MobileMenu from "./MobileMenu";

const Navbar = ({ menuItems }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
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
            {menuItems.map((item) => (
              <li className="font-bold text-lg my-3">{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={
          mobileOpen ? "fixed w-screen h-screen bg-black opacity-75" : "hidden"
        }
      ></div>
      <div className="bg-white w-screen flex items-center p-5 justify-between">
        {/* Hamburger menu and logo */}
        <div className="flex items-center">
          <img
            src={hamburger}
            alt="Hamburger Menu Icon"
            className="pr-3"
            onClick={() => setMobileOpen(!mobileOpen)}
          />

          <img src={logo} alt="Sneakers Logo" />
        </div>
        {/* Profile and cart */}
        <div className="flex items-center gap-4">
          <img src={cart} alt="Shopping Cart Icon" />
          <img src={avatar} alt="User Avatar" className="h-[22px]" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
