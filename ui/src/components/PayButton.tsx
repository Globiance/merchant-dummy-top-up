"use client";

interface IPayButton {
  amount: number;
  disabled?: boolean;
  clientId: string
}

export default function PayButton({ amount, disabled, clientId}: IPayButton) {
  const handleOnClick = () => {
    const payload = {
      amount: 2,
      note: "Top up payment",
      apikey: process.env.NEXT_PUBLIC_API_KEY,
      language: "en",
      theme: "light",
      itemName: `Topup $ ${amount}`,
      currency: "USD",
      clientId,
      items: [
        {
          itemName: "Top up",
          qty: 1,
          price: amount,
          taxRate: 0,
        },
      ],
    };

    (window as any).Start(payload);    
  };

  return (
    <button
      disabled={disabled ?? false}
      className={"pay-button" + (disabled ? " disabled" : "")}
      onClick={handleOnClick}
    >
      <h4 className="h4 m-1">Pay {disabled}</h4>
    </button>
  );
}
