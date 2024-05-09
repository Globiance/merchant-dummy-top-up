export default function Transactions() {
  return (
    <main className="bg-blue-100 min-h-[100vh]">
      {/* NavBar */}
      <nav className="text-black fixed top-0 h-16 min-w-full  bg-white shadow-sm">
        <div className="flex h-full xl:w-[1200px] m-auto">
          <a href="#" className="flex items-center ">
            <h3 className="h3">MyWallet</h3>
          </a>
          <div className="flex justify-center gap-24 w-full">
            <a href="/wallet" className="flex items-center">
              <h4 className="h4">Wallet</h4>
            </a>
            <a href="/transactions" className="flex items-center">
              <h4 className="h4">Transactions</h4>
            </a>
          </div>
          <a href="#" className="flex items-center ">
            <h4 className="h4">Logout</h4>
          </a>
        </div>
      </nav>

      <div className="relative w-full text-black top-16">
        <div className="w-full flex justify-center">
          <div className="bg-white mt-7 p-4 w-[50%] flex justify-end">
            <button className="h4 bg-[#000080] text-white pt-3 pb-3 px-5 rounded-xl shadow-black shodow-md">
              Refresh
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="bg-white mt-7 p-10 w-[50%] flex justify-center">
            <table>
              <thead className="">
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
                <tr>
                  <td className="border-2 border-black p-3"></td>
                  <td className="border-2 border-black p-3"></td>
                  <td className="border-2 border-black p-3"></td>
                  <td className="border-2 border-black p-3"></td>
                  <td className="border-2 border-black p-3"></td>
                  <td className="border-2 border-black p-3"></td>
                  <td className="border-2 border-black p-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
