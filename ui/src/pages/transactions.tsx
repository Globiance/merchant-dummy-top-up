"use client";

import NavBar from "@/components/NavBar";
import Table, { IColumn } from "@/components/Table";
import TransactionCard from "@/components/TransactionCard";
import { AuthContext } from "@/contexts/auth";
import { useTx } from "@/hooks/useTx";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Transactions() {
  const headers: IColumn[] = [
    {
      title: "Sr.No",
      dataIndex: "srno",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Transaction ID",
      dataIndex: "checkoutId",
    },
    {
      title: "Checkout ID",
      dataIndex: "checkoutId",
    },
    {
      title: "Initiated At",
      dataIndex: "initiatedAt",
      render: (value) => new Date(value).toLocaleString("en-US"),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (value) => new Date(value).toLocaleString("en-US"),
    },
  ];

  const { transactions } = useTx();
  const [rows, setRows] = useState([]);
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  });

  useEffect(() => {
    const data = transactions
      ? transactions.map((tx: any, i: number) => {
          return Object.assign(Object.assign({}, { srno: i + 1 }), tx);
        })
      : [];

    setRows(data);
  }, [transactions]);

  return (
    <div className="bg-blue-100 min-h-[100vh]">
      <NavBar active="Transactions" />
      <div className="main-content">
        <TransactionCard />
        <div className="w-full flex justify-center">
          <div className="table-wrapper">
            <Table data={rows} columns={headers} />
          </div>
        </div>
      </div>
    </div>
  );
}