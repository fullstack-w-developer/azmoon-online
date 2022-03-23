import { useContext, useState, useCallback } from "react";
import { FaUserCircle } from "react-icons/fa";
import { loginInfoContext } from "../../contexts/LoginInfoConText";
import { BiArrowBack } from "react-icons/bi";
import Select from "react-select";
import "./profile.css";
import { Animated } from "react-animated-css";
import Modal from "react-modal";
import { FaUserCheck } from "react-icons/fa";
import { BsArrowLeftShort } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
import { grade, genderOptions } from "./data";
import { checkCodeMali } from "./validation";
import { infoUserApi, prefectProfileApi } from "../../services/api";
import { useMutation, useQuery } from "react-query";

interface profileInfoTypes {
  toggle: boolean;
  onClick: () => void;
}
export const ProfileShowInfo = ({ toggle, onClick }: profileInfoTypes) => {
  const { loginInfo } = useContext(loginInfoContext);

  return (
    <div
      className={`flex justify-around items-center mt-10 ${
        toggle ? "hidden" : "block"
      }`}
    >
      <div className="flex flex-col items-center">
        <FaUserCircle size={80} color="#b2bec3" />
        <p className="text-center bold text-gray-500 pt-2">
          {loginInfo.phonenumber}
        </p>
      </div>

      <button
        onClick={onClick}
        className="bg-blue-500 text-white rounded-lg regular p-2"
      >
        تکمیل یا ویرایش پروفایل
      </button>
    </div>
  );
};
interface propsBackButton {
  clcikChangeToggle: () => void;
}

export const BackButton = ({ clcikChangeToggle }: propsBackButton) => {
  return (
    <>
      <div
        className="flex justify-end items-center m-4 cursor-pointer"
        onClick={clcikChangeToggle}
      >
        <BiArrowBack size={30} color="#636e72" />
      </div>
      <h1 className="text-center Extrabold text-lg text-gray-800">
        تکمیل پروفایل
      </h1>
    </>
  );
};

interface propsInputEditProfile {
  name: string;
  placeholder?: string;
  classInput?: string;
  type?: string;
  onKeyDown?: () => void;
  onChange?: any;
  maxLength?: number;
  error?: string;
  value?: string;
  nameInput: string;
}
export const InputEditProfile = ({
  name,
  placeholder,
  classInput,
  type,
  onKeyDown,
  onChange,
  maxLength,
  error,
  value,
  nameInput,
}: propsInputEditProfile) => {
  return (
    <div className="w-full ">
      <p className="regular text-xs pb-2 pr-1">{name}</p>
      <input
        type={type}
        className={`w-full outline-none py-2 rounded-lg px-1 ${classInput}`}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        onChange={onChange}
        maxLength={maxLength}
        value={value}
        name={nameInput}
      />
      {error && (
        <p className="regular text-xs pt-1 pr-1 text-red-500">{error}</p>
      )}
    </div>
  );
};

interface propsSelectEditProfile {
  name: String;
  placeholder: string;
  defaultInputValue?: string;
  defaultValue?: any;
  value?: any;
  onChange?: any;
  options?: any;
  onFocus?: () => void;
  error?: string;
  getOptionLabel?: any;
  getOptionValue?: any;
}

export const SelectEditProfile = ({
  name,
  placeholder,
  options,
  value,
  onChange,
  defaultValue,
  defaultInputValue,
  onFocus,
  error,
  getOptionValue,
  getOptionLabel,
}: propsSelectEditProfile) => {
  const customStyles = {
    menu: (provided: any, state: any) => ({
      ...provided,
      borderBottom: "1px solid pink",
      color: "#576574 !important",
      padding: 20,
      boxShadow: "none !important",
      fontFamily: "yekanbold !important",
      fontSize: "0.80rem !important",
    }),
  };
  return (
    <div>
      <p className="regular text-xs pb-2 pr-1">{name}</p>
      <Select
        value={value}
        onChange={onChange}
        styles={customStyles}
        placeholder={placeholder}
        className="select_edit_profile"
        noOptionsMessage={() => "موردی وجود ندارد"}
        options={options}
        defaultValue={defaultValue}
        defaultInputValue={defaultInputValue}
        onFocus={onFocus}
        isSearchable={false}
        closeMenuOnScroll={false}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
      />
      {error && (
        <p className="regular text-xs pt-1 pr-1 text-red-500">{error}</p>
      )}
    </div>
  );
};

interface props {
  onClick?: () => void;
}
export const ButtonEditProfile = ({ onClick }: props) => {
  return (
    <div className="style__create_question_t_b mt-10 lg:pb-20 button__create_question">
      <button
        onClick={onClick}
        className="bg-green-500  text-white rounded-md py-2 bold"
      >
        تکمیل پروفایل
      </button>
    </div>
  );
};

interface listPrivince {
  getPrivince?: any;
  selectItems?: any;
  setSelectItems?: any;
  errorSelect?: any;
  onFocusSelect?: any;
  getState?: any;
  setErrorSelect?: any;
}

export const ListPrivinceState = ({
  getPrivince,
  selectItems,
  setSelectItems,
  errorSelect,
  onFocusSelect,
  getState,
  setErrorSelect,
}: listPrivince) => {
  return (
    <>
      <SelectEditProfile
        options={getPrivince.data?.data.data}
        placeholder="استان"
        name="استان"
        value={selectItems.privense}
        onChange={(data: any) => {
          setSelectItems({
            ...selectItems,
            privense: data,
          });
        }}
        error={errorSelect.errorPrivense}
        onFocus={() => onFocusSelect(setErrorSelect)}
        getOptionLabel={(option: any) => option.Name}
        getOptionValue={(option: any) => option.id}
      />
      <SelectEditProfile
        options={getState.data?.data.data}
        placeholder="شهرستان"
        name="شهرستان"
        value={selectItems.state}
        onChange={(data: any) => {
          setSelectItems({
            ...selectItems,
            state: data,
          });
        }}
        error={errorSelect.errorState}
        onFocus={() => onFocusSelect(setErrorSelect)}
        getOptionLabel={(option: any) => option.Name}
        getOptionValue={(option: any) => option.id}
      />
    </>
  );
};

interface propsResponse {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  prefectprofile: any;
  user:any
}
export const Response = ({
  open,
  setOpen,
  prefectprofile,
  setToggle,
  user
}: propsResponse) => {
  return (
    <Animated
      animationIn="bounceInLeft"
      animationOut="fadeOut"
      isVisible={true}
    >
      <Modal
        className="modal-response"
        overlayClassName="Overlay"
        isOpen={open}
      >
        <div className="flex flex-col justify-center items-center ">
          {prefectprofile.isSuccess ? (
            <div className="border rounded-full shadow-lg p-6 bg-green-600">
              <FaUserCheck size={55} color="#fff" />
            </div>
          ) : null}

          {prefectprofile.isError ? (
            <div className="border rounded-full shadow-lg p-2 bg-red-500">
              <RiCloseFill size={65} color="#fff" />
            </div>
          ) : null}
          <div className="flex items-center flex-row-reverse mt-10">
            <h6 className="bold text-center text-2xl  text-gray-700">
              {prefectprofile.isSuccess
                ? " با موفقیت تکمیل گرددید"
                : prefectprofile.isError
                ? "مشکلی رخ داده است"
                : null}
            </h6>
            <button
              onClick={() => {
                prefectprofile.reset();
                setOpen(false);
                setToggle(false);
                user.remove()
              }}
              className="regular animation-left-right  mr-8 shadow-lg border rounded-full text-white  text-sm p-1"
            >
              <BsArrowLeftShort color="#00000075" size={30} />
            </button>
          </div>
        </div>
      </Modal>
    </Animated>
  );
};

interface propsFildes {
  infoUser: any;
  changeInfoUser: any;
  errorCodeMali: string;
  onKeyDownCodeMali: any;
  setErrorCodeMali: any;
  errorSelect: any;
  selectItems: any;
  setSelectItems: any;
  onFocusSelect: any;
  setErrorSelect: any;
  getPrivince: any;
  getState: any;
  getCity: any;
}

export const Fildes = ({
  infoUser,
  changeInfoUser,
  errorCodeMali,
  onKeyDownCodeMali,
  setErrorCodeMali,
  errorSelect,
  selectItems,
  setSelectItems,
  onFocusSelect,
  setErrorSelect,
  getPrivince,
  getState,
  getCity,
}: propsFildes) => {
  return (
    <>
      <div className="container__input_options lg:mt-10">
        <InputEditProfile
          placeholder="نام"
          classInput=" px-4 rtl placeholder:text-right"
          name="نام"
          value={infoUser.firstName}
          onChange={changeInfoUser}
          nameInput="firstName"
        />
        <InputEditProfile
          placeholder="نام خانوادگی"
          classInput=" px-4 rtl placeholder:text-right"
          name="نام خانوادگی"
          value={infoUser.lastName}
          onChange={changeInfoUser}
          nameInput="lastName"
        />
      </div>

      <div className="container__input_options lg:mt-10">
        <InputEditProfile
          placeholder="کد ملی خود را وارد کنید"
          classInput=" px-4 ltr placeholder:text-right"
          name="کد ملی"
          value={infoUser.codeMali}
          onChange={changeInfoUser}
          maxLength={10}
          error={errorCodeMali}
          onKeyDown={() => onKeyDownCodeMali(setErrorCodeMali)}
          nameInput="codeMali"
        />

        <SelectEditProfile
          options={grade}
          placeholder="پایه‌ی تحصیلی"
          name="پایه‌ی تحصیلی"
          value={selectItems.grade}
          onChange={(data: any) => {
            setSelectItems({
              ...selectItems,
              grade: data,
            });
          }}
          error={errorSelect.errorGrade}
          onFocus={() => onFocusSelect(setErrorSelect)}
          getOptionLabel={(option: any) => option.Name}
          getOptionValue={(option: any) => option.id}
        />
      </div>
      <div className="container__input_options lg:mt-10">
        <ListPrivinceState
          getPrivince={getPrivince}
          selectItems={selectItems}
          setSelectItems={setSelectItems}
          errorSelect={errorSelect}
          onFocusSelect={onFocusSelect}
          getState={getState}
          setErrorSelect={setErrorSelect}
        />
      </div>
      <div className="container__input_options lg:mt-10">
        <SelectEditProfile
          options={getCity.data?.data.data}
          placeholder="شهر"
          name="شهر"
          value={selectItems.city}
          onChange={(data: any) => {
            setSelectItems({
              ...selectItems,
              city: data,
            });
          }}
          error={errorSelect.errorCity}
          onFocus={() => onFocusSelect(setErrorSelect)}
          getOptionLabel={(option: any) => option.Name}
          getOptionValue={(option: any) => option.id}
        />
        <SelectEditProfile
          options={genderOptions}
          placeholder="جنسیت"
          name="جنسیت"
          value={selectItems.gender}
          defaultValue={genderOptions[1].Name}
          onChange={(data: any) => {
            setSelectItems({
              ...selectItems,
              gender: data,
            });
          }}
          error={errorSelect.errorGender}
          getOptionLabel={(option: any) => option.Name}
          getOptionValue={(option: any) => option.id}
        />
      </div>
    </>
  );
};

export const StateItems = () => {
  const { loginInfo } = useContext(loginInfoContext);
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [errorCodeMali, setErrorCodeMali] = useState("");
  const [infoUser, setInfoUser] = useState({
    firstName: "",
    lastName: "",
    codeMali: "",
  });
  const [selectItems, setSelectItems] = useState({
    grade: { Name: "", id: "" },
    privense: { Name: "", id: "" },
    state: { Name: "", id: "" },
    city: { Name: "", id: "" },
    gender: { Name: "", id: "" },
  });

  const [errorSelect, setErrorSelect] = useState({
    errorGrade: "",
    errorPrivense: "",
    errorState: "",
    errorCity: "",
    errorGender: "",
  });
  const onSuccess = () => {
    setOpen(!open);
    setInfoUser({
      firstName: "",
      lastName: "",
      codeMali: "",
    });
    setSelectItems({
      city: { Name: "", id: "" },
      privense: { Name: "", id: "" },
      gender: { Name: "", id: "" },
      grade: { Name: "", id: "" },
      state: { Name: "", id: "" },
    });
  };
  const clcikChangeToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  const changeInfoUser = (e: any) => {
    const { name, value } = e.target;
    setInfoUser({
      ...infoUser,
      [name]: value,
    });
  };

  const prefectprofile = useMutation(
    () => prefectProfileApi({ infoUser, selectItems,id:loginInfo.idSignup }),
    {
      onSuccess: onSuccess,
      onError: () => {
        setOpen(!open);
      },
    }
  );

  const infoPrefect = () => {
    const validate = checkCodeMali(
      infoUser,
      setErrorCodeMali,
      selectItems,
      setErrorSelect,
      errorSelect
    );
    if (validate) {
      prefectprofile.mutate();
    }
  };

  const user = useQuery(
    ["infouser", loginInfo.idSignup],
    () => infoUserApi(loginInfo.idSignup),
    {
      enabled: toggle,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      onSuccess: (data) => {
        setInfoUser({
          ...infoUser,
          firstName: data.data.data.firstName,
          lastName: data.data.data.lastName,
          codeMali: data.data.data.codeMali,
        });
        setSelectItems({
          ...selectItems,
          grade: {
            Name: data.data.data.level && data.data.data.level.name,
            id: data.data.data.level && data.data.data.level.id,
          },
          privense: {
            Name: data.data.data.privense && data.data.data.privense.name,
            id: data.data.data.privense && data.data.data.privense.id,
          },
          city: {
            Name: data.data.data.city && data.data.data.city.name,
            id: data.data.data.city && data.data.data.city.id,
          },
          state: {
            Name: data.data.data.state && data.data.data.state.name,
            id: data.data.data.state && data.data.data.state.id,
          },
          gender: {
            Name: data.data.data.gender,
            id: "",
          },
        });
      },
    }
  );

  return {
    infoUser,
    setInfoUser,
    selectItems,
    setSelectItems,
    errorSelect,
    setErrorSelect,
    onSuccess,
    open,
    setOpen,
    clcikChangeToggle,
    toggle,
    setToggle,
    changeInfoUser,
    infoPrefect,
    errorCodeMali,
    setErrorCodeMali,
    prefectprofile,
    user
  };
};
