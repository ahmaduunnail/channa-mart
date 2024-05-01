import Image from "next/image";
import React from "react";

export default function Card() {
  const apa = [
    { src: "handshake.svg", desc: "Kualitas dan keamanan terjamin." },
    { src: "clipboard.svg", desc: "Lihat record kemenangan ikan." },
    { src: "lighthouse.svg", desc: "Lihat info lomba ikan channa." },
    { src: "dart.svg", desc: "Edukasi pemeliharaan yang baik." },
    { src: "puzzle.svg", desc: "Dapatkan berita terbaru tentang ikan channa." },
  ];
  const Value = ({ nama, desc }) => {
    return (
      <>
        <div className="flex-row max-w-36">
          <div className="block">
            <Image
              src={"/" + `${nama}`}
              width={150}
              height={150}
              className="w-fit"
            />
          </div>
          <p className="font-prodigy font-normal text-2xl mt-3">{`${desc}`}</p>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="flex relative justify-between bg-white border-neutral rounded-[64px] gap-52 overflow-hidden border-4 -translate-y-20 p-28 shadow-xl">
        <div className="absolute h-full w-full top-0 left-0 -z-10">
          <Image
            src="/card-ornamen.svg"
            fill={true}
            className="select-none pointer-events-none"
          />
        </div>
        <div className="start-0 top-0">
          <h2 className="text-[64px] font-medium">
            Dari Penggemar <br /> Ikan Channa,
            <br /> Untuk Komunitas
          </h2>
          <p className="text-[32px] font-light">
            Value yang kami berikan
            <br />
            untuk anda.
          </p>

          <button className="flex justify-between gap-4 px-[24px] py-[16px] text-[24px] bg-white rounded-3xl border-black border-[3px] mt-[45px]">
            Pelajari Tentang Kami
            <Image src="/arrow.svg" width={37} height={37} />
          </button>
        </div>
        <div className="end-0 bottom-0 grid grid-cols-3 gap-14 justify-between mt-28">
          {apa.map((item, _) => (
            <>
              <Value nama={item.src} desc={item.desc} />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
