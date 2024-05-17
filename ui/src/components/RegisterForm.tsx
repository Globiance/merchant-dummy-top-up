import { useAuth } from "@/hooks/useAuth";
import { useForm, SubmitHandler } from "react-hook-form";
import Alert from "./Alert";
import { useState } from "react";

type RegisterForm = {
  name: string;
  email: string;
  password: string;
  confirmed: string;
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const [serverErrors, setServerErrors] = useState(null);
  const { register: signup } = useAuth();

  const onSubmit: SubmitHandler<RegisterForm> = async (
    data: RegisterForm,
    event
  ) => {
    event?.preventDefault();

    const result = await signup(
      data.name,
      data.email,
      data.password,
      data.confirmed
    );

    if (result) {
      setServerErrors(result);
    }
  };

  return (
    <>
      <Alert
        message={serverErrors ?? ""}
        display={serverErrors ? true : false}
        onClose={() => setServerErrors(null)}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="grid grid-cols-8">
          <label className="col-start-1 col-span-2 h6">Name</label>
          <div className="col-start-3 col-span-6">
            <input
              className="border-2 border-solid border-slate-300 rounded-lg bg-slate-300 w-full"
              type="text"
              {...register("name", { required: true })}
            />
          </div>
        </div>
        <div className="grid grid-cols-8">
          <label className="col-start-1 col-span-2 h6">Email</label>
          <div className="col-start-3 col-span-6">
            <input
              className="border-2 border-solid border-slate-300 rounded-lg bg-slate-300 w-full"
              type="email"
              {...register("email", { required: true })}
            />
          </div>
        </div>
        <div className="grid grid-cols-8">
          <label className="col-start-1 col-span-2 h6">Password</label>
          <div className="col-start-3 col-span-6">
            <input
              className="border-2 border-solid border-slate-300 rounded-lg bg-slate-300 w-full"
              type="password"
              {...register("password", { required: true })}
            />
          </div>
        </div>
        <div className="grid grid-cols-8">
          <label className="col-start-1 col-span-2 h6">Confirm Password</label>
          <div className="col-start-3 col-span-6">
            <input
              className="border-2 border-solid border-slate-300 rounded-lg bg-slate-300 w-full"
              type="password"
              {...register("confirmed", { required: true })}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#000080] text-white px-8 pt-2 pb-2 rounded-xl"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
}
