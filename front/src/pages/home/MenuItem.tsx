import React from "react";
import { NavLink } from "react-router-dom";

interface propsTypes {
  to: string;
  icon: JSX.Element;
}
const MenuItem = ({ to, icon }: propsTypes) => {
  return (
    <>
      <NavLink to={to}  className={({isActive})=> isActive ? "active-navlink" :" navlink"}>{icon}</NavLink>
    </>
  );
};

export default MenuItem;
