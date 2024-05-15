"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@/hooks/useAuth";
import { usePathname, useRouter } from "next/navigation";
import { useMediaQuery } from 'usehooks-ts';
import { useState } from "react";

export default function NavBar() {
  const router = useRouter();
  const { logout } = useAuth();
  const matches = useMediaQuery('(min-width: 768px)')
  const currentPage = usePathname();

  const [toggle, setToggle] = useState(false)

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  return matches ? (
    <>
  <nav>
    <div className="nav-wrapper">
      <a onClick={() => handleRedirect("/")} className="a logo-wrapper">
        <h3 className="h3 m-0 p-0">MyWallet</h3>
      </a>
      <div className="main-menu-wrapper">
        <a onClick={() => handleRedirect("/wallet")} className={"a menu-link " + (currentPage  === '/wallet' ? 'active' : '')}>
          <h4 className="h4 m-0 p-0">Wallet</h4>
        </a>
        <a
          onClick={() => handleRedirect("/transactions")}
          className="a menu-link"
        >
          <h4 className="h4 m-0 p-0">Transactions</h4>
        </a>
      </div>
      <a onClick={logout} className="a logout-wrapper h4 ">
        <FontAwesomeIcon icon={faRightFromBracket} />
      </a>
    </div>
  </nav>
  </>
  ) : (
    <>
  <nav>
    <div className="h-full grid grid-cols-3 items-center text-center">
        <a className="col-start-2 a" onClick={() => handleRedirect("/")}><h5 className="h5 mb-0">MyWallet</h5></a>
        <div className="cursor-pointer flex justify-end items-center mr-5 mb-0" onClick={() => setToggle(prev => !prev) }>
          <div className="border-2 border-black w-10 h-10 rounded-md flex flex-col pb-1 pt-1">
            <div className="border-2 border-black w-8 rounded-md m-auto"></div>
            <div className="border-2 border-black w-8 rounded-md m-auto"></div>
            <div className="border-2 border-black w-8 rounded-md m-auto"></div>
          </div>
        </div>
    </div>
    <span style={{visibility: !toggle ? 'hidden' : 'visible' }} className="absolute z-10 right-0 bg-white w-40 text-center flex flex-col border-l-2 border-r-2 border-b-2 shadow-lg">
      <a onClick={() => handleRedirect("/wallet")} className="a border-b-2"><h4 className="h4">Wallet</h4></a>
      <a onClick={() => handleRedirect("/transactions")} className="a border-b-2"><h4 className="h4">Transaction</h4></a>
      <a onClick={logout} className="a border-b-2"><h4 className="h4">Logout</h4></a>
    </span>
  </nav>
  </>
  )
}
