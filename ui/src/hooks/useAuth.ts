"use client";

import { useRouter } from "next/navigation";
import { useSessionStorage } from "usehooks-ts";

export const useAuth = () => {
  const router = useRouter();

  const [token, setValue, removeValue] = useSessionStorage<string | null>(
    "token",
    null
  );

  const login = async (email: string, password: string) => {
    const response = await fetch("http://localhost:9110/api/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 200) {
      const resBody = await response.json();
      setToken(resBody.data.token);

      router.push("/wallet");
    }
  };

  const setToken = (token: string) => {
    setValue(token);
  };

  const logout = async () => {
    const response = await fetch("http://localhost:9110/api/auth/logout", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: "Bearer " + token,
      },
    });

    if (response.status === 200) {
      removeValue();
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    confirmed: string
  ) => {
    const response = await fetch("http://localhost:9110/api/auth/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ name, email, password, confirmed }),
    });

    if (response.status === 200) {
      const resBody = await response.json();
      setToken(resBody.data.token);

      router.push("/wallet");
    }
  };

  return { login, token, setToken, logout, register };
};
