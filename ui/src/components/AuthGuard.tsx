"use client";

import { useAuth } from "@/hooks/useAuth";
import { redirect, usePathname, useRouter } from "next/navigation";

export default function AuthGuard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const wallet = "/wallet";
  const login = "/login";
  const currentPage = usePathname();

  const { token } = useAuth();

  if (login !== currentPage && !token) {
    router.push(login);
  } else if (login === currentPage && token) {
    router.push(wallet);
  } else {
    return <>{children}</>;
  }
}
