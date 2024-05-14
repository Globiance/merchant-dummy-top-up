import PaymentCard from "./PaymentCard";

export default function PaymentCardSection() {
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
  );
}
