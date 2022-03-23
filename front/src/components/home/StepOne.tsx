import {useState} from "react";
import ParticipatingTest from "./ParticipatingTest";
import { BiArrowBack } from "react-icons/bi";
import { useMutation, useQuery } from "react-query";
import { createMytestApi, testsApi } from "./../../services/api";
import IsLoading from "./../IsLoading";
import moment from "jalali-moment";
import IsError from './../IsError';


interface props {
  back: () => void;
  step: number;
}
const StepOne = ({ back, step }: props) => {
  const [open,setOpen] = useState(false)
  const tests = useQuery(["tests"], () => testsApi(), {
    enabled: step === 1,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 2,
    refetchInterval: 5000 * 10,
  });

  const createtest = useMutation((id) => createMytestApi(id));
  return (
    <div className="pb-20">
      <div
        className="flex justify-start items-center m-4 cursor-pointer"
        onClick={back}
      >
        <BiArrowBack size={30} color="#636e72" />
      </div>
      {tests.isLoading ? (
        <IsLoading type="bars" />
      ) : tests.isSuccess ? (
        <div className="ParticipatingTest mt-5">
          {tests.data?.data.data.map((item: any, index: any) => {
            return (
              <ParticipatingTest
                dataSubtitle={moment(item.date).format("jYYYY/jMM/jDD")}
                level={item.level.label}
                key={index}
                date={item.date}
                onClick={() => {
                  createtest.mutate(item._id)
                  setOpen(!open)
                }}
              />
            );
          })}
        </div>
      ) : tests.isError ? (
        <div>
          <p className="bold text-center">مشکلی رخ داده است</p>
        </div>
      ) : null}
      <IsError open={open} setOpen={setOpen} request={createtest}/>
    </div>
  );
};

export default StepOne;
