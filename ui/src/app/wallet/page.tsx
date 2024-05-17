/* eslint-disable @next/next/no-sync-scripts */
"use client";

import NavBar from "@/components/NavBar";
import PaymentCardSection from "@/components/PaymentCardSection";
import WalletCard from "@/components/WalletCard";
import { AuthContext } from "@/contexts/auth";
import { useWallet } from "@/hooks/useWallet";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Wallet() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const { balance, refetch } = useWallet();
  const [currentBalance, setCurrentBalance] = useState<string>("0");

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  });

  useEffect(() => {
    setCurrentBalance(balance);
  }, [balance]);

  return (
    <>
      <div className="bg-blue-100 min-h-[100vh]">
        <NavBar active="Wallet" />
        <div className="main-content">
          <WalletCard
            balance={Number(currentBalance)}
            refetch={() => refetch()}
          />
          <PaymentCardSection />
        </div>
      </div>
    </>
  );
}
