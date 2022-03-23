import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "../../../node_modules/react-circular-progressbar/dist/styles.css";

import "./report.css";
const Report = () => {
  const percentage = 66;

  return (
    <>
      <div className="grid h-full place-items-center bg-white ">
        <div className="flex flex-col pb-20">
          <Progross
            labelClass="Extrabold"
            className="w-28" 
            name="امتیاز شما"
            value={68}
          />
          <div className="flex flex-wrap justify-around flex-row-reverse mt-5">
            <Progross
              labelClass="regular"
              styles={buildStyles({
                pathColor: "#10ac84",
                textColor: "#10ac84",
              })}
              className="w-24 mx-4"
              name="جواب صحیح"
              value={68}
              classContainer="pt-4 md:p-0"
            />
            <Progross
              labelClass="regular"
              styles={buildStyles({
                pathColor: "#ee5253",
                textColor: "#ee5253",
              })}
              className="w-24 mx-4"
              name="جواب غلط"
              value={68}
              classContainer="pt-4 md:p-0"
            />
            <Progross
              labelClass="regular"
              styles={buildStyles({
                pathColor: "#FFC312",
                textColor: "#FFC312",
              })}
              className="w-24 mx-4"
              name="بی پاسخ‌ها"
              value={68}
              classContainer="pt-4 md:p-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
interface propsProgross {
  value: number;
  name: string;
  className: string;
  styles?: {};
  labelClass?: string;
  classContainer?:string
}

export const Progross = ({
  value,
  name,
  className,
  styles,
  labelClass,
  classContainer
}: propsProgross) => {
  return (
    <div className={`flex flex-col justify-center items-center ${classContainer}`}>
      <p className={` pb-1 text-gray-400 ${labelClass}`}>{name}</p>
      <div className={className}>
        <CircularProgressbar value={value} text={`${value}%`} styles={styles} />
      </div>
    </div>
  );
};
