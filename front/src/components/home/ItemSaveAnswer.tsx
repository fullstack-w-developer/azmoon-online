import React from "react";
import { AiFillStar } from "react-icons/ai";
const ItemSaveAnswer = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="flex justify-between  items-start p-1">
        <AiFillStar size={20} color="#f9ca24" />
        <p className="bold text-gray-600">چیست ؟  props و state تفاوت</p>
      </div>
      <div className="rtl pt-4 pb-2 px-1">
          <p className="bold text-gray-600 text-md">جواب صحیح : <span className="regular text-green-700">state</span></p>
      </div>
    </div>
  );
};

export default ItemSaveAnswer;
