"use client"

import { useAuth } from "@/hooks/useAuth";
import { usePathname, useRouter } from "next/navigation";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function AuthGuard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  const router = useRouter();
  const wallet = "/wallet";
  const login = "/login";
  const currentPage =  usePathname()
  const { token } = useAuth();

  const [isRedirect, setRedirect] = useState<string | null>(null)

  useEffect(() => {
    if (login !== currentPage && !token) {
      setRedirect(login)
    } else if (login === currentPage && token) {
      setRedirect(wallet)
    } 
  }, [currentPage, token])

  if (isRedirect) {
    router.push(isRedirect)
  } 

 return (<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>)
}
