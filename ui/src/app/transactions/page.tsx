"use client";

import NavBar from "@/components/NavBar";
import Table, { IColumn } from "@/components/Table";
import TransactionCard from "@/components/TransactionCard";
import { useTx } from "@/hooks/useTx";

export default function Transactions() {
  const headers: IColumn[] = [
    {
      title: "Sr.No",
      dataIndex: "srno",
    },
    {
      title: "Amount",
      dataIndex: "amount"
    },
    {
      title: "Status",
      dataIndex: "status"
    },
    {
      title: "Transaction ID",
      dataIndex: "checkoutId"
    },
    {
      title: "Checkout ID",
      dataIndex: "checkoutId"
    },
    {
      title: "Initiated At",
      dataIndex: "initiatedAt"
    },
    {
      title: "Created At",
      dataIndex: "createdAt"
    },
  ]

  const { transactions } = useTx();

  const data = transactions() ?? []
  const rows = data.map((tx:any, i:number) => {
    return Object.assign(Object.assign({}, {srno : i + 1}), tx)
  })

  return (
    <main className="bg-blue-100 min-h-[100vh]">
      <NavBar />
      <div className="main-content">
        <TransactionCard />
        <div className="w-full flex justify-center">
          <div className="table-wrapper">
            <Table data={rows} columns={headers} />
          </div>
        </div>
      </div>
    </main>
  );
}
