import React from "react";
import { HiOutlineHome } from "react-icons/hi";

import { BsExclamation } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { MdTipsAndUpdates,MdOutlineCreate } from "react-icons/md";
import "./menu.css";
import MenuItem from "./MenuItem";
const Menu = () => {
  return (
    <div className=" w-full menu ">
      <div className="flex justify-around  lg:justify-center items-center py-1 relative container_icons">
        <MenuItem to="/azmoon-online/profile" icon={<AiOutlineUser size={25} />} />
        <MenuItem to="/azmoon-online/tests" icon={<MdTipsAndUpdates size={25} />} />
        <MenuItem to="/azmoon-online/home" icon={<HiOutlineHome size={25} />} />
        <MenuItem to="/azmoon-online/create-question" icon={<MdOutlineCreate size={25} />} />
        <MenuItem
          to="/azmoon-online/about"
          icon={<BsExclamation size={35} />}
        />
      </div>
    </div>
  );
};

export default Menu;
