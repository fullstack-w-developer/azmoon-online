export const checkCodeMali = (
  infoUser,
  setErrorCodeMali,
  selectItems,
  setErrorSelect,
  errorSelect
) => {
  if (!infoUser.codeMali) {
    setErrorCodeMali("لطفا کد ملی خود را وارد کنید");
    return false;
  } else if (infoUser.codeMali.length < 10) {
    setErrorCodeMali("کد ملی باید 10 رقم باشد");
    return false;
  } else if (selectItems.grade.id === "") {
    setErrorSelect({
      ...errorSelect,
      errorGrade: "لطفا سطح خود را مشخص کنید",
    });
    return false;
  } else if (selectItems.privense.id ===  "") {
    setErrorSelect({
      ...errorSelect,
      errorPrivense: "لطفا استان خود را مشخص کنید",
    });
    return false;
  } else if (selectItems.state.id === "") {
    setErrorSelect({
      ...errorSelect,
      errorState: "لطفا شهرستان خود را مشخص کنید",
    });
    return false;
  } 
  else if (selectItems.city.id === "") {
    setErrorSelect({
      ...errorSelect,
      errorCity: "لطفا شهر خود را مشخص کنید",
    });
    return false;
  }
  else if (selectItems.gender.Name === "") {
    setErrorSelect({
      ...errorSelect,
      errorGender: "لطفا جنسیت خود را مشخص کنید",
    });
    return false;
  }

  return true;
};


export const onFocusSelect = (setErrorSelect)=>{
 
  setErrorSelect({
  errorGrade:"",
  errorPrivense:"",
  errorState:"",
  errorCity:"",
  })
}


export const onKeyDownCodeMali = (setErrorCodeMali)=>{
  setErrorCodeMali("")
}
