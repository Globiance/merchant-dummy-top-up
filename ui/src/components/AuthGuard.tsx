"use client";

import { useAuth } from "@/hooks/useAuth";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthContext } from "@/contexts/auth";

export default function AuthGuard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  const { token, user, setToken } = useAuth();

  return (
    <AuthContext.Provider value={{ user, setToken, token: token as string }}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AuthContext.Provider>
  );
}
