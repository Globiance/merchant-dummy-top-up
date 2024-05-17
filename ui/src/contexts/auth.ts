import { createContext } from "react";

interface AuthContext {
  user: any;
  setToken: (user: any) => void;
  token: string;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  token: "",
  setToken: () => {},
});
