import { useState, useContext, useCallback } from "react";
import ReactInputVerificationCode from "react-input-verification-code";
import { useNavigate } from "react-router-dom";
import "./verify.css";
import Timer from "./Timer";
import {
  ButtonVerify,
  ChangePhoneNumber,
  SubTitle,
  Title,
} from "./VerifyMultipateComponent";
import { loginInfoContext } from "../../contexts/LoginInfoConText";
import { useMutation } from "react-query";
import { verifycodeApi } from "../../services/api";
interface props {
  getcode: any;
}
const VerifyComponent = ({ getcode }: props) => {
  const initialTimer = localStorage.getItem("timer") ?? 60;
  const [timer, setTimer] = useState(initialTimer);
  const [code, setCode] = useState<string>("");
  const { loginInfo, setLoginInfo } = useContext(loginInfoContext);
  const navigate = useNavigate();
  const submitVerifyCode = (e: any) => {
    e.preventDefault();
    if (timer <= 0) {
      localStorage.removeItem("timer");
      setTimer(60);
      return false;
    }
  };

  const getc = useCallback(() => {
    getcode.refetch();
  }, [getcode]);

  const verifyCode = useMutation(
    () => verifycodeApi(loginInfo.phonenumber, code),
    {
      onSuccess: (data) => {
        setLoginInfo({
          ...loginInfo,
          isRegister: data.data.data.isRegister,
          token: data.data.data.token,
        });

        navigate("/azmoon/home");
      },
      onError: () => {
        setTimeout(() => {
          verifyCode.reset();
        }, 7000);
      },
    }
  );

  return (
    <form
      onSubmit={submitVerifyCode}
      className="flex flex-col justify-around items-center w-3/4 md:w-1/2"
    >
      <div>
        <div>
          <Title />
          <SubTitle phoneNumber={loginInfo.phonenumber} />
        </div>
        <div className="custom-styles flex justify-center items-center py-7">
          <ReactInputVerificationCode
            value={code}
            onChange={setCode}
            autoFocus={true}
            placeholder="-"
            type="text"
          />
        </div>
        <Timer verifyCode={verifyCode} timer={timer} setTimer={setTimer} />
        <ChangePhoneNumber />
      </div>
      <ButtonVerify
        code={code}
        timer={timer}
        verifyCode={verifyCode}
        onClick={() => (timer <= 0 ? getc() : verifyCode.mutate())}
      />
    </form>
  );
};

export default VerifyComponent;
