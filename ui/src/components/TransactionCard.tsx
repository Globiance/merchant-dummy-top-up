"use client";

import { useTx } from "@/hooks/useTx";

export default function TransactionCard() {
  const { reload } = useTx();

  return (
    <div className="transaction-card">
      <div className="transaction-content">
        <button onClick={reload} className="h4">
          Refresh
        </button>
      </div>
    </div>
  );
}
