"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@/hooks/useAuth";

export default function NavBar() {
  const { logout } = useAuth();

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="a logo-wrapper">
          <h3 className="h3">MyWallet</h3>
        </a>
        <div className="main-menu-wrapper">
          <a href="/wallet" className="a menu-link">
            <h4 className="h4">Wallet</h4>
          </a>
          <a href="/transactions" className="a menu-link">
            <h4 className="h4">Transactions</h4>
          </a>
        </div>
        <a onClick={logout} className="a logout-wrapper h4 ">
          <FontAwesomeIcon icon={faRightFromBracket} />
        </a>
      </div>
    </nav>
  );
}
