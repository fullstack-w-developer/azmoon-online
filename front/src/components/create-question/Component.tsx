
import Test from "./../../assets/image/test.svg";

interface props {
  name: string;
  register?: any;
  required?: boolean;
  error:JSX.Element
}

export const Textare = ({ register, required  , error}: props) => {


  return (
    <>
      <div className="mt-5">
        <h1 className="bold text-center text-gray-800 pt-5 border-b pb-10">
          ایجاد سوال برای شرکت کننده ها
        </h1>
        <img src={Test} alt="test" className="absolute top-3 left-2 w-10" />
      </div>
      <div className=" style__create_question_t_b mt-10 ">
        <p className="text-right pb-2 pr-1 regular"> سوال :</p>
        <textarea
          {...register("question", { required })}
          className="outline-none flex-1 resize-none rounded-md rtl p-2 regular text-sm"
          rows={3}
        ></textarea>
        {error}
      </div>
    </>
  );
};

interface inputOption {
  label: string;
  name?: string;
  register?: any;
  required?: boolean;
  error:JSX.Element
}
export const InputOption = ({
  label,
  name,
  register,
  required,
  error
}: inputOption) => {

  return (
    <div className="w-full">
      <p className="text-xs text-right pb-2 pr-1 regular">{name}</p>
      <input
        {...register(label, { required })}
        className="outline-none rtl py-2 rounded-md w-full px-2"
      />
      {error}
    </div>
  );
};

export const Button = () => {
  return (
    <div className="style__create_question_t_b mt-10 lg:pb-20 button__create_question">
      <button className="bg-red-500  text-white rounded-md py-2 bold">
        ایجاد
      </button>
    </div>
  );
};
