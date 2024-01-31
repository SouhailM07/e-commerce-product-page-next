"use client";
import "./navbar.css";
//
import { useState } from "react";
// !redux
import { useSelector } from "react-redux";
// components
import { Cart } from "@/components";
// assets
import Image from "next/image";
import logo from "@/public/logo.svg";
import avatarImg from "@/public/image-avatar.png";
import cartLogo from "@/public/icon-cart.svg";
import menuLogo from "@/public/icon-menu.svg";
import closeLogo from "@/public/icon-close.svg";

/*========================================================================================*/
// component section
/*========================================================================================*/

export default function Navbar() {
  let counter = useSelector((state) => state.price.count);
  let addItemToCart_b = useSelector((state) => state.price.addItem);
  //
  const menuItems = ["Collections", "Men", "Women", "About", "Contact"];
  const [toggleMenu, setToggleMenu] = useState(false);
  let [toggleCart, setToggleCart] = useState(false);
  let toggleClass = ["toggle--hide", "toggle--show"];

  let toggleF = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header>
      <nav>
        <div id="Navbar-s1">
          <button
            onClick={() => toggleF()}
            id="toggleBtn"
            className="sm:visible md:hidden mr-[1rem]"
          >
            <Image src={menuLogo} alt="logo" />
          </button>
          <Image src={logo} alt="Logo" />

          <div
            id="Navbar-s1-links"
            className={toggleClass[+toggleMenu] || "toggle--hide"}
          >
            <div id="Navbar-s1-links-container">
              <button
                onClick={() => toggleF()}
                className="md:hidden sm:visible mt-[1.5rem] mb-[3rem]"
              >
                <Image src={closeLogo} alt="logo" />
              </button>
              <ul role="list">
                {menuItems.map((item, index) => (
                  <li key={index} role="listitem">
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/*======================================================================================*/}
        <div id="Navbar-s2">
          <button>
            <Image
              onClick={() => setToggleCart(!toggleCart)}
              src={cartLogo}
              alt="cart logo"
            />
          </button>
          <div className="relative right-[1.3rem] rounded-full w-[1.7rem] text-white text-center h-[1.5rem] bottom-[1rem] bg-Orange">
            {addItemToCart_b ? counter : 0}
          </div>
          <Image src={avatarImg} alt="Avatar" />
          {toggleCart && <Cart />}
        </div>
      </nav>
    </header>
  );
}
