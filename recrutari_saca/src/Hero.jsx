import React from "react";
import logo from "./assets/images/logo_trans.png";

function Hero() {
  return (
    <div className="w-full fixed top-0 bg-[#f2f2d2]  z-50">
      <div className="container mx-auto flex items-center justify-center h-24 px-4">
        <p className="text-[#03093B] text-4xl font-custom_1 tracking-widest">
          SACA
        </p>
        <img
          src={logo}
          alt="altceva"
          className="object-scale-down h-20 overflow-hidden"
        />
        <p className="text-[#0e100f] text-4xl font-custom_1 pl-4 pt-2 tracking-tight">
          EXPERTS
        </p>
      </div>
    </div>
  );
}

export default Hero;
