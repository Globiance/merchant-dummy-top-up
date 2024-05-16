import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MobileNav() {
  const router = useRouter();
  const { logout } = useAuth();

  const [toggle, setToggle] = useState(false);

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav>
      <div className="h-full grid grid-cols-3 items-center text-center">
        <a className="col-start-2 a" onClick={() => handleRedirect("/")}>
          <h5 className="h5 mb-0">MyWallet</h5>
        </a>
        <div
          className="cursor-pointer flex justify-end items-center mr-5 mb-0"
          onClick={() => setToggle((prev) => !prev)}
        >
          {!toggle ? (
            <div className="border-2 border-black w-10 h-10 rounded-md flex flex-col pb-1 pt-1">
              <div className="border-2 border-black w-8 rounded-md m-auto"></div>
              <div className="border-2 border-black w-8 rounded-md m-auto"></div>
              <div className="border-2 border-black w-8 rounded-md m-auto"></div>
            </div>
          ) : (
            <div className="border-2 border-black w-10 h-10 rounded-md flex flex-col pb-1 pt-1 relative">
              <div className="absolute border-2 border-black rounded-md rotate-45 w-10 top-[15px] right-[-2px]"></div>
              <div className="absolute border-2 border-black rounded-md -rotate-45 w-10 top-[15px] right-[-2px]"></div>
            </div>
          )}
        </div>
      </div>
      <span
        style={{ visibility: !toggle ? "hidden" : "visible" }}
        className="absolute z-10 right-0 bg-white w-40 text-center flex flex-col border-l-2 border-r-2 border-b-2 shadow-lg"
      >
        <a onClick={() => handleRedirect("/wallet")} className="a border-b-2">
          <h4 className="h4">Wallet</h4>
        </a>
        <a
          onClick={() => handleRedirect("/transactions")}
          className="a border-b-2"
        >
          <h4 className="h4">Transaction</h4>
        </a>
        <a onClick={handleLogout} className="a border-b-2">
          <h4 className="h4">Logout</h4>
        </a>
      </span>
    </nav>
  );
}
