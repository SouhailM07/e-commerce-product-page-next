"use client";
import "./previewer.css";
// 
import { ArrowBtn } from "@/components";
//
import { useState,useEffect } from "react";
//
import Image from "next/image";
import productThum1 from "@/public/image-product-1-thumbnail.jpg";
import productThum2 from "@/public/image-product-2-thumbnail.jpg";
import productThum3 from "@/public/image-product-3-thumbnail.jpg";
import productThum4 from "@/public/image-product-4-thumbnail.jpg";
import product1 from "@/public/image-product-1.jpg";
import product2 from "@/public/image-product-2.jpg";
import product3 from "@/public/image-product-3.jpg";
import product4 from "@/public/image-product-4.jpg";
//
import leftArrow from "@/public/icon-previous.svg";
import rightArrow from "@/public/icon-next.svg";

export default function Previewer({ togglePrev }) {
  let [selectedPreviewImage, setSelectedPreviewImage] = useState(0);
  useEffect(()=>{
  let selectedCheck = document.querySelectorAll("#Previewer ul input[type='radio']");
    selectedCheck[selectedPreviewImage].click()
},[selectedPreviewImage])
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
      setSelectedPreviewImage(3);
    } else {
      setSelectedPreviewImage(--selectedPreviewImage);
    }
  };
  let rightArrowF = () => {
    if (selectedPreviewImage > 2) {
      setSelectedPreviewImage(0);
    } else {
      setSelectedPreviewImage(++selectedPreviewImage);
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
                  className="flex items-end "
                ><input
                type="radio"
                name="projects"
                className="hidden "
              />
              <label  className="grid place-items-center">
                <div className=" absolute lg:h-[5rem] md:h-[7vw] md:w-[7vw] rounded-xl lg:w-[5.1rem]"></div>
                  <Image src={e.thum} alt="logo" className=" rounded-xl" />
                
              </label>
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
    <>
    <button onClick={closeF}>
      <svg
       className="relative md:left-[45.5vw] lg:left-[34.5rem] mb-[0.8rem] fill-[#69707D] hover:fill-Orange"
       width="14" height="15" xmlns="http://www.w3.org/2000/svg">
    <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"  fill-rule="evenodd"/>
    </svg>
    </button>
       </>
  );
};