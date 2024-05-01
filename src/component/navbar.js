import React from "react";
import Logo from "./logo";

export default function Navbar() {
  const options = ["Utama", "Belanja", "Info Lomba", "Tentang Kami"];
  const selectedItem = "Utama";

  return (
    <nav
      className="flex justify-between py-6 px-10 items-center"
      id="navbar"
    >
      <div>
        <Logo />
      </div>

      <div className="flex gap-[47px] text-[24px]">
        {options.map((item, _) => (
          <>
            <a
              className={`${item === selectedItem ? "text-black" : "text-dark_grey"}`}
              href="#"
            >
              {item}
            </a>
          </>
        ))}
      </div>
    </nav>
  );
}
