import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent} from "@/components/ui/card";

export default function FishCard({ data }) {
  const stars = [];
  for (let index = 0; index < data.rating; index++) {
    stars.push(
      <div className="">
        <Image
          key={index}
          src="/star.svg"
          width={50}
          height={50}
          className=""
        />
      </div>
    );
  }
  return (
    <>
      <Card className="flex flex-col justify-between gap-y-5 mt-6 border-none shadow-none" href="#">
        <div dir="rtl">
          <div className="relative">
            <Image
              src={`/${data.src}`}
              width={500}
              height={500}
              alt="Fish"
              className="object-contain mask"
            />
            <Button className="absolute start-0 bottom-0 bg-primary w-28 h-16 rounded-3xl">
              <Image
                src="/arrow.svg"
                fill={true}
                className="object-contain block p-2 -rotate-45 select-none pointer-events-none"
              />
            </Button>
          </div>
        </div>

        <CardContent className="flex flex-col gap-y-4 px-4">
          <div className="-gap-y-4">
            <div className="flex flex-row justify-between items-baseline">
              <h2 className="font-medium text-3xl">{`${data.nama}`}</h2>
              <h3 className="font-medium text-2xl">{`Rp${data.harga}`}</h3>
            </div>

            <div className="flex flex-row gap-x-2">
              <h3 className=" text-2xl">{`${data.penjual.nama}`}</h3>
              {data.penjual.verified && (
                <Image
                  src="/verified.svg"
                  width={30}
                  height={30}
                  alt="verified"
                />
              )}
            </div>
          </div>

          <div className="flex flex-row">{stars}</div>
        </CardContent>
      </Card>
    </>
  );
}
