import { useWallet } from "@/hooks/useWallet";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IWalletCard {
  balance: number;
}

export default function WalletCard({ balance }: IWalletCard) {
  const { refetch } = useWallet()

  return (
    <div className="wallet-card">
      <div className="wallet-content">
        <h3 className="xl:h3 lg:h4 sm:h5 xs:h6">My wallet balance</h3>
        <span className="xl:h3 lg:h4 sm:h5 xs:h6">$ {balance ? Number(balance).toFixed(2) : ""}
          <span onClick={() => {refetch()}} className="ml-5 cursor-pointer"><FontAwesomeIcon className="hover:shadow-xl" icon={faRefresh} />
          </span>
        </span>
      </div>
    </div>
  );
}
