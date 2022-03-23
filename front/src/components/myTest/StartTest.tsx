import React, { useState } from "react";
import Countdown from "react-countdown";
interface itemsRerender {
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  completed: any;
}

interface propsParticipatingTest {
  date: string;
  onClick: () => void;
  level: any;
  dateSubTitle: String;
}

const StartTest = ({
  date,
  onClick,
  level,
  dateSubTitle,
}: propsParticipatingTest) => {
  const [over, setOver] = useState(false);
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: itemsRerender) => {
    if (completed) {
      setOver(true);
    }
    return (
      <>
        <div className="flex flex-row-reverse items-center mt-4">
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
      </>
    );
  };
  return (
    <div className="border bg-white shadow-md rounded-lg mt-5 lg:m-0">
      <div className="flex flex-col justify-center  items-center">
        <Countdown date={date} renderer={renderer} />
        <div>
          <p className="text-gray-600 text-center bold pt-5">{level}</p>
          <p className="text-center text-gary-600 text-sm bold pt-2">
            {dateSubTitle}
          </p>
        </div>
        <div className="flex justify-center items-center py-3">
          <button
            onClick={onClick}
            className={`text-sm bold p-2 text-white rounded-md ${
              over
                ? "bg-blue-500 cursor-pointer hover:bg-blue-600 transition-all"
                : "bg-blue-100 btn-disabled"
            }`}
          >
            شروع آزمون
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartTest;
