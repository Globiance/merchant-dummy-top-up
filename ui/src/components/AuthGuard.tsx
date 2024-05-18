"use client";

import { useAuth } from "@/hooks/useAuth";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthContext } from "@/contexts/auth";
import Router from "next/router";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AuthGuard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  const { token, user } = useAuth();
  const protectedPath = ["/wallet", "/transactions"];
  const currentPath = usePathname();

  useEffect(() => {
    if (protectedPath.includes(currentPath) && !user && !token) {
      Router.push("/login");
    } else if (!protectedPath.includes(currentPath) && user && token) {
      Router.push("/wallet");
    }
  });

  return (
    <AuthContext.Provider value={{ user, token: token as string }}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AuthContext.Provider>
  );
}
