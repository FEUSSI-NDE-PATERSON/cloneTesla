import { IconButton } from "@mui/material";
import React from "react";
const cars = [
  {
    name: "Model S",
    bgi: "model-s.jpg",
    comment: "Order Online for Touchless Delivery",
  },
  {
    name: "Model 3",
    bgi: "model3_2.jpeg",
    comment: "Order Online for Touchless Delivery",
  },
  {
    name: "Model Y",
    bgi: "model-y.jpg",
    comment: "Order Online for Touchless Delivery",
  },
  {
    name: "Model Y1",
    bgi: "model_y_1.jpeg",
    comment: "Order Online for Touchless Delivery",
  },
  {
    name: "Model X",
    bgi: "model-x.jpg",
    comment: "Order Online for Touchless Delivery",
  },
  {
    name: "Solar Panels",
    bgi: "solar-panel.jpg",
    comment: "Lowest Cost solar Panels in America",
  },
  {
    name: "Solar Roof",
    bgi: "solar-roof.jpg",
    comment: "Produce Clean Energy From Your Roof",
  },
  {
    name: "Accessories",
    bgi: "accessories.jpg",
  },
];
function Main() {
  return (
    <div className="">
      {cars.map((car) => (
        <div
          className="h-screen  relative"
          style={{
            backgroundImage: `url("../images/${car.bgi}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="py-2">
            <p className="text-3xl mt-[100px]   text-center font-extrabold">
              {car.name}
            </p>
            <p className="text-center mt-3">{car.comment}</p>
          </div>
          <div className="mt-[450px] sm:mt-[350px] md:mt-[700px] lg:mt-[300px]  flex flex-col items-center sm:flex-row justify-center">
            <IconButton>
              <p className="bg-[#282B30] text-center text-xs p-3 text-white rounded-full w-[250px]">
                CUSTOM ORDER
              </p>
            </IconButton>
            <IconButton>
              <p className="text-[#282B30]  text-center bg-white text-xs p-3 rounded-full w-[250px]">
                EXISTING INVENTORY
              </p>
            </IconButton>
            <img
              src="../images/down-arrow.svg"
              alt="error"
              className="h-16 mx-auto text-center w-16  absolute bottom-0 animate-bounce"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
