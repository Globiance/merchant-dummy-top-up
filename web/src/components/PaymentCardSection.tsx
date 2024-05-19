import { Component, type InfernoNode } from 'inferno'
import PaymentCard from './PaymentCard'

export default class PaymentCardSection extends Component<any, any> {
  render(): InfernoNode {
    return (
      <div className="w-full">
        <div className="payment-card-section">
          <PaymentCard amount={50} type="static" />
          <PaymentCard amount={100} type="static" />
          <PaymentCard amount={200} type="static" />
          <PaymentCard amount={500} type="static" />
          <PaymentCard amount={1000} type="static" />
          <PaymentCard amount={0} type="input" />
        </div>
      </div>
    )
  }
}
