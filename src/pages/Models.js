import React from "react";
import NextPart from "../Component/NextPart";

function Models() {
  return (
    <div className=" z-20 overflow-x-hidden">
      <div
        className="h-screen w-[100vw] flex flex-col justify-evenly items-center relative"
        style={{
          backgroundImage: `url(../images/model-s.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex-1 mt-[80px] ">
          <p className="text-4xl font-extrabold">Model S</p>
          <p className="ml-3">Plaid</p>
        </div>
        <div className="absolute bottom-[80px] flex sm:flex-row flex-col justify-between w-[60%] ">
          <div className="ml-3 sm:mt-0 my-2 text-center">
            <p className="text-white text-2xl">396 mi</p>
            <p className="text-[#D4D3D5] text-sm">Range (EPA est.)</p>
          </div>
          <div className="ml-3 sm:mt-0 my-2 text-center">
            <p className="text-white text-2xl">1.99s</p>
            <p className="text-[#D4D3D5] text-sm">0-60 mph*</p>
          </div>
          <div className="ml-3 sm:mt-0 my-2 text-center">
            <p className="text-white text-2xl">200mph</p>
            <p className="text-[#D4D3D5] text-sm">Top Speed</p>
          </div>
          <div className="ml-3 sm:mt-0 my-2 text-center">
            <p className="text-white text-2xl">1,020 hp</p>
            <p className="text-[#D4D3D5] text-sm">Peak Power</p>
          </div>
          <button className="bg-transparent px-5 py-2 rounded-full border-white border-2 text-white">
            Order Now
          </button>
        </div>
        <img
          src="../images/down-arrow.svg"
          alt="error"
          className="animate-bounce h-16 w-16 absolute bottom-0 "
        />
      </div>
      <NextPart />
    </div>
  );
}

export default Models;
