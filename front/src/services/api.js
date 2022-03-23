import axios from "axios";

export const checkphoneApi = (data) =>
  axios.post("auth/checkphone", {
    phonenumber: data,
  });

export const getcodeApi = (data) => axios.get(`auth?getcode=${data}`);
export const verifycodeApi = (phonenumber, code) =>
  axios.post(`auth/verifycode`, {
    phonenumber,
    code,
  });

export const createQuestionApi = ({ question, level }) =>
  axios.post(`question`, {
    question: question.question,
    option1: question.option1,
    option2: question.option2,
    option3: question.option3,
    option4: question.option4,
    level: { label: level.Name, value: level.id },
    isCurrent: question.isCurrect,
  });

export const getPrivinceApi = () => axios.get("listprivince");
export const getStateApi = (id) => axios.get(`listprivince/states?id=${id}`);
export const getCityApi = (id) => axios.get(`listprivince/citys?id=${id}`);
export const profileApi = (data) => axios.post(`signup`, data);
export const prefectProfileApi = ({ infoUser, selectItems,id }) =>
  axios.post(`signup/prefectProfile`, {
    id,
    codeMali: parseInt(infoUser.codeMali),
    firstName: infoUser.firstName,
    lastName: infoUser.lastName,
    level: {
      name: selectItems.grade.Name,
      id: selectItems.grade.id,
    },
    privense: {
      name: selectItems.privense.Name,
      id: selectItems.privense.id,
    },
    state: {
      name: selectItems.state.Name,
      id: selectItems.state.id,
    },
    city: {
      name: selectItems.city.Name,
      id: selectItems.city.id,
    },
    gender: selectItems.gender.Name,
  });

export const infoUserApi = (id) => axios.get(`signup/infouser?id=${id}`);
export const testsApi = () => axios.get(`tests`);
export const createMytestApi = (id) => axios.post(`mytest`,{id:id});
export const getMytestApi = () => axios.get(`mytest`);
export const getQuestionApi = (level) => axios.get(`question?level=${level}`);
