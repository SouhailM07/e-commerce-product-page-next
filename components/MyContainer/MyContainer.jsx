// style
import "./mycontainer.css";
// components
import { Navbar, Preview, Info } from "@/components";

export default function MyContainer() {
  return (
    <>
      <Navbar />
      <main className="max-w-[80rem] md:flex-row xs:flex-col  flex md:justify-between mt-[3rem] mx-auto">
        <Preview />
        <Info />
      </main>
    </>
  );
}
