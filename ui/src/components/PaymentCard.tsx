"use client";
import { useState } from "react";
import PaymentButton from "./PayButton";

interface IPaymentCard {
  amount: number;
  type: "static" | "input";
}

export default function PaymentCard({ amount, type }: IPaymentCard) {
  const [enteredAmount, setEnteredAmount] = useState(0);
  const handleOnInput = (event: any) => {
    setEnteredAmount((event.target as any).value);
  };

  if (type === "static") {
    return (
      <div className="w-1/3">
        <div className="payment-card-wrapper">
          <h4 className="h4 marb-5">Top Up</h4>
          <h2 className="h2 marb-8">$ {amount}</h2>
          <PaymentButton amount={amount} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-1/3">
        <form
          className="payment-card-wrapper-form"
          onSubmit={(e) => e.preventDefault()}
          onInput={handleOnInput}
        >
          <h4 className="h4 marb-5">Top Up</h4>
          <div className="marb-5 px-3">
            <span className="currency-sign">
              <h2 className="h2">$</h2>
            </span>
            <input type="number" />
          </div>
          <PaymentButton amount={enteredAmount} />
        </form>
      </div>
    );
  }
}
