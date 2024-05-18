import { useSessionStorage } from "usehooks-ts";
import { useApi } from "./useApi";
import Router from "next/router";

export const useAuth = () => {
  const { compose } = useApi();

  const [token, setValue, removeValue] = useSessionStorage<string | null>(
    "token",
    null
  );
  const [user, setUser, removeUser] = useSessionStorage("user", null);

  const login = async (email: string, password: string) => {
    const response = await fetch(compose("/api/auth/login"), {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ email, password }),
    });

    const resBody = await response.json();

    if (response.status === 200) {
      setValue(resBody.data.token);
      setUser(resBody.data.user);
      Router.push("/wallet");

      return null;
    } else {
      return resBody.message;
    }
  };

  const setToken = (token: string) => {
    setValue(token);
  };

  const logout = async () => {
    const response = await fetch(compose("/api/auth/logout"), {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: "Bearer " + token,
      },
    });

    if (response.status === 200) {
      removeValue();
      removeUser();
      Router.push("/login");
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    confirmed: string
  ) => {
    const response = await fetch(compose("/api/auth/register"), {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ name, email, password, confirmed }),
    });

    const resBody = await response.json();

    if (response.status === 200) {
      setToken(resBody.data.token);
      Router.push("/wallet");
      return null;
    } else {
      return resBody.message;
    }
  };

  return { user, login, token, setToken, logout, register };
};
