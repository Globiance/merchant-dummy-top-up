import { useEffect, useState } from "react";

interface IAlert {
  message: string;
  display: boolean;
  onClose: () => void;
}

export default function Alert({ message, display, onClose }: IAlert) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(display ? true : false);
  }, [display]);

  return (
    <div className="absolute top-8 left-0 w-full">
      <div
        className=" bg-red-300 w-[80%] m-auto shadow-lg rounded-lg border-2 border-red-600 flex justify-between"
        style={{ visibility: isOpen ? "visible" : "hidden" }}
      >
        <h5 className="h5 h-auto w-full pad-5 m-0 break-words">{message}</h5>
        <div className="relative pad-5 m-0">
          <span
            onClick={() => {
              setOpen(false);
              onClose();
            }}
            className="absolute right-5 z-10 text-2xl hover:shadow-2xl cursor-pointer"
          >
            <p className="p-0 m-0">X</p>
          </span>
        </div>
      </div>
    </div>
  );
}
