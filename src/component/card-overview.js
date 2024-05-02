import Image from "next/image";
import React from "react";
import Background from "../../public/card-ornamen.svg";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CardOverview() {
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
        <div className="flex-row max-w-44">
          <div className="block h-28 w-28">
            <Image
              src={"/" + `${nama}`}
              width={150}
              height={150}
              className="w-fit"
            />
          </div>
          <p className="font-prodigy font-normal text-2xl">{`${desc}`}</p>
        </div>
      </>
    );
  };

  return (
    <>
      <Card
        className="flex justify-between bg-white border-neutral rounded-[64px] gap-52 overflow-hidden border-4 -translate-y-20 p-28 shadow-xl smooth-corner bg-origin-border bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${Background.src})` }}
      >
        <div className="start-0 top-0">
          <CardTitle className="text-[64px] font-medium">
            Dari Penggemar <br /> Ikan Channa,
            <br /> Untuk Komunitas
          </CardTitle>
          <CardDescription className="text-[32px] font-light">
            Value yang kami berikan
            <br />
            untuk anda.
          </CardDescription>

          <Button className="flex justify-center items-center gap-4 px-6 py-8 text-[24px] bg-white rounded-3xl border-black border-4 mt-[45px]">
            Pelajari Tentang Kami
            <Image src="/arrow.svg" width={37} height={37} />
          </Button>
        </div>
        <CardContent className="end-0 bottom-0 grid grid-cols-3 gap-14 justify-between mt-28">
          {apa.map((item, _) => (
            <>
              <Value nama={item.src} desc={item.desc} />
            </>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
