import "./navbar.css";
// assets
import Image from "next/image";
import logo from "@/public/logo.svg";
import avatarImg from "@/public/image-avatar.png";
import cartLogo from "@/public/icon-cart.svg";

export default function Navbar() {
  const menuItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <nav className="border-b-[3px] border-lightGrayishBlue h-[7rem] m-auto max-w-[85rem] flex items-center justify-between">
      {/* First element: Image */}
      <div className="flex items-center">
        <Image src={logo} alt="Logo" className="w-[13rem] h-[2rem] mr-[4rem]" />

        {/* Second element: List */}
        <ul className="flex space-x-7 items-center ">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="text-grayishBlue hover:text-veryDarkBlue hover:font-bold border-b-[6px] border-transparent hover:border-Orange h-[7rem] pt-[2.6rem]"
            >
              <a href="#" className="text-[1.2rem]">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Third element: Div with button and image */}
      <div className="flex items-center w-[7rem] justify-between">
        <button>
          <Image src={cartLogo} alt="cart logo" />
        </button>
        <Image
          src={avatarImg}
          alt="Button Image"
          className="cursor-pointer h-[3.5rem] w-[3.5rem] hover:border-2 hover:border-Orange rounded-full"
        />
      </div>
    </nav>
  );
}
