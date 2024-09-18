import { Box, Drawer, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const links = [
  { name: "Model s", link: "models" },
  { name: "Model 3", link: "model3" },
  { name: "Model X", link: "modelx" },
  { name: "Model Y", link: "modely" },
];
function Navbar() {
  const [isDrawer, setIsDrawer] = useState(false);
  return (
    <div className="py-3 flex  justify-between items-center fixed z-40 left-0 right-0">
      <Link to="/">
        <img
          src="https://tesla-clone-1000.web.app/images/logo.svg"
          alt="logo"
        />
      </Link>
      <div className="hidden sm:flex sm:flex-[0.5] justify-evenly">
        {links.map((li) => (
          <Link to={li.link}>
            <p className="font-weight text-[#393C41] text-sm sm:text-lg text-nowrap hover:text-[tomato]">{li.name}</p>
          </Link>
        ))}
        <p className="font-weight text-sm sm:text-lg  hover:text-[tomato] text-nowrap">Solar Panel</p>
        <p className="font-weight text-sm sm:text-lg hover:text-[tomato] text-nowrap">Solar Roof</p>
      </div>
      <div className="flex">
        <p className=" hidden mx-3 sm:block">Shop</p>
        <p className=" hidden mx-3 sm:block">Account</p>
        <p className="mx-3 sm:hidden" onClick={() => setIsDrawer(true)}>
          Menu
        </p>
      </div>
      <Drawer
        anchor="right"
        open={isDrawer}
        onClose={() => setIsDrawer(false)}
        className="bg-gray-10"
      >
        {links.map((li) => (
          <div  className=" flex p-5">

          <Link to={li.link}>
            <Box p={2} width="150px" bgColor="primary" textAlign="center" role="presentation">
              <Typography
                className="
                font-weight text-sm sm:text-lg hover:text-[tomato] hover:bg-white text-nowrap"
                >
                {li.name}
              </Typography>
            </Box>
          </Link>
            </div>
        ))}
      </Drawer>
    </div>
  );
}

export default Navbar;
