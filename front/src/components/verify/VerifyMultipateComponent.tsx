import {NavLink} from "react-router-dom"
export const Title = () => {
  return (
    <h1 className="badKhat text-gray-800 text-center text-5xl w-full">
      آزمون انلاین
    </h1>
  );
};

interface propsSubtitle {
  phoneNumber: string;
}
export const SubTitle = ({ phoneNumber }: propsSubtitle) => {
  return (
    <p className="bold  text-center text-gray-800 pt-10">
      ما یک کد به شماره {phoneNumber} ارسال کردیم <br /> کد ارسال شده را در زیر
      وارد کنید
    </p>
  );
};

interface propsButtonVerify {
  code: string;
  timer: number | string;
  onClick:()=>void;
  verifyCode:any
}
export const ButtonVerify = ({ code, timer,onClick,verifyCode }: propsButtonVerify) => {
  return (
    <button
      disabled={!code.includes("-") || timer <= 0 ? false : true}
      onClick={onClick}
      type="submit"
      className={` bold w-3/4 md:w-1/2 ${
        !code.includes("-") || timer <= 0 ? "btn-grad" : "btn-disabled bg-gray-400"
      }`}
    >
      {verifyCode.isLoading ? "... در حال ارسال":timer <= 0 ? "ارسال مجدد کد" : "مرحله بعدی"}
    </button>
  );
};

export const ChangePhoneNumber = ()=>{
  return(

    <p className="regular text-xs text-center text-gray-700 pt-20">
    شماره موبایلت رو اشتباه وارد کردی؟{" "}
    <NavLink
      to="/azmoon"
      onClick={() => localStorage.removeItem("timer")}
      className="Extrabold cursor-pointer"
    >
      تغیر شماره تلفن
    </NavLink>
  </p>

  )
}
