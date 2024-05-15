interface ITable {
  serialNo: string;
  amount: number;
  status: string;
  id: string;
  checkoutId: string;
  initiatedAt: string;
  createdAt: string;
}

export default function Table({ rows }: { rows: ITable[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th className="border-2 border-black p-3">Sr.No</th>
          <th className="border-2 border-black p-3">Amount</th>
          <th className="border-2 border-black p-3">Status</th>
          <th className="border-2 border-black p-3">Transaction ID</th>
          <th className="border-2 border-black p-3">Checkout ID</th>
          <th className="border-2 border-black p-3">Initiated At</th>
          <th className="border-2 border-black p-3">Created At</th>
        </tr>
      </thead>
      <tbody>
        {rows ? (
          rows.map((row: ITable, i: number) => {
            return (
              <tr key={i}>
                <td className="border-2 border-black p-3">{i + 1}</td>
                <td className="border-2 border-black p-3">{row.amount}</td>
                <td className="border-2 border-black p-3">{row.status}</td>
                <td className="border-2 border-black p-3">{row.id}</td>
                <td className="border-2 border-black p-3">{row.checkoutId}</td>
                <td className="border-2 border-black p-3">{row.initiatedAt}</td>
                <td className="border-2 border-black p-3">{row.createdAt}</td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    </table>
  );
}
