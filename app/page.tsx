import Image from "next/image";
import { NavBar } from "./components/NavBar";
import { TableContent } from "./components/TableContent";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="my-20">
        <div className="mx-auto max-w-[96rem] border rounded-2xl px-8 border-neutral-900">
          <TableContent/>
        </div>
      </div>

    </>

  );
}
