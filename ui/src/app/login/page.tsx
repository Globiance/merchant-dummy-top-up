"use client";

import { useState } from "react";

export default function Login() {
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
    <main className="bg-blue-100 min-h-[100vh]">
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
              {tab === "register" ? (
                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-8">
                    <label className="col-start-1 col-span-2 h6">Name</label>
                    <div className="col-start-3 col-span-6">
                      <input
                        className="border-2 border-solid border-slate-300 rounded-lg bg-slate-300 w-full"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-8">
                    <label className="col-start-1 col-span-2 h6">Email</label>
                    <div className="col-start-3 col-span-6">
                      <input
                        className="border-2 border-solid border-slate-300 rounded-lg bg-slate-300 w-full"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-8">
                    <label className="col-start-1 col-span-2 h6">
                      Password
                    </label>
                    <div className="col-start-3 col-span-6">
                      <input
                        className="border-2 border-solid border-slate-300 rounded-lg bg-slate-300 w-full"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-8">
                    <label className="col-start-1 col-span-2 h6">
                      Confirm Password
                    </label>
                    <div className="col-start-3 col-span-6">
                      <input
                        className="border-2 border-solid border-slate-300 rounded-lg bg-slate-300 w-full"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end w-[87%] m-auto">
                    <div className="w-[20%]">
                      <button className="bg-[#000080] text-white px-8 pt-2 pb-2 rounded-xl">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="flex w-full items-center justify-center h-[300px]">
                  <form className="flex flex-col gap-4 w-[70%] m-auto">
                    <div className="grid grid-cols-8">
                      <label className="col-start-1 col-span-2 h6">Email</label>
                      <div className="col-start-3 col-span-5">
                        <input
                          className="border-2 border-solid border-slate-300 rounded-lg bg-slate-300 w-full"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-8">
                      <label className="col-start-1 col-span-2 h6">
                        Password
                      </label>
                      <div className="col-start-3 col-span-5">
                        <input
                          className="border-2 border-solid border-slate-300 rounded-lg bg-slate-300 w-full"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex w-[40%] justify-end m-auto">
                      <div className="w-[20%]">
                        <button className="bg-[#000080] text-white px-8 pt-2 pb-2 rounded-xl">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
