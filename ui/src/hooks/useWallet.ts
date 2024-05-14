"use client";

import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useWallet = () => {
  const { token } = useAuth();

  const { data } = useQuery({
    queryKey: ["balance"],
    queryFn: () => {
      return fetch("http://localhost:9110/api/wallet/balance", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + token,
        },
      }).then((res) => res.json());
    },
  });

  const balance = () => {
    return data.data.balance;
  };

  return { balance };
};
