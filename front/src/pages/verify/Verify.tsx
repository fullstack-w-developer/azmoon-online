import {  useContext, useEffect } from "react";
import VerifyComponent from "../../components/verify/VerifyComponent";
import Learn from "./../../assets/image/learn.jpeg";
import { toast } from "react-toastify";
import { useGetCode } from "./../../hooks/useGetCode";
import { loginInfoContext } from "../../contexts/LoginInfoConText";

const Verify = () => {
  const { loginInfo, setLoginInfo } = useContext(loginInfoContext);


  const CustomMessage = ({ code }: any) => {
    return (
      <div>
        <p className="bold text-sm Extrabold">
          رمز عبور شما :{" "}
          <span className="regular text-sm text-gray-500">{code}</span>
        </p>
      </div>
    );
  };

  const ErrorMessage = ()=> <p className="bold text-sm text-gray-500 text-right">مشکلی پیش اماده است</p>

  const onSuccessGetCode = (data: any) => {
    setLoginInfo({ ...loginInfo, Code: data.data.data });
   
  };
  const { getcode } = useGetCode({
    phonenumber: loginInfo.phonenumber,
    request: false,
    onSuccesss: onSuccessGetCode,
  });

  useEffect(() => {
    if (loginInfo.Code !== "" && getcode.isSuccess) {
      toast.success(<CustomMessage code={loginInfo.Code} />);
      getcode.remove();
      setTimeout(() => {
        setLoginInfo({ ...loginInfo, Code: "" });
      }, 5000);
    } else if (getcode.isError) {
      toast.error(<ErrorMessage/>);
    }
  }, [getcode.isSuccess,getcode.isError]);

  return (
    <div className="login">
      <div>
        <div className="hidden lg:block">
          <img src={Learn} alt="learn" />
        </div>
        <VerifyComponent getcode={getcode} />
      </div>
    </div>
  );
};

export default Verify;
