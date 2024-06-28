import { balance } from '@/api'
import NavBar from '@/components/NavBar'
import PaymentCardSection from '@/components/PaymentCardSection'
import WalletCard from '@/components/WalletCard'
import { Component, type InfernoNode } from 'inferno'

export default class WalletPage extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { balance: 0 }
  }

  componentDidMount(): void {
    this.fetchBalance().catch(console.log)
  }

  async fetchBalance(): Promise<void> {
    const token = sessionStorage.getItem('token')
    const result = await balance(token ?? '')

    this.setState(Object.assign({ ...this.state }, { balance: Number(result) }))
  }

  render(props: Readonly<any>, state: Readonly<any>): InfernoNode {
    return (
      <>
        <div>
          <NavBar active="Wallet" />
          <div className="main-content">
            <WalletCard
              balance={state?.balance}
              refetch={() => {
                this.fetchBalance().catch(console.log)
              }}
            />
            <PaymentCardSection />
          </div>
        </div>
      </>
    )
  }
}
