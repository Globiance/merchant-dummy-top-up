interface IWalletCard {
  balance: number;
}

export default function WalletCard({ balance }: IWalletCard) {
  return (
    <div className="wallet-card">
      <div className="wallet-content">
        <h3 className="lg:h3 xs:h4">My wallet balance</h3>
        <h3 className="lg:h3 xs:h4">$ {balance ? Number(balance).toFixed(2) : ""}</h3>
      </div>
    </div>
  );
}
