import Image from "next/image";
import React from "react";
import FishCard from "./fish-card";

export default function Recomendation() {
  const what = ["Semua (50+)", "Juara nasional (40+)", "Juara kabupaten (10+)"];
  const selected = "Semua (50+)";

  const data = [
    {
      nama: "Channa striata",
      harga: "200.000,00",
      src: "1.png",
      penjual: {
        nama: "Ahmad Budiono",
        verified: true,
      },
      rating: 3,
    },
    {
      nama: "Snake head fish",
      harga: "300.000,00",
      src: "2.png",
      penjual: {
        nama: "Andiono",
        verified: false,
      },
      rating: 4,
    },
    {
      nama: "Ikan Gabus",
      harga: "15.000,00",
      src: "3.png",
      penjual: {
        nama: "Firman",
        verified: true,
      },
      rating: 2,
    },
    {
      nama: "Channa argus",
      harga: "200.000,00",
      src: "4.png",
      penjual: {
        nama: "Andi Chayani",
        verified: true,
      },
      rating: 3,
    },
    {
      nama: "Toman",
      harga: "160.000,00",
      src: "5.png",
      penjual: {
        nama: "Budiman",
        verified: false,
      },
      rating: 3,
    },
    {
      nama: "Marulius",
      harga: "250.000,00",
      src: "6.png",
      penjual: {
        nama: "Ikhsan",
        verified: true,
      },
      rating: 3,
    },
  ];

  const SnackBar = ({ nama }) => {
    return (
      <>
        <button
          className={`p-5 text-2xl font-medium ${
            nama === selected ? "bg-primary" : "bg-neutral"
          } rounded-3xl`}
        >{`${nama}`}</button>
      </>
    );
  };

  return (
    <>
      <div
        className="flex flex-col px-10">
        <div className="flex justify-evenly items-center gap-96 my-14">
          <h2 className="start-0 text-7xl">Rekomendasi Ikan Terbaik Harian</h2>
          <p className="end-0 text-3xl font-light">
            Mengenalkan fitur terbaik pada website kami “Rekomendasi Ikan
            Terbaik Harian.”. Menampilkan rekomendasi ikan terbaik terbaru,
            temukan ikan yang kamu impikan dengan mudah.
          </p>
        </div>

        <div className="flex gap-12">
          {what.map((item, _) => (
            <>
              <SnackBar nama={item} />
            </>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-x-16 pt-6 justify-between">
          {data.map((item, _) => (
            <>
              <FishCard data={item} />
            </>
          ))}
        </div>
        <div className="flex ml-auto">
          <p className="font-light text-base pt-8">
            *harga diatas, adalah harga tawar/jual terakhir
          </p>
        </div>
      </div>
    </>
  );
}
