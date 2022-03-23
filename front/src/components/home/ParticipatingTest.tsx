import React from "react";
import Countdown from "react-countdown";
import "./home.css";

interface itemsRerender {
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
}

interface propsParticipatingTest {
  date: string;
  onClick: () => void;
  level:string,
  dataSubtitle:any
}

const ParticipatingTest = ({ date, onClick ,level,dataSubtitle}: propsParticipatingTest) => {
  const renderer = ({ days, hours, minutes, seconds }: itemsRerender) => {
    return (
      <div className="flex mt-4">
        <p className="border p-2 rounded-md  mx-2 Extrabold text-gray-600 text-lg">
          {days < 10 ? `${0}${days}` : days}
        </p>
        <p className="border p-2 rounded-md  mx-2 Extrabold text-gray-600 text-lg">
          {hours < 10 ? `${0}${hours}` : hours}
        </p>
        <p className="border p-2 rounded-md  mx-2 Extrabold text-gray-600 text-lg">
          {" "}
          {minutes < 10 ? `${0}${minutes}` : minutes}
        </p>
        <p className="border p-2 rounded-md  mx-2 Extrabold text-gray-600 text-lg">
          {seconds < 10 ? `${0}${seconds}` : seconds}
        </p>
      </div>
    );
  };
  return (
    <div className="border bg-white shadow-md rounded-lg mt-5 lg:m-0">
      <div className="flex justify-center  items-center">
        <Countdown daysInHours={true} date={date} renderer={renderer} />
      </div>
      <p className="text-gray-600 text-center bold pt-5">{level}</p>
      <p className="text-center text-gary-600 text-sm bold pt-2">{dataSubtitle}</p>
      <div className="flex justify-center items-center py-3">
        <button
          onClick={onClick}
          className="bg-cyan-600 text-sm bold p-2 text-white rounded-md"
        >
          شرکت در آزمون
        </button>
      </div>
    </div>
  );
};

export default ParticipatingTest;
