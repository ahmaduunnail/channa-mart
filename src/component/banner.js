import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <>
      <div className="flex relative justify-between px-8 py-20 mb-40">
        <div className="absolute inset-0 translate-x-48 translate-y-48 overflow-auto">
          <Image
            src="/grid.svg"
            fill={true}
            quality={50}
            className="select-none pointer-events-none"
          />
        </div>
        <a className="absolute bottom-0 left-[50%] bg-white z-20 rounded-full border-black border-[3px]" href="#overview">
          <Image src="/arrow.svg" width={37} height={37} className="rotate-90 mx-4 my-9"/>
        </a>
        <div className="z-10">
          <div className="relative">
            <Image
              className="absolute right-0 -top-20 select-none pointer-events-none"
              src="/ornamen-1.svg"
              width={156}
              height={110}
              quality={50}
            />
            <h1 className="text-[96px] leading-[125%]">
              Solusi Anda, <br />
              Penggemar <br />
              Ikan Channa
            </h1>
            <Image
              className="absolute right-0 bottom-0 select-none pointer-events-none"
              src="/ornamen-2.svg"
              width={274}
              height={26.5}
              quality={50}
            />
          </div>

          <p className="text-[32px]">
            Ubah pengalaman lelang Ikan Channa anda,
            <br /> dengan satu klik.
          </p>
          <button className="px-[46px] py-[17px] text-[24px] bg-primary rounded-3xl border-white border-[3px] mt-[38px] font-bold">
            Mulai Sekarang
          </button>
        </div>
        <div className="z-10">
          <Image src="/banner.png" width={812} height={599} quality={100} />
        </div>
      </div>
    </>
  );
}
