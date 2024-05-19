import NavBar from '@/components/NavBar'
import PaymentCardSection from '@/components/PaymentCardSection'
import WalletCard from '@/components/WalletCard'
import { Component, type InfernoNode } from 'inferno'

export default class WalletPage extends Component<any, any> {
  render(): InfernoNode {
    return (
      <>
        <div className="bg-blue-100 min-h-[100vh]">
          <NavBar active="Wallet" />
          <div className="main-content">
            <WalletCard balance={Number('0')} refetch={() => {}} />
            <PaymentCardSection />
          </div>
        </div>
      </>
    )
  }
}
