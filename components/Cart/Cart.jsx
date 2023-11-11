"use client";
import "./cart.css";
import Image from "next/image";
import deleteLogo from "../../public/icon-delete.svg";
import productImg from "../../public/image-product-1.jpg";
import { useSelector } from "react-redux";

export default function Cart() {
  let counter = useSelector((state) => state.price.count);
  let price = useSelector((state) => state.price.price);
  return (
    <>
      <div className="shadow-xl pb-[1rem] flex flex-col justify-evenly rounded-xl px-[1.5rem] bg-white absolute md:right-[2vw] lg:right-[13vw] top-[6rem]  w-[25rem] h-[15rem]">
        <h3 className="text-[1.3rem] font-bold">Card</h3>
        <hr className="outline-none h-[2px] bg-grayishBlue" />
        <div>
          <div className="flex justify-between items-center mt-[0.5rem] mb-[1rem] ">
            <Image
              src={productImg}
              alt=""
              className="h-[3.2rem] w-[3.2rem] rounded-lg"
            />
            <div className="flex flex-col ">
              <span>Fall Limited Edition Sneakers</span>
              <span>
                $125.00 * {counter}
                <b className="mx-[1rem]">${price}.00</b>
              </span>
            </div>
            <Image src={deleteLogo} alt="" className="h-[1rem] w-[1rem]" />
          </div>
          <button className="h-[3.8rem] rounded-xl bg-Orange w-full grid place-items-center text-white font-bold text-[1.2rem]">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
