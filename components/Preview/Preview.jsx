"use client";
import "./preview.css";
// hooks
import { useState } from "react";
//
import { Previewer } from "@/components";
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

export default function Preview() {
  let [selectedProduct, setSelectedProduct] = useState(product1);
  let [showPrev, setShowPrev] = useState(false);
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
  return (
    <>
      <article className="border-2 border-black w-[30rem] ">
        {showPrev && <Previewer togglePrev={() => setShowPrev(false)} />}
        <div onClick={() => setShowPrev(true)}>
          <Image
            src={selectedProduct}
            alt="img"
            className="w-full h-[25rem] rounded-xl"
          />
        </div>
        <ul className="flex  space-x-10">
          {arrOfProducts.map((e, i) => {
            return (
              <li
                onClick={() => setSelectedProduct(e.img)}
                key={i}
                className="h-[8rem] w-[8rem] flex items-end"
              >
                <Image src={e.thum} alt="img" className=" rounded-xl" />
              </li>
            );
          })}
        </ul>
      </article>
    </>
  );
}
