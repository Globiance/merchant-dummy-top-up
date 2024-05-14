interface IWalletCard {
  balance: number;
}

export default function WalletCard({ balance }: IWalletCard) {
  return (
    <div className="wallet-card">
      <div className="wallet-content">
        <h3 className="h3">My wallet balance</h3>
        <h3 className="h3">$ {balance}</h3>
      </div>
    </div>
  );
}
