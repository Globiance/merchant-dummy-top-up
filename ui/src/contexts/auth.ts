import { createContext } from "react";

interface AuthContext {
  user: any;
  token: string;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  token: "",
});
