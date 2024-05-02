"use client";
import Image from "next/image";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Pengalaman() {
  const apa = [
    {
      ikan: "3.png",
      pengalaman:
        "Saya senang dengan layanan yang diberikan. Profesionalisme dan dedikasi mereka begitu terlihat sepanjang proses berbelanja, akhirnya membawa saya kepada pengalaman belanja yang memuaskan. Saya sangat merekomendasikan ChannaMart kepada siapa pun yang mencari tempat belanja yang berkualitas!",
      pelanggan: {
        nama: "Andiono",
        gambar: "profil.png",
        desc: "Penggemar Ikan Channa Banyuwangi",
      },
    },
    {
      ikan: "4.png",
      pengalaman:
        "Saya senang dengan layanan yang diberikan. Profesionalisme dan dedikasi mereka begitu terlihat sepanjang proses berbelanja, akhirnya membawa saya kepada pengalaman belanja yang memuaskan. Saya sangat merekomendasikan ChannaMart kepada siapa pun yang mencari tempat belanja yang berkualitas!",
      pelanggan: {
        nama: "Andiono",
        gambar: "profil.png",
        desc: "Penggemar Ikan Channa Banyuwangi",
      },
    },
  ];

  const PengalamanGenerator = ({ data, index }) => {
    return (
      <>
        <CarouselItem key={index}>
          <Card className="flex justify-evenly border-none">
            <div className="relative w-[750px] bg-white border-neutral rounded-[64px] overflow-hidden border-4 p-28">
              <Image
                src={`/${data.ikan}`}
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col w-[599px] bg-white border-neutral rounded-[64px] gap-20 border-4 px-16 py-20">
              <p className="font-base text-3xl text-center">
                {`${data.pengalaman}`}
              </p>
              <div className="flex flex-col justify-between items-center">
                <Avatar className="h-[102px] w-[102px]">
                  <AvatarImage
                    src={`/${data.pelanggan.gambar}`}
                    alt="pelanggan"
                  />
                  <AvatarFallback>PL</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-between items-center">
                  <h3 className="font-medium text-3xl">{`${data.pelanggan.nama}`}</h3>
                  <p className="font-light text-2xl">
                    {`${data.pelanggan.desc}`}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </CarouselItem>
      </>
    );
  };

  return (
    <>
      <div className="flex flex-col justify-between my-40 items-center gap-y-36">
        <div className="relative">
          <Image
            className="absolute -right-28 -top-24 select-none pointer-events-none"
            src="/ornamen-pengalaman.svg"
            width={156}
            height={110}
            quality={50}
          />
          <h1 className="font-base text-6xl text-center leading-[125%]">
            Biarkan Pengalaman <br /> Yang Berbicara
          </h1>
        </div>

        <Carousel className="w-full max-w-fit">
          <CarouselContent>
            {apa.map((item, index) => (
              <>
                <PengalamanGenerator data={item} index={index} />
              </>
            ))}
            {/* <CarouselItem>Kontolll</CarouselItem>
            <CarouselItem>Kontolll</CarouselItem> */}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
