import React, { createContext, ReactNode } from "react";
import createPersistedState from "use-persisted-state";

interface stateContext {
  loginInfo: {
    phonenumber:any,
    Code:any,
    token:any,
    isRegister:boolean,
    idSignup:string
  };
  setLoginInfo:  React.Dispatch<
  React.SetStateAction<Object>
>;
}

const useCounterState = createPersistedState("logininfo");

export const loginInfoContext = createContext<stateContext>({} as stateContext);

interface propsContextPhoneNumber {
  children: ReactNode;
}

const LoginInfoConText = ({ children }: propsContextPhoneNumber) => {
  const [loginInfo, setLoginInfo] = useCounterState({});

  const context: stateContext = {
    loginInfo: loginInfo as any,
    setLoginInfo: setLoginInfo as React.Dispatch<
      React.SetStateAction<Object>
    >,
  };

  return (
    <loginInfoContext.Provider value={context}>
      {children}
    </loginInfoContext.Provider>
  );
};

export default LoginInfoConText;
