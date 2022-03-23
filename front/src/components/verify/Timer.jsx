import React from "react";
const Timer = ({ timer, setTimer, verifyCode }) => {
  const timeoutId = React.useRef(null);

  const countTimer = React.useCallback(() => {
    if (timer <= 0) {
      localStorage.setItem("timer", 0);
    } else {
      setTimer(timer - 1);
      localStorage.setItem("timer", timer);
    }
  }, [timer]);

  React.useEffect(() => {
    timeoutId.current = window.setTimeout(countTimer, 1000);
    // cleanup function
    return () => window.clearTimeout(timeoutId.current);
  }, [timer, countTimer]);

  return (
    <>
      {verifyCode.isError ? (
        <p className="bold text-xs text-red-500 text-center">
          {verifyCode.error.response.status === 400
            ? "شماره تلفن یا رمز عبور اشتباه است"
            : "مشکلی رخ داده است"}
        </p>
      ) : timer && timer > 0 ? (
        <p className="bold text-center text-gray-700 text-xs">
          مدت اعتبار کد فعالسازی :{" "}
          <span className="text-sm Extrabold px-4">{timer}</span> ثانیه
        </p>
      ) : (
        <p className="bold text-xs text-red-500 text-center">
          مدت اعتبار کد فعالسازی تمام شد ، بر روی ارسال مجدد بزنید تا کد دوباره
          برای شما ارسال شود
        </p>
      )}
    </>
  );
};

export default Timer;
