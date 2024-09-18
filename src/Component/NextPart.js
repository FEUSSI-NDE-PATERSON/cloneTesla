import React from "react";

function NextPart() {
  return (
    <div>
      <p className="bg-black text-white font-extrabold text-3xl text-center py-3">
        All Interior
      </p>
      <img
        src="../images/new-interior.jpg"
        className="sm:h-[500px] w-[100vw]"
        alt="error"
      />
      <div className=" w-[100%] text-white bg-black sm:w-[80%] text-center mx-auto  p-[50px]">
        <div className="flex sm:flex-row flex-col">
          <img
            src="../images/game.jpg"
            alt="error"
            className="w-[100%] sm:w-[550px] h-[250px] rounded-lg hover:shadow-[#fefefe] hover:scale-110 hover:cursor-pointer hover:shadow-lg"
          />
          <p className="flex mt-2 sm:mt-0  flex-col align-center justify-center mx-auto">
            <p>Game From EveryWhere</p>
            <p className=" mt-2 sm:mt-0 max-w-[250px] sm:min-w-[250px]">
              Up to 10 teraflops of processing power enables in-car gaming
              on-par with today’s newest consoles. Wireless controller
              compatibility lets you game from any seat
            </p>
          </p>
        </div>
        <div className="flex sm:flex-row-reverse my-5  flex-col">
          <img
            alt="error"
            src="../images/connected.jpg"
            className="w-[100%] sm:w-[550px] h-[250px] rounded-lg hover:shadow-[#fefefe] hover:scale-110 hover:cursor-pointer hover:shadow-lg"
          />
          <p className="flex mt-2 sm:mt-0  flex-col align-center justify-center mx-auto ">
            <p>Stay connected</p>
            <p className=" mt-2 sm:mt-0 max-w-[250px] sm:min-w-[250px]">
              Multi-device Bluetooth, wireless and USB-C charging for every
              passenger, with enough power to fast-charge your tablets and
              laptop.
            </p>
          </p>
        </div>
        <div className="flex sm:flex-row flex-col">
          <img
            src="../images/audio.jpg"
            alt="error"
            className="w-[100%] sm:w-[550px] h-[250px] rounded-lg hover:shadow-[#fefefe] hover:scale-110 hover:cursor- pointer hover:shadow-lg"
          />
          <p className="flex mt-2 sm:mt-0  flex-col align-center justify-center mx-auto">
            <p>Your Best Audio System</p>
            <p className="max-w-[250px] sm:min-w-[250px]">
              Up to 10 teraflops of processing power enables in-car gaming
              on-par with today’s newest consoles. Wireless controller
              compatibility lets you game from any seat
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NextPart;
