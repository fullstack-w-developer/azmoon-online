import React from "react";
import Menu from "./../pages/home/Menu";

interface props {
  children: React.ReactNode;
}
const LayoutScreen = ({ children }: props) => {
  return (
    <div className="h-screen screen_style_menu_route ">
      <div className="container__screen">
        <div className="bg-gray-100 shadow-2xl relative">{children}</div>
      </div>
      <Menu />
    </div>
  );
};

export default LayoutScreen;
