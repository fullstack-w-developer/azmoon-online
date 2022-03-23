import React from "react";
import { useQuery } from "react-query";
import { getCityApi, getPrivinceApi, getStateApi } from "./../services/api";

interface props {
  idPrivince: string | number;
  idCity: string | number;
}
const usePrivinceList = ({ idPrivince,idCity }: props) => {
  const getPrivince = useQuery(["privince"], () => getPrivinceApi(), {
    retry: 2,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  const getState = useQuery(
    ["state", idPrivince],
    () => getStateApi(idPrivince),
    {
      enabled: Boolean(idPrivince),
      retry: 2,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );
  const getCity = useQuery(
    ["state", idCity],
    () => getCityApi(idCity),
    {
      enabled: Boolean(idCity),
      retry: 2,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );

  return { getPrivince, getState,getCity };
};

export default usePrivinceList;
