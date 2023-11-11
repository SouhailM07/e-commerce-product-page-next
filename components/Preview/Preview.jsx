"use client";
import "./preview.css";
// hooks
import { useState } from "react";
//
import { Previewer, ArrowBtn } from "@/components";
// assets
import Image from "next/image";
import productThum1 from "../../public/image-product-1-thumbnail.jpg";
import productThum2 from "../../public/image-product-2-thumbnail.jpg";
import productThum3 from "../../public/image-product-3-thumbnail.jpg";
import productThum4 from "../../public/image-product-4-thumbnail.jpg";
import product1 from "../../public/image-product-1.jpg";
import product2 from "../../public/image-product-2.jpg";
import product3 from "../../public/image-product-3.jpg";
import product4 from "../../public/image-product-4.jpg";

import leftArrow from "../../public/icon-previous.svg";
import rightArrow from "../../public/icon-next.svg";

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
  return (
    <>
      <article id="Preview">
        {showPrev && <Previewer togglePrev={() => setShowPrev(false)} />}
        <div id="XsImg">
          <ArrowBtn image={leftArrow} btnF={() => leftArrowF()} />
          <ArrowBtn image={rightArrow} btnF={() => rightArrow()} />
        </div>
        <div onClick={() => setShowPrev(true)}>
          <Image
            src={arrOfProducts[selectedProduct].img}
            alt="img"
            id="Preview-bigImg"
          />
        </div>
        <ul>
          {arrOfProducts.map((e, i) => {
            return (
              <li onClick={() => setSelectedProduct(i)} key={i}>
                <Image src={e.thum} alt="img" />
              </li>
            );
          })}
        </ul>
      </article>
    </>
  );
}
