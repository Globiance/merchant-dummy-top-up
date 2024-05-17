import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function DesktopNav() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <a onClick={() => handleRedirect("/")} className="a logo-wrapper">
          <h3 className="h3 m-0 p-0">MyWallet</h3>
        </a>
        <div className="main-menu-wrapper">
          <a
            onClick={() => handleRedirect("/wallet")}
            className={"a menu-link "}
          >
            <h4 className="h4 m-0 p-0">Wallet</h4>
          </a>
          <a
            onClick={() => handleRedirect("/transactions")}
            className="a menu-link"
          >
            <h4 className="h4 m-0 p-0">Transactions</h4>
          </a>
        </div>
        <a onClick={handleLogout} className="a logout-wrapper ">
          <h4 className="h4">
            <FontAwesomeIcon icon={faRightFromBracket} />
          </h4>
        </a>
      </div>
    </nav>
  );
}
