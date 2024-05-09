"use client";

interface IPayButton {
  amount: number;
}

export default function PayButton({ amount }: IPayButton) {
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
    <button className="pay-button" onClick={handleOnClick}>
      <h4 className="h4">Pay</h4>
    </button>
  );
}
