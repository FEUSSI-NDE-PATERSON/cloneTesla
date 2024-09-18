import React from "react";
import NextPart from "../Component/NextPart";

function Model3() {
  return (
    <div className=" z-20  overflow-x-hidden ">
      <div
        className="h-screen w-[100vw] flex flex-col justify-evenly items-center relative"
        style={{
          backgroundImage: `url(../images/model3_2.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex-1 mt-[80px] ">
          <p className="text-4xl font-extrabold">Model 3</p>
          <p className="ml-3">Plaid</p>
        </div>
        <div className="absolute bottom-[80px] flex sm:flex-row flex-col justify-between w-[60%] ">
          <div className="ml-3 sm:mt-0 my-2 text-center">
            <p className="text-white text-2xl">358 mi</p>
            <p className="text-[#fefefe] text-sm">Range (EPA est.)</p>
          </div>
          <div className="ml-3 sm:mt-0 my-2 text-center">
            <p className="text-white text-2xl">3.1s</p>
            <p className="text-[#fefefe] text-sm">0-60 mph*</p>
          </div>
          <div className="ml-3 sm:mt-0 my-2 text-center">
            <p className="text-white text-2xl">162mph</p>
            <p className="text-[#fefefe] text-sm">Top Speed</p>
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

export default Model3;
