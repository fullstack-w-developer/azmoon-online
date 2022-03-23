import React from "react";
import "./input.css";
import { Path, UseFormRegister } from "react-hook-form";

interface IFormValues {
  phoneNumber: string;
  Age: number;
}

interface propsInput {
  placeholder: string;
  type: string;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  autoComplete: string;
  apiError: any;
  error: {
    phoneNumber: {
      message: string;
    };
  };
}

const Input = ({
  placeholder,
  type,
  label,
  register,
  required,
  autoComplete,
  error,
  apiError,
}: propsInput) => {
  return (
    <div className="w-full pt-10">
      <p className="Extrabold text-center text-gray-700">
        برای شروع شماره موبایلت رو وارد کن
      </p>
      <input
        className="w-full mt-10 input text-gray-600"
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoFocus
        type={type}
        maxLength={11}
        {...register(label, {
          required: {
            value: true,
            message: "لطفا شماره تلفن خود را وارد کنید",
          },
          minLength: {
            value: 11,
            message: "شماره تلفن وارد شده صحیح نیست",
          },
          maxLength: {
            value: 11,
            message: "شماره تلفن بیش از 11 عدد است",
          },
        })}
        required
      />
      {error.phoneNumber && (
        <p className="bold text-xs text-red-500 text-center pt-5">
          {error.phoneNumber.message}
        </p>
      )}
      {apiError ? (
        <p className="text-center pt-3 text-red-500 bold text-sm transition-all">
         مشکلی رخ داده است
        </p>
      ) : null}
      <p className="mt-10 regular text-center text-sm text-gray-700">
        ما یک کد تائید به شماره تلفنتان ارسال میکنیم
      </p>
    </div>
  );
};

export default Input;
