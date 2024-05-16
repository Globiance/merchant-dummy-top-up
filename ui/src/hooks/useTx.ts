"use client";

import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { useApi } from "./useApi";

export const useTx = () => {
  const { compose } = useApi();
  const { token } = useAuth();

  const { data, refetch } = useQuery({
    queryKey: ["tx"],
    queryFn: async () => {
      const res = await fetch(compose("/api/transaction"), {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + token,
        },
      });
      return await res.json();
    },
  });

  const transactions = () => {
    return data?.data;
  };

  const reload = () => {
    refetch();
  };

  return { transactions: transactions(), reload };
};
