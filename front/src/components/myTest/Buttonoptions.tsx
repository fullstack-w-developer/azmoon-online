import React from "react";
import "./radio-button.css";
interface props {
  nameLabel: string;
  onClick: () => void;
  name?:any
}
const Buttonoptions = ({ nameLabel, onClick,name }: props) => {
  return (
    <div className="flex items-center" onClick={onClick}>
      <div className="w-6 h-6 rounded-full border cursor-pointer flex justify-center items-center">{name}</div>
      <button className="block py-2 mr-3">{nameLabel}</button>
    </div>
  );
};

export default Buttonoptions;
