export default function NavBar() {
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
        <a href="#" className="a menu-link">
          <h4 className="h4">Logout</h4>
        </a>
      </div>
    </nav>
  );
}
