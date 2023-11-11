import "./info.css";
// assets
import Image from "next/image";
import plus from "../../public/icon-plus.svg";
import minus from "../../public/icon-minus.svg";
/*========================================================================================*/
// component section
/*========================================================================================*/

export default function Info() {
  return (
    <>
      <article id="Info">
        {/* Info container to flex it to center */}
        <div>
          <h3>Sneaker Company</h3>
          <h1>Fall Limited Edition Sneakers</h1>
          <p id="Info-details">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          {/* pricing section to view prices*/}
          <Pricing_section_price />
          {/* pricing section to buy */}
          <Pricing_section_buy />
        </div>
      </article>
    </>
  );
}

/*========================================================================================*/
// small components , maybe reusable
/*========================================================================================*/

let CartLogo = () => {
  return (
    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
        fill="white"
        fillRule="nonzero"
      />
    </svg>
  );
};

let BuyBtn = ({ img, square }) => {
  return (
    <>
      <button id="BuyBtn" className={square}>
        <Image src={img} alt="" />
      </button>
    </>
  );
};

const Pricing_section_price = () => {
  return (
    <>
      <section id="pricing_section_price">
        <div id="newPrice">
          <span id="newPrice-price">$125.00</span>
          <span id="newPrice-percent">50%</span>
        </div>
        <div id="oldPrice" className="text-grayishBlue line-through font-bold">
          $250.00
        </div>
      </section>
    </>
  );
};

const Pricing_section_buy = () => {
  return (
    <>
      <section id="pricing_section_buy">
        <div id="buyControls">
          <BuyBtn img={minus} square="rounded-tl-xl rounded-bl-xl " />
          <div id="buyControls-count">0</div>
          <BuyBtn img={plus} square="rounded-tr-xl rounded-br-xl " />
        </div>
        <button id="buyBuy">
          <span>
            <CartLogo />
          </span>
          <span>Add to cart</span>
        </button>
      </section>
    </>
  );
};
