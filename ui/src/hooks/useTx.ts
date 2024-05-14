"use client";

import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useTx = () => {
  const { token } = useAuth();

  const { data, refetch } = useQuery({
    queryKey: ["tx"],
    queryFn: () => {
      return fetch("http://localhost:9110/api/transaction", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + token,
        },
      }).then((res) => res.json());
    },
  });

  const transactions = () => {
    return data?.data;
  };

  const reload = () => {
    refetch();
  };

  return { transactions, reload };
};
