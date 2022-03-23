import { useState, useCallback } from "react";
import ItemsHome from "./ItemsHome";

import { BiArrowBack } from "react-icons/bi";
import Report from "./Report";
import SaveAnswer from "./SaveAnswer";
import SignupUser from "./SignupUser";
import StepOne from "./StepOne";

const HomeComponent = () => {
  const [visiable, setVisiable] = useState(true);
  const [step, setStep] = useState(0);

  const clickBack = useCallback(() => {
    setStep(0);
    setVisiable(true);
  }, []);
  return (
    <>
        
      <SignupUser />
      {step === 0 ? (
        <ItemsHome
          visiable={visiable}
          setStep={setStep}
          setVisiable={setVisiable}
        />
      ) : step === 1 ? (
        <StepOne step={step} back={clickBack}/>
      ) : step === 3 ? (
        <>
          <div
            className="flex justify-start items-center m-4 cursor-pointer"
            onClick={clickBack}
          >
            <BiArrowBack size={30} color="#636e72" />
          </div>
          <Report />
        </>
      ) : step === 4 ? (
        <>
          <div
            className="flex justify-start items-center m-4 cursor-pointer"
            onClick={clickBack}
          >
            <BiArrowBack size={30} color="#636e72" />
          </div>
          <SaveAnswer />
        </>
      ) : null}
    </>
  );
};

export default HomeComponent;
