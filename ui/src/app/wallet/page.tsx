import NavBar from "@/components/NavBar";
import PaymentCard from "@/components/PaymentCard";

export default function Wallet() {
  return (
    <main className="bg-blue-100 min-h-[100vh]">
      {/* NavBar */}
      <NavBar />

      <div className="relative w-full text-black top-16">
        <div className="w-full flex justify-center">
          <div className="bg-white mt-7 p-10 w-[50%] flex justify-between">
            <h3 className="h3">My wallet balance</h3>
            <h3 className="h3">$ 1,000</h3>
          </div>
        </div>
        <div className="w-full">
          <div className="payment-card-section">
            <PaymentCard amount={50} type="static" />
            <PaymentCard amount={100} type="static" />
            <PaymentCard amount={200} type="static" />
            <PaymentCard amount={500} type="static" />
            <PaymentCard amount={1000} type="static" />
            <PaymentCard amount={0} type="input" />
          </div>
        </div>
      </div>
    </main>
  );
}
