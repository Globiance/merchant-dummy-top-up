import PaymentButton from "@/components/PayButton";

export default function Wallet() {
  return (
    <main className="bg-blue-100 min-h-[100vh]">
      {/* NavBar */}
      <nav className="text-black fixed top-0 h-16 min-w-full  bg-white shadow-sm">
        <div className="flex h-full xl:w-[1200px] m-auto">
          <a href="/" className="flex items-center ">
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
          <div className="bg-white mt-7 p-10 w-[50%] flex justify-between">
            <h3 className="h3">My wallet balance</h3>
            <h3 className="h3">$ 1,000</h3>
          </div>
        </div>
        <div className="w-full">
          <div className="w-[50%] m-auto justify-center flex flex-wrap mt-10">
            <div className="w-1/3">
              <div className="bg-white pt-10 pb-7 m-1 flex flex-col justify-center items-center">
                <h4 className="h4 mb-5">Top Up</h4>
                <h2 className="h2 mb-8">$ 50</h2>
                <PaymentButton amount={50} />
              </div>
            </div>
            <div className="w-1/3">
              <div className="bg-white pt-10 pb-7 m-1 flex flex-col justify-center items-center">
                <h4 className="h4 mb-5">Top Up</h4>
                <h2 className="h2 mb-8">$ 100</h2>
                <PaymentButton amount={100} />
              </div>
            </div>
            <div className="w-1/3">
              <div className="bg-white pt-10 pb-7 m-1 flex flex-col justify-center items-center">
                <h4 className="h4 mb-5">Top Up</h4>
                <h2 className="h2 mb-8">$ 200</h2>
                <PaymentButton amount={200} />
              </div>
            </div>
            <div className="w-1/3">
              <div className="bg-white pt-10 pb-7 m-1 flex flex-col justify-center items-center">
                <h4 className="h4 mb-5">Top Up</h4>
                <h2 className="h2 mb-8">$ 500</h2>
                <PaymentButton amount={500} />
              </div>
            </div>
            <div className="w-1/3">
              <div className="bg-white pt-10 pb-7 m-1 flex flex-col justify-center items-center">
                <h4 className="h4 mb-5">Top Up</h4>
                <h2 className="h2 mb-8">$ 1,000</h2>
                <PaymentButton amount={1000} />
              </div>
            </div>
            <div className="w-1/3">
              <form className="bg-white px-3 pt-8 pb-8 m-1 flex flex-col justify-center items-center">
                <h4 className="h4 mb-5">Top Up</h4>
                <div className="mb-5">
                  <span className="absolute pl-2 pt-2">
                    <h2 className="h2">$</h2>
                  </span>
                  <input
                    className="pl-16 w-full text-6xl border-2 border-solid border-slate-300 rounded-lg bg-slate-300"
                    type="number"
                  />
                </div>
                <PaymentButton amount={500} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
