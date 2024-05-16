interface IWalletCard {
  balance: number;
}

export default function WalletCard({ balance }: IWalletCard) {
  return (
    <div className="wallet-card">
      <div className="wallet-content">
        <h3 className="xl:h3 lg:h4 sm:h5 xs:h6">My wallet balance</h3>
        <h3 className="xl:h3 lg:h4 sm:h5 xs:h6">$ {balance ? Number(balance).toFixed(2) : ""}</h3>
      </div>
    </div>
  );
}
