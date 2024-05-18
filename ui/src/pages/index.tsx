import { useAuth } from "@/hooks/useAuth";
import Router from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { token, user } = useAuth();

  useEffect(() => {
    if (!token || !user) {
      Router.push("/login");
    } else {
      Router.push("/wallet");
    }
  });
}
