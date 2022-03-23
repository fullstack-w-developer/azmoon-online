import React from "react";
import Modal from "react-modal";
import { BsCheckAll } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
import IsLoading from "./IsLoading";
interface props {
  request: any;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  textSuccess?: string;
}

const IsError = ({
  request,
  open,
  setOpen,
  textSuccess = " این آزمون برای شما ثبت شد",
}: props) => {
  return (
    <Modal isOpen={open} className="modal-response" overlayClassName="Overlay">
      {request.isLoading ? (
        <IsLoading type="bars" />
      ) : (
        <div className="flex flex-col justify-center items-center ">
          {request.isSuccess ? (
            <div className=" rounded-full">
              <BsCheckAll size={65} color="green" />
            </div>
          ) : null}

          {request.isError ? (
            <div className="border rounded-full shadow-lg p-2 bg-red-500">
              <RiCloseFill size={65} color="#fff" />
            </div>
          ) : null}
          <div className="flex flex-col items-center  mt-10">
            <h6 className="bold text-center text-2xl  text-gray-700">
              {request.isSuccess ? textSuccess : null}
              {request.isError
                ? request.error.response.status === 400
                  ? "این آزمون قبلا برای شما ثبت شده است"
                  : "مشکلی رخ داده است"
                : null}
            </h6>
            <button
              onClick={() => {
                request.reset();
                setOpen(!open);
              }}
              className="bg-blue-500 text-white bold px-5 rounded-md py-1 mt-5"
            >
              باشه
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default IsError;
