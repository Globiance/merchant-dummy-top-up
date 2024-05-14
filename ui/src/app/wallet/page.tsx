"use client";

import NavBar from "@/components/NavBar";
import PaymentCardSection from "@/components/PaymentCardSection";
import WalletCard from "@/components/WalletCard";
import { useWallet } from "@/hooks/useWallet";

export default function Wallet() {
  const { balance } = useWallet();

  return (
    <main className="bg-blue-100 min-h-[100vh]">
      <NavBar />
      <div className="main-content">
        <WalletCard balance={balance()} />
        <PaymentCardSection />
      </div>
    </main>
  );
}
