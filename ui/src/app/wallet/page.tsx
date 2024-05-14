import NavBar from "@/components/NavBar";
import PaymentCardSection from "@/components/PaymentCardSection";
import WalletCard from "@/components/WalletCard";

export default function Wallet() {
  return (
    <main className="bg-blue-100 min-h-[100vh]">
      <NavBar />
      <div className="main-content">
        <WalletCard />
        <PaymentCardSection />
      </div>
    </main>
  );
}
