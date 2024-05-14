"use client";

interface IPayButton {
  amount: number;
  disabled?: boolean;
}

export default function PayButton({ amount, disabled }: IPayButton) {
  const handleOnClick = () => {
    const payload = {
      amount: 2,
      note: "Top up payment",
      apikey: "01259e6d-0369-4ff0-8b9c-4481f43239d9",
      language: "en",
      theme: "light",
      itemName: `Topup $ ${amount}`,
      currency: "USD",
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