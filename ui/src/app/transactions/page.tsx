import NavBar from "@/components/NavBar";
import Table from "@/components/Table";
import TransactionCard from "@/components/TransactionCard";

export default function Transactions() {
  return (
    <main className="bg-blue-100 min-h-[100vh]">
      <NavBar />

      <div className="main-content">
        <TransactionCard />
        <div className="w-full flex justify-center">
          <div className="table-wrapper">
            <Table />
          </div>
        </div>
      </div>
    </main>
  );
}
