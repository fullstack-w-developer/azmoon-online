import React from "react";
import { getcodeApi } from "../services/api";
import { useQuery } from "react-query";

interface props {
  onSuccesss?: (data:any) => void;
  phonenumber: string;
  request: any;
}
export const useGetCode = ({ phonenumber, onSuccesss, request }: props) => {
  const getcode = useQuery(
    ["getcode", phonenumber],
    () => getcodeApi(phonenumber),
    {
      enabled: request,
      retry: 3,
      staleTime: Infinity,
      cacheTime: 9 * 1000,
      refetchOnWindowFocus: false,
      onSuccess: onSuccesss,
    }
  );
  return {
    getcode,
  };
};
