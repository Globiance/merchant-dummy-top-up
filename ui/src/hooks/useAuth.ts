import { useSessionStorage } from "usehooks-ts";

export const useAuth = () => {
  const [token, setValue, removeValue] = useSessionStorage<string | null>(
    "token",
    null
  );

  const setToken = (token: string) => {
    setValue(token);
  };

  const removeToken = () => {
    removeToken();
  };

  return { token, setToken, removeToken };
};
