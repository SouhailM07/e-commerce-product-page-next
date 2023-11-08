import "./navbar.css";
// assets
import Image from "next/image";
import logo from "@/public/logo.svg";
import avatarImg from "@/public/image-avatar.png";
import cartLogo from "@/public/icon-cart.svg";

export default function Navbar() {
  const menuItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <nav>
      <div id="Navbar-s1">
        <Image src={logo} alt="Logo" />

        {/* Second element: List */}
        <div>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Third element: Div with button and image */}
      <div id="Navbar-s2">
        <button>
          <Image src={cartLogo} alt="cart logo" />
        </button>
        <Image src={avatarImg} alt="Button Image" />
      </div>
    </nav>
  );
}
