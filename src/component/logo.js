import Image from "next/image";
import React from "react";

import { Card, CardTitle } from "@/components/ui/card";

export default function Logo() {
  return (
    <>
      <Card className="flex px-5 py-2.5 gap-4 items-center pointer-events-none cursor-none rounded-[2rem] border-none shadow-none bg-white">
        <Image
          src="/logo.png"
          width="80"
          height="70"
          quality={80}
          className="select-none pointer-events-none"
        />
        <CardTitle className="font-semibold text-[40px] select-none pointer-events-none">
          ChannaMart.
        </CardTitle>
      </Card>
    </>
  );
}
