import React from "react";

interface props {
  className: string;
  name: string;
  classNameBg: string;
  onClick?: () => void;
}

const ItemHome = ({ className, name, classNameBg, onClick }: props) => {
  return (
    <div className={`flex  ${className}`} onClick={onClick}>
      <div
        className={`bg-red-500 w-2/4   cursor-pointer border ${classNameBg}`}
      >
        <p className="bold text-white text-center py-3">{name}</p>
      </div>
    </div>
  );
};

export default ItemHome;
