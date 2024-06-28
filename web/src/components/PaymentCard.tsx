import { Component, type InfernoNode } from 'inferno'
import PayButton from './PayButton'

export default class PaymentCard extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { disabled: true, amount: 0, clientId: 0 }
  }

  handleOnInput(e: Event): void {
    if ((e.target as any).value) {
      this.setState(
        Object.assign(
          {},
          {
            amount: Number((e.target as any).value),
            disabled: false
          }
        )
      )
    } else {
      this.setState(
        Object.assign(
          {},
          {
            amount: 0,
            disabled: false
          }
        )
      )
    }
  }

  componentDidMount(): void {
    const user = sessionStorage.getItem('user')!
    this.setState(
      Object.assign({ ...this.state }, { clientId: JSON.parse(user).id })
    )
  }

  render(props: any, state: any): InfernoNode {
    if (props.type === 'static') {
      return (
        <div className="xl:w-1/3 xs:w-full">
          <div className="payment-card-wrapper">
            <h4 className="h4 marb-5">Top Up</h4>
            <h2 className="h2 marb-8">$ {props.amount}</h2>
            <PayButton
              clientId={String(state?.clientId)}
              amount={this.props.amount}
            />
          </div>
        </div>
      )
    } else {
      return (
        <div className="xl:w-1/3 xs:w-full">
          <form
            className="payment-card-wrapper-form"
            onSubmit={(e: any) => e.preventDefault()}
            onInput={(e: any) => {
              this.handleOnInput(e)
            }}
          >
            <h4 className="h4 marb-5">Top Up</h4>
            <div className="marb-5 px-3">
              <span className="currency-sign">
                <h2 className="h2">$</h2>
              </span>
              <input type="number" />
            </div>
            <PayButton
              clientId={String(state?.clientId)}
              disabled={this.state?.disabled}
              amount={this.state?.amount}
            />
          </form>
        </div>
      )
    }
  }
}
