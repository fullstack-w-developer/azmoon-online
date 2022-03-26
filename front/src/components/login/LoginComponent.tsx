import React from "react";
import Input from "./Input";

interface propsType {
  register: any;
  onsubmit: any;
  apiError: any;
  disabled: any;
  error: {
    phoneNumber: {
      message: string;
    };
  };
}

const LoginComponent = ({
  register,
  onsubmit,
  error,
  apiError,
  disabled,
}: propsType) => {
  return (
    <>
      <form
        onSubmit={onsubmit}
        className="flex flex-col justify-around items-center w-3/4 md:w-1/2"
      >
        <div className="w-3/4 md:w-1/2">
          <h1 className="Extrabold text-gray-800 text-center text-3xl w-full">
            آزمون آنلاین
          </h1>

          <Input
            placeholder="09"
            type="tel"
            label="phoneNumber"
            autoComplete="off"
            apiError={apiError}
            error={error}
            register={register}
            required
          />
        </div>
        <p className="bold text-gray-800">لطفا از روشن بودن فیلتر شکن خود اطمینان حاصل نمایید</p>
        <button
          type="submit"
          disabled={disabled ? true : false}
          className={
            disabled
              ? "btn-disabled bold bg-gray-500 w-3/4 md:w-1/2"
              : "btn-grad bold w-3/4 md:w-1/2"
          }
        >
          {disabled ? "... در حال ارسال شماره" : "مرحله‌ی بعدی"}
        </button>
      </form>
    </>
  );
};

export default LoginComponent;
