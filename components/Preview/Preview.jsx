"use client";
import "./preview.css";
// hooks
import { useState, useEffect } from "react";
//
import { Previewer, ArrowBtn } from "@/components";
// assets
import Image from "next/image";
import productThum1 from "@/public/image-product-1-thumbnail.jpg";
import productThum2 from "@/public/image-product-2-thumbnail.jpg";
import productThum3 from "@/public/image-product-3-thumbnail.jpg";
import productThum4 from "@/public/image-product-4-thumbnail.jpg";
import product1 from "@/public/image-product-1.jpg";
import product2 from "@/public/image-product-2.jpg";
import product3 from "@/public/image-product-3.jpg";
import product4 from "@/public/image-product-4.jpg";

import leftArrow from "@/public/icon-previous.svg";
import rightArrow from "@/public/icon-next.svg";

export default function Preview() {
  let [showPrev, setShowPrev] = useState(false);

  let leftArrowF = () => {
    if (selectedProduct < 1) {
      setSelectedProduct(3);
    } else {
      setSelectedProduct(--selectedProduct);
    }
  };
  let rightArrowF = () => {
    if (selectedProduct > 2) {
      setSelectedProduct(0);
    } else {
      setSelectedProduct(++selectedProduct);
    }
  };
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
  let [selectedProduct, setSelectedProduct] = useState(0);
  useEffect(() => {
    let defaultCheck = document.querySelector(
      "#Preview ul input[type='radio']"
    );
    defaultCheck.click();
  }, [showPrev]);
  return (
    <>
      <article id="Preview">
        {showPrev && <Previewer togglePrev={() => setShowPrev(false)} />}
        <div id="XsImg">
          <ArrowBtn arrowAlt="left arrow" image={leftArrow} btnF={() => leftArrowF()} />
          <ArrowBtn arrowAlt="right arrow" image={rightArrow} btnF={() => rightArrowF()} />
        </div>
        <div onClick={() => setShowPrev(true)}>
          <Image
            src={arrOfProducts[selectedProduct].img}
            alt="img"
            id="Preview-bigImg"
          />
        </div>
        <ul role="list">
          {arrOfProducts.map((e, i) => {
            return (
              <li role="listitem" onClick={() => setSelectedProduct(i)} key={i}>
                <input
                  type="radio"
                  id={e + i}
                  name="projects"
                  className="hidden"
                />
                <label htmlFor={e + i} className="grid place-items-center">
                  <div className="absolute lg:h-[5.8rem] md:h-[7.9vw] md:w-[7.8vw] rounded-xl lg:w-[5.8rem]"></div>
                  <Image src={e.thum} alt="img" />
                </label>
              </li>
            );
          })}
        </ul>
      </article>
    </>
  );
}
