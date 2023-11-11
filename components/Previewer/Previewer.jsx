"use client";
import "./previewer.css";
// 
import { ArrowBtn } from "@/components";
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
            <ArrowBtn image={leftArrow} pos="left-[1.6rem]"btnF={() => leftArrowF()}/>
            <Image
              src={arrOfProducts[selectedPreviewImage].img}
              alt="image"
              className="lg:w-[32rem] md:w-[42vw] md:h-[42vw] lg:h-[32rem] rounded-xl"
            />
            <ArrowBtn image={rightArrow} btnF={() => rightArrowF()}pos="right-[1.7rem]"/>
          </div>
          {/*  */}
          <ul className="flex m-auto md:w-[38vw] lg:w-[27rem] justify-around ">
            {arrOfProducts.map((e, i) => {
              return (
                <li
                  key={i}
                  className="flex items-end"
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


let CloseBtn = ({ closeF }) => {
  return (
    <button onClick={closeF}>
      <Image
        src={closeLogo}
        alt="logo"
        className="relative md:left-[45.5vw] lg:left-[34.5rem] mb-[0.8rem]"
      />
    </button>
  );
};
