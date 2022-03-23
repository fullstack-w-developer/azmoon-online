import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Buttonoptions from "./Buttonoptions";
import { BsCheck } from "react-icons/bs";
import IsLoading from "../IsLoading";

interface props {
  count: number;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
  answer: string;
  saveQuestion: boolean;
  setSaveQuestion: React.Dispatch<React.SetStateAction<boolean>>;
  // onClick: () => void;
  q: any;
}
const ItemTest = ({
  count,
  setAnswer,
  answer,
  saveQuestion,
  setSaveQuestion,
  q,
}: props) => {
  return (
    <div>
      {q.isLoading ? (
        <IsLoading />
      ) :q.isSuccess? (
        <>
          <div className="flex justify-between  items-start">
            {saveQuestion ? (
              <AiFillStar
                size={20}
                color="#f9ca24"
                className="cursor-pointer"
              />
            ) : (
              <AiOutlineStar
                size={20}
                color="#f9ca24"
                onClick={() => setSaveQuestion(true)}
                className="cursor-pointer"
              />
            )}
            <p className="bold text-gray-600">
              {q.data.data.data[count].question}
            </p>
          </div>
          <div className="rtl">
             
            <div className=" pt-2 container">
              <Buttonoptions
                nameLabel={q.data.data.data[count].option1}
                onClick={() => {
                  setAnswer(q.data.data.data[count].option1);
                }}
                name={
                  q.data.data.data[count].option1 === answer ? (
                    <BsCheck size={22} color="#20bf6b" />
                  ) : null
                }
              />
              <Buttonoptions
                nameLabel={q.data.data.data[count].option2}
                onClick={() => {
                  setAnswer(q.data.data.data[count].option2);
                }}
                name={
                  q.data.data.data[count].option2 === answer ? (
                    <BsCheck size={22} color="#20bf6b" />
                  ) : null
                }
              />
              <Buttonoptions
                nameLabel={q.data.data.data[count].option3}
                onClick={() => {
                  setAnswer(q.data.data.data[count].option3);
                }}
                name={
                  q.data.data.data[count].option3 === answer ? (
                    <BsCheck size={22} color="#20bf6b" />
                  ) : null
                }
              />
              <Buttonoptions
                nameLabel={q.data.data.data[count].option4}
                onClick={() => {
                  setAnswer(q.data.data.data[count].option4);
                }}
                name={
                  q.data.data.data[count].option4 === answer ? (
                    <BsCheck size={22} color="#20bf6b" />
                  ) : null
                }
              />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ItemTest;
