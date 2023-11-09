// style
import "./mycontainer.css";
// components
import { Navbar, Preview } from "@/components";

export default function MyContainer() {
  return (
    <>
      <Navbar />
      <main className="max-w-[85rem] mt-[3rem] mx-auto">
        <Preview />
      </main>
    </>
  );
}
