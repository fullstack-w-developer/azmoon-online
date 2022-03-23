import React from "react";
import ItemHome from "./ItemHome";
import { Animated } from "react-animated-css";

interface props {
  visiable: boolean;
  setVisiable: React.Dispatch<React.SetStateAction<boolean>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
const ItemsHome = ({ visiable, setVisiable, setStep }: props) => {
  return (
    <>
      <div className={`${visiable === false ? "hidden" : "block"}`}>
        <h1 className="Extrabold text-4xl text-center text-gray-700 pt-10">
          آزمون ها
        </h1>

        <div className={`mt-16`}>
          <Animated
            animationIn="slideInRight"
            animationOut="fadeOut"
            isVisible={visiable}
          >
            <ItemHome
              name="شرکت در آزمون"
              className="justify-end"
              classNameBg="rounded-tl-full rounded-bl-full"
              onClick={() => {
                setVisiable(false);
                setStep(1);
              }}
            />
          </Animated>

          <Animated
            animationIn="slideInLeft"
            animationOut="fadeOut"
            animationInDuration={2000}
            isVisible={visiable}
          >
            <ItemHome
              name="آزمون های برگزار شده"
              className="justify-start mt-10"
              classNameBg="rounded-tr-full rounded-br-full"
            />
          </Animated>
          <Animated
            animationIn="slideInRight"
            animationOut="fadeOut"
            isVisible={visiable}
            animationInDuration={2500}
          >
            <ItemHome
              name="کارنامه"
              className="justify-end mt-10"
              classNameBg="rounded-tl-full rounded-bl-full"
            />
          </Animated>
          <Animated
            animationIn="slideInLeft"
            animationOut="fadeOut"
            isVisible={visiable}
            animationInDuration={3000}
          >
            <ItemHome
              name="سوالات ذخیره شده"
              className="justify-start mt-10"
              classNameBg="rounded-tr-full rounded-br-full"
            />
          </Animated>
        </div>
      </div>
    </>
  );
};

export default ItemsHome;
