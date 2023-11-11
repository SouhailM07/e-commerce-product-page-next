import "./arrowbtn.css";
//
import Image from "next/image";
export default function ArrowBtn({ image, pos, btnF }) {
  return (
    <button onClick={btnF} className={`${pos} ArrowBtn`}>
      <Image src={image} alt="logo" />
    </button>
  );
}
