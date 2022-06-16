import React from "react";
import { useState } from "react";
import hamburger from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";

const Navbar = ({ menuItems }) => {
  return (
    // Navbar container
    <div className="bg-white w-screen flex items-center p-5 justify-between">
      {/* Hamburger menu and logo */}
      <div className="flex items-center">
        <img src={hamburger} alt="Hamburger Menu Icon" className="pr-3" />
        <img src={logo} alt="Sneakers Logo" />
      </div>
      {/* Profile and cart */}
      <div className="flex items-center gap-4">
        <img src={cart} alt="Shopping Cart Icon" />
        <img src={avatar} alt="User Avatar" className="h-[22px]" />
      </div>
    </div>
  );
};

export default Navbar;
