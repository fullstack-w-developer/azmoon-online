import React from "react";

interface props {
  score: number;
  empty: number;
  questions: number;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}
const Score = ({ score, empty, questions, setStart }: props) => {

  return (
    <div className="rtl ">
      <h1 className="text-center bold text-gray-600"> نتایج آزمون</h1>
      <div className="py-10">
        <div className="flex justify-around pt-8">
          <p className="Extrabold text-gray-600">
            جواب صحیح : <span className="regular">{score}</span>
          </p>
          <p className="Extrabold text-gray-600">
            جواب غلط :{" "}
            <span className="regular">{questions - (score + empty)}</span>
          </p>
          <p className="Extrabold text-gray-600">
            بی پاسخ : <span className="regular">{empty}</span>
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setStart(false)}
            className="bold bg-blue-500 text-sm  py-1 px-4 rounded-md text-white"
          >
            متوجه شدم
          </button>
        </div>
      </div>
    </div>
  );
};

export default Score;
