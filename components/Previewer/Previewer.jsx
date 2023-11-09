"use client";
import "./previewer.css";
//
import { useState } from "react";
//
import Image from "next/image";
import productThum1 from "../../public/image-product-1-thumbnail.jpg";
import productThum2 from "../../public/image-product-2-thumbnail.jpg";
import productThum3 from "../../public/image-product-3-thumbnail.jpg";
import productThum4 from "../../public/image-product-4-thumbnail.jpg";
import product1 from "../../public/image-product-1.jpg";
import product2 from "../../public/image-product-2.jpg";
import product3 from "../../public/image-product-3.jpg";
import product4 from "../../public/image-product-4.jpg";
//
import leftArrow from "../../public/icon-previous.svg";
import rightArrow from "../../public/icon-next.svg";
import closeLogo from "../../public/icon-close.svg";

export default function Previewer({ togglePrev }) {
  let [selectedPreviewImage, setSeletedPreviewImage] = useState(0);

  let arrOfProducts = [
    {
      thum: productThum1,
      img: product1,
    },
    {
      thum: productThum2,
      img: product2,
    },
    {
      thum: productThum3,
      img: product3,
    },
    {
      thum: productThum4,
      img: product4,
    },
  ];
  let leftArrowF = () => {
    if (selectedPreviewImage < 1) {
      setSeletedPreviewImage(3);
    } else {
      setSeletedPreviewImage(--selectedPreviewImage);
    }
  };
  let rightArrowF = () => {
    if (selectedPreviewImage > 2) {
      setSeletedPreviewImage(0);
    } else {
      setSeletedPreviewImage(++selectedPreviewImage);
    }
  };
  return (
    <>
      <div id="Previewer">
        <div>
          <CloseBtn closeF={togglePrev} />
          {/*  */}
          <div className="flex items-center">
            <MoveArrow image={leftArrow} pos="left-[2rem]"btnF={() => leftArrowF()}/>
            <Image
              src={arrOfProducts[selectedPreviewImage].img}
              alt="image"
              className="w-[32rem] h-[32rem] rounded-xl"
            />
            <MoveArrow image={rightArrow} btnF={() => rightArrowF()}pos="right-[2rem]"/>
          </div>
          {/*  */}
          <ul className="flex m-auto w-[30rem] justify-around ">
            {arrOfProducts.map((e, i) => {
              return (
                <li
                  key={i}
                  className="h-[6rem] w-[4.5rem] flex items-end"
                >
                  <Image src={e.thum} alt="logo" className=" rounded-xl" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

// small components

let MoveArrow = ({ image, pos, btnF }) => {
  return (
    <button
      onClick={btnF}
      className={`${pos} h-[3.5rem] relative bg-white grid place-items-center rounded-full w-[3.5rem]`}
    >
      <Image src={image} alt="logo" />
    </button>
  );
};

let CloseBtn = ({ closeF }) => {
  return (
    <button onClick={closeF}>
      <Image
        src={closeLogo}
        alt="logo"
        className="relative left-[34.5rem] mb-[0.8rem]"
      />
    </button>
  );
};
