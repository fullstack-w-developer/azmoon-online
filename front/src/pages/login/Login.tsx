import { useContext } from "react";
import Learn from "./../../assets/image/learn.jpeg";
import "./login.css";
import { useForm, SubmitHandler } from "react-hook-form";
import LoginComponent from "../../components/login/LoginComponent";
import { useNavigate } from "react-router-dom";
import { loginInfoContext } from "../../contexts/LoginInfoConText";
import { useMutation } from "react-query";
import { checkphoneApi } from "../../services/api";
import { useGetCode } from "./../../hooks/useGetCode";

const Login = () => {
  interface IFormValues {
    "First Name": string;
    Age: number;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
  const navigate = useNavigate();
  const { loginInfo, setLoginInfo } = useContext(loginInfoContext);

  interface errorType {
    phoneNumber: {
      message: string;
    };
  }

  const checkphone = useMutation((phonenumber) => checkphoneApi(phonenumber), {
    onError: () => {
      setInterval(() => {
        checkphone.reset();
      }, 9000);
    },
    onSuccess: (data) => {
      setLoginInfo({
        ...loginInfo,
        phonenumber: data.data.data.phonenumber,
        idSignup: data.data.data.idSignup,
      });
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = async (data: any) => {
    try {
      await checkphone.mutate(data.phoneNumber);
    } catch (ex) {
      console.log(ex);
    }
  };

  const onSuccessGetCode = (data: any) => {
    localStorage.removeItem("timer");
    setLoginInfo({ ...loginInfo, Code: data.data.data });
    navigate("verify");
  };

  const { getcode } = useGetCode({
    phonenumber: loginInfo.phonenumber,
    onSuccesss: onSuccessGetCode,
    request: checkphone.isSuccess,
  });

  return (
    <div className="login">
      <div>
        <div className="hidden lg:block">
          <img src={Learn} alt="learn" />
        </div>
        <LoginComponent
          error={errors as errorType}
          register={register}
          onsubmit={handleSubmit(onSubmit)}
          apiError={checkphone.isError}
          disabled={checkphone.isLoading || checkphone.isSuccess}
        />
      </div>
    </div>
  );
};

export default Login;
