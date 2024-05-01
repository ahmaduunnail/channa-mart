import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <>
      <button className="flex px-5 py-2.5 gap-4 items-center pointer-events-none cursor-none bg-white rounded-[2rem]">
        <Image src="/logo.png" width="80" height="70" quality={80} className="select-none pointer-events-none" />
        <h1 className="font-semibold text-[40px] select-none pointer-events-none">ChannaMart.</h1>
      </button>
    </>
  );
}
