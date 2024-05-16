"use client";

import NavBar from "@/components/NavBar";
import PaymentCardSection from "@/components/PaymentCardSection";
import WalletCard from "@/components/WalletCard";
import { useWallet } from "@/hooks/useWallet";
import { useEffect, useState } from "react";

export default function Wallet() {
  const { balance, refetch } = useWallet();
  const [currentBalance, setCurrentBalance] = useState<string>("0")

  useEffect(() => {
    setCurrentBalance(balance)
  },[balance])

  return (
    <div>
      <NavBar />
      <div className="main-content">
        <WalletCard balance={Number(currentBalance)} refetch={() => refetch()}  />
        <PaymentCardSection />
      </div>
    </div>
  );
}
