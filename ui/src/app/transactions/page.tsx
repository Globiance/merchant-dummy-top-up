"use client";

import NavBar from "@/components/NavBar";
import Table from "@/components/Table";
import TransactionCard from "@/components/TransactionCard";
import { useTx } from "@/hooks/useTx";

export default function Transactions() {
  const { transactions } = useTx();

  return (
    <main className="bg-blue-100 min-h-[100vh]">
      <NavBar />

      <div className="main-content">
        <TransactionCard />
        <div className="w-full flex justify-center">
          <div className="table-wrapper">
            <Table rows={transactions()} />
          </div>
        </div>
      </div>
    </main>
  );
}
