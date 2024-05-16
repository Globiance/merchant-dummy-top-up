"use client";

import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { useApi } from "./useApi";

export const useWallet = () => {
  const { compose } = useApi();
  const { token } = useAuth();

  const { data, refetch } = useQuery({
    queryKey: ["balance"],
    queryFn: async () => {
      const res = await fetch(compose("/api/wallet/balance"), {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + token,
        },
      });
      return await res.json();
    },
  });

  const balance = () => {
    return data?.data?.balance;
  };

  return { balance, refetch};
};
