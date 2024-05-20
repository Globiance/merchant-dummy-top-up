import { Component, type InfernoNode } from 'inferno'

interface IPayButton {
  amount: number
  disabled?: boolean
  clientId: string
}

export default class PayButton extends Component<IPayButton, any> {
  constructor({ clientId, disabled, amount }: IPayButton) {
    super({ clientId, disabled, amount })
    this.state = {}
  }

  handleOnClick(): void {
    const payload = {
      amount: 2,
      note: 'Top up payment',
      apikey: process.env.INFERNO_APP_API_KEY,
      language: 'en',
      theme: 'light',
      itemName: `Topup $ ${this.props.amount}`,
      currency: 'USD',
      clientId: this.props.clientId,
      items: [
        {
          itemName: 'Top up',
          qty: 1,
          price: this.props.amount,
          taxRate: 0
        }
      ]
    }

    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-extra-semi
      ;(window as any).Start(payload)
    }
  }

  render(props: IPayButton): InfernoNode {
    return (
      <button
        disabled={props.disabled ?? false}
        className={'pay-button' + (props.disabled ? ' disabled' : '')}
        onClick={() => {
          this.handleOnClick()
        }}
      >
        <h4 className="h4 m-1">Pay {props.disabled}</h4>
      </button>
    )
  }
}
