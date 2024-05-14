"use client";

import { useAuth } from "@/hooks/useAuth";
import { redirect, usePathname } from "next/navigation";

export default function AuthGuard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const login = "/login";
  const currentPage = usePathname();

  const { token } = useAuth();

  if (login !== currentPage && !token) {
    return redirect(login);
  } else {
    return <>{children}</>;
  }
}
