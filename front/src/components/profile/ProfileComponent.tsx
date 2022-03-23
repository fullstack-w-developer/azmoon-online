import { useCallback, useState } from "react";

import {
  BackButton,
  ProfileShowInfo,
  ButtonEditProfile,
  Response,
  Fildes,
  StateItems,
} from "./Profile";
import { onFocusSelect, onKeyDownCodeMali } from "./validation";
import usePrivinceList from "./../../hooks/usePrivinceList";

import IsLoading from "./../IsLoading";

const ProfileComponent = () => {
  const {
    infoUser,
    selectItems,
    setSelectItems,
    errorSelect,
    setErrorSelect,
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
  } = StateItems();

  const { getPrivince, getState, getCity } = usePrivinceList({
    idPrivince: selectItems.privense.id,
    idCity: selectItems.state.id,
  });

  return (
    <div className="rtl">
      <ProfileShowInfo onClick={clcikChangeToggle} toggle={toggle} />
      {toggle ? 
        user.isLoading ?<IsLoading  type="bars"/> :
        <div>
          <BackButton clcikChangeToggle={clcikChangeToggle} />
          <Fildes
            changeInfoUser={changeInfoUser}
            errorCodeMali={errorCodeMali}
            errorSelect={errorSelect}
            getCity={getCity}
            getPrivince={getPrivince}
            getState={getState}
            infoUser={infoUser}
            onFocusSelect={onFocusSelect}
            onKeyDownCodeMali={onKeyDownCodeMali}
            selectItems={selectItems}
            setErrorCodeMali={setErrorCodeMali}
            setErrorSelect={setErrorSelect}
            setSelectItems={setSelectItems}
          />

          <ButtonEditProfile onClick={infoPrefect} />
          {prefectprofile.isLoading ? <IsLoading /> : null}
          <Response
            prefectprofile={prefectprofile}
            open={open}
            setOpen={setOpen}
            setToggle={setToggle}
            user={user}
          />
        </div>
       : null}
    </div>
  );
};

export default ProfileComponent;
