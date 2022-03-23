import { useContext, useState } from "react";
import Modal from "react-modal";
import "./signup.css";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { profileApi } from "../../services/api";
import IsLoading from "./../IsLoading";
import { loginInfoContext } from "./../../contexts/LoginInfoConText";

Modal.setAppElement("*");
const SignupUser = () => {
  const { loginInfo, setLoginInfo } = useContext(loginInfoContext);
  const [open, setOpen] = useState<boolean>(loginInfo.isRegister);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();                                                                                      

  const profile = useMutation((data: any) => profileApi(data), {
    onError: () => {
      setTimeout(() => {
        profile.reset();
      }, 5000);
    },
    onSuccess: (data) => {
      setOpen(!open);
      setLoginInfo({
        ...loginInfo,
        isRegister:!open,
        idSignup:data.data.data._id
      });
    },
  });

  const onSubmit = (data: any) => {
    let dataSignup = {
      firstName: data.firstName,
      lastName: data.lastName,
      isRegister: true,
    };
    profile.mutate(dataSignup);
  };

  return (
    <Modal className="modal" overlayClassName="Overlay" isOpen={!open}>
      <div>
        <h1 className="Extrabold text-3xl text-center text-gray-700">
          پروفایل کاربری
        </h1>
        <p className="text-center text-sm text-gray-500 bold pt-5">
          لطفا نام و نام خانوادگی خود را وارد کنید تا پروفایل کاربری شما ایجاد
          شود
        </p>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-center items-center">
            <div className="w-3/4 md:w-2/4 rtl">
              <label className="bold text-gray-500 text-sm pr-1">نام</label>
              <input
                {...register("firstName", { required: true })}
                className="outline-none mt-1 border border-white shadow-sm w-full py-2 px-1 bold rounded-md "
              />
              {errors.firstName && (
                <p className="text-red-500 regular text-xs pt-1 pr-1">
                  لطفا نام خود را وارد کنید
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-3/4 md:w-2/4 rtl">
              <label className="bold text-gray-500 text-sm pr-1">
                نام خانوادگی
              </label>
              <input
                {...register("lastName", { required: true })}
                className="outline-none mt-1 border border-white shadow-sm w-full py-2 px-1 bold rounded-md "
              />
              {errors.lastName && (
                <p className="text-red-500 regular text-xs pt-1 pr-1">
                  لطفا نام خانوادگی خود را وارد کنید
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <div className="w-3/4 md:w-2/4 rtl">
              <button className="bg-green-600 hover:bg-green-700 bold text-white w-full rounded-sm py-2">
                ایجاد
              </button>
            </div>
          </div>
          {profile.isError ? (
            <p className="text-red-500 regular text-sm  text-center pt-7">
              مشکلی رخ داده است، لطفا دوباره تلاش کنید
            </p>
          ) : null}
        </form>
      </div>
      {profile.isLoading ? <IsLoading /> : null}
    </Modal>
  );
};

export default SignupUser;
