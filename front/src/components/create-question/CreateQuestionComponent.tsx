import { useState } from "react";
import { SelectEditProfile } from "../profile/Profile";
import { InputOption, Textare, Button } from "./Component";
import "./style.css";
import { grade } from "./../profile/data";
import { useMutation } from "react-query";
import { createQuestionApi } from "../../services/api";
import { useForm } from "react-hook-form";
import IsError from "./../IsError";

interface typeLevel {
  label: "";
  value: number;
}

interface mutateparameter {
  question: {};
  level: {};
}

const CreateQuestionComponent = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [level, setLevel] = useState<typeLevel>({
    label: "",
    value: 0,
  });

  const createQuestion = useMutation(
    ({ question, level }: mutateparameter) =>
      createQuestionApi({ question, level }),{
        onSuccess:()=>{
          reset()
        }
      }
  );
  const onSubmit = (data: any) => {
    setOpen(!open);
    createQuestion.mutate({ question: data, level: level });
  };

  return (
    <>
      <div className="rtl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Textare
            name="q"
            register={register}
            required
            error={
              errors.question && (
                <span className="regular text-xs pt-1 pr-1 text-red-500">
                  لطفا سوال خود را وارد کنید
                </span>
              )
            }
          />
          <div className="container__input_options lg:mt-10">
            <InputOption
              label="option1"
              name="گزینه‌ی  اول"
              register={register}
              required={true}
              error={
                errors.option1 && (
                  <span className="regular text-xs pt-1 pr-1 text-red-500">
                    لطفا گزینه‌ی اول را وارد کنید
                  </span>
                )
              }
            />
            <InputOption
              label="option2"
              name="گزینه‌ی  دوم"
              register={register}
              required={true}
              error={
                errors.option2 && (
                  <span className="regular text-xs pt-1 pr-1 text-red-500">
                    لطفا گزینه‌ی دوم را وارد کنید
                  </span>
                )
              }
            />
          </div>
          <div className="container__input_options lg:mt-10">
            <InputOption
              label="option3"
              name="گزینه‌ی  سوم"
              register={register}
              required={true}
              error={
                errors.option3 && (
                  <span className="regular text-xs pt-1 pr-1 text-red-500">
                    لطفا گزینه‌ی سوم را وارد کنید
                  </span>
                )
              }
            />
            <InputOption
              label="option4"
              name="گزینه‌ی  چهارم"
              register={register}
              required={true}
              error={
                errors.option4 && (
                  <span className="regular text-xs pt-1 pr-1 text-red-500">
                    لطفا گزینه‌ی چهارم را وارد کنید
                  </span>
                )
              }
            />
          </div>
          <div className="container__input_options lg:mt-10">
            <SelectEditProfile
              value={level}
              onChange={(data: any) => setLevel(data)}
              options={grade}
              name=""
              placeholder=""
              getOptionLabel={(option: any) => option.Name}
              getOptionValue={(option: any) => option.id}
            />
            <InputOption
              label="isCurrect"
              name="جواب صحیح"
              register={register}
              required={true}
              error={
                errors.isCurrect && (
                  <span className="regular text-xs pt-1 pr-1 text-red-500">
                    لطفا گزینه‌ی صحیح را وارد کنید
                  </span>
                )
              }
            />
          </div>
          <Button />
        </form>
      </div>
      <IsError
        textSuccess="با موفقیت ایجاد شد"
        open={open}
        setOpen={setOpen}
        request={createQuestion}
      />
    </>
  );
};

export default CreateQuestionComponent;
