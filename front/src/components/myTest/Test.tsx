import { useState, useCallback } from "react";
import ItemTest from "./ItemTest";
import { questions } from "./data";
import "./test.css";
import Score from "./Score";

interface props {
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  q:any
}
const Test = ({ setStart ,q}: props) => {
  const [count, setCount] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [empty, stEmpty] = useState(0);
  const [saveQuestion, setSaveQuestion] = useState(false);

  const handleShowQuestion = () => {
    if (!answer) {
      stEmpty(empty + 1);
    }

    if (q.data?.data.data[count].isCurrent === answer) {
      setScore(score + 1);
    }

    const nextQuestion = count + 1;
    if (nextQuestion < q.data?.data.data.length) {
      setCount(nextQuestion);
      setAnswer("");
      setSaveQuestion(false);
    } else {
      setShowScore(!showScore);
    }
  };

  return (
    <div className="container_tests">
      <div className="bg-white p-3 w-full rounded-md">
        {showScore ? (
          <Score setStart={setStart} score={score} empty={empty} questions={q.data?.data.data.length} />
        ) : (
          <>
            <ItemTest
              answer={answer}
              count={count}
              setAnswer={setAnswer}
              saveQuestion={saveQuestion}
              setSaveQuestion={setSaveQuestion}
              q={q}
            />

            <div className="flex justify-end mt-8">
              <button
                onClick={() => handleShowQuestion()}
                className="bg-blue-500 text-sm  py-1 px-4 bold rounded-md text-white"
              >
                {count === q.data?.data.data.length - 1 ? "دیدن نتایج" : "بعدی"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Test;
