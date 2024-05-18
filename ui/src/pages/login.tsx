import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import { useState } from "react";

export default function LoginPage() {
  const [tab, setTab] = useState<"login" | "register">("login");

  const handleTab = (tabClicked: string) => {
    setTab((prev) => {
      if (tabClicked === "login" && prev === "register") {
        return "login";
      } else if (tabClicked === "register" && prev === "login") {
        return "register";
      } else {
        return prev;
      }
    });
  };

  return (
    <div className="bg-blue-100 min-h-[100vh]">
      <div className="flex justify-center items-center min-h-[100vh]">
        <div className="lg:w-[40%] h-full">
          <div className="w-full bg-white shadow-sm min-h-[400px] rounded-xl">
            <div className="flex border-b-[1px] border-slate-300 padb-2">
              <span className="mart-5" onClick={() => handleTab("login")}>
                <p className="h4 px-4 cursor-pointer">Log in</p>
              </span>
              <span className="mart-5" onClick={() => handleTab("register")}>
                <p className="h4 border-l-[1px] border-slate-300 px-4 cursor-pointer">
                  Register
                </p>
              </span>
            </div>
            <div className="px-4 mart-5">
              {tab === "register" ? <RegisterForm /> : <LoginForm />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
