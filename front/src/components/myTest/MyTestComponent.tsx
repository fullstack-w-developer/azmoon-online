import { useState } from "react";
import StartTest from "./StartTest";
import Test from "./Test";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getMytestApi, getQuestionApi } from "./../../services/api";
import IsLoading from "./../IsLoading";
import moment from "jalali-moment";

const MyTestComponent = () => {
  const [start, setStart] = useState(false);
  const [level, setLevel] = useState("");
  const getMytest = useQuery(["mytest"], () => getMytestApi(), {
    enabled: useLocation().pathname === "/azmoon/tests",
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 2,
    staleTime: 1000,
    cacheTime: 1,
  });

  const question = useQuery(["question", level], () => getQuestionApi(level), {
    enabled: Boolean(level),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    cacheTime: 1,
  });

  const startTest = async (item: any) => {
    await setLevel(item);
    setStart(!start);
  };

  if (getMytest.data?.data.data.length === 0) {
    return (
      <h1 className="bold text-center text-gray-600 text-lg mt-10">
        تاکنون آزمونی برای شما ثبت نشده است
      </h1>
    );
  }

  return (
    <>
      {start ? (
        <Test setStart={setStart} q={question} />
      ) : getMytest.isLoading ? (
        <IsLoading type="bars" />
      ) : getMytest.isError ? (
        <p className="bold text-center text-gray-500 mt-10">
          مشکلی رخ داده است
        </p>
      ) : getMytest.isSuccess ? (
        <>
          <h4 className="text-center Extrabold pt-10 text-xl text-gray-800">
            آزمون های من
          </h4>
          <div className="items_two rtl pt-10 pb-16">
            {getMytest.data.data.data.map((item: any, index: any) => {
              return (
                <StartTest
                  level={item.level.label}
                  key={index}
                  date={item.date}
                  onClick={() => startTest(item.level.value)}
                  dateSubTitle={moment(item.date).format("jYYYY-jMM-jDD")}
                />
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
};

export default MyTestComponent;
