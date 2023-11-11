"use client";
import "./navbar.css";
//
import { useState } from "react";
// components
import { Cart } from "@/components";
// assets
import Image from "next/image";
import logo from "@/public/logo.svg";
import avatarImg from "@/public/image-avatar.png";
import cartLogo from "@/public/icon-cart.svg";
import menuLogo from "../../public/icon-menu.svg";
import closeLogo from "../../public/icon-close.svg";

/*========================================================================================*/
// component section
/*========================================================================================*/

export default function Navbar() {
  const menuItems = ["Collections", "Men", "Women", "About", "Contact"];
  const [toggleMenu, setToggleMenu] = useState(false);
  let [toggleCart, setToggleCart] = useState(false);
  let toggleClass = ["toggle--hide", "toggle--show"];

  let toggleF = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
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
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
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
        <Image src={avatarImg} alt="Button Image" />
        {toggleCart && <Cart />}
      </div>
    </nav>
  );
}
