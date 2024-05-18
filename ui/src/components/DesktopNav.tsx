import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface IDesktopNav {
  active: "Wallet" | "Transactions";
}

export default function DesktopNav({ active }: IDesktopNav) {
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
      <div className="nav-wrapper text-black">
        <Link href={"/"} className="logo-wrapper a text-black">
          <h3 className="h3 m-0 p-0">MyWallet</h3>
        </Link>
        <div className="main-menu-wrapper">
          <a
            onClick={() => handleRedirect("/wallet")}
            className={"a menu-link"}
            style={{ color: active === "Wallet" ? "#000080" : "black" }}
          >
            <h4 className="h4 m-0 p-0">Wallet</h4>
          </a>
          <a
            onClick={() => handleRedirect("/transactions")}
            className="a menu-link"
            style={{ color: active === "Transactions" ? "#000080" : "black" }}
          >
            <h4 className="h4 m-0 p-0">Transactions</h4>
          </a>
        </div>
        <a
          onClick={handleLogout}
          className="logout-wrapper text-[#000080] hover:text-[#000080]"
        >
          <h4 className="h4">
            <FontAwesomeIcon icon={faRightFromBracket} />
          </h4>
        </a>
      </div>
    </nav>
  );
}
