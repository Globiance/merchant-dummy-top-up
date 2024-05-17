import { useAuth } from "@/hooks/useAuth";
import { useForm, SubmitHandler } from "react-hook-form";
import Alert from "./Alert";
import { useState } from "react";

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { login } = useAuth();
  const [serverErrors, setServerErrors] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = async (data: LoginForm, event) => {
    event?.preventDefault();

    const result = await login(data.email, data.password);

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
      <div className="flex w-full items-center justify-center h-[300px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-[70%] m-auto"
        >
          <div className="grid grid-cols-8">
            <label className="col-start-1 xs:col-span-4 xl:col-span-2 h6">
              Email
            </label>
            <div className="xs:col-start-5 xl:col-start-3 col-span-8">
              <input
                className="border-2 border-solid border-slate-300 rounded-lg bg-slate-300 w-full"
                type="text"
                {...register("email", { required: true })}
              />
            </div>
          </div>
          <div className="grid grid-cols-8">
            <label className="col-start-1 xs:col-span-4 xl:col-span-2 h6">
              Password
            </label>
            <div className="xs:col-start-5 xl:col-start-3 col-span-8">
              <input
                className="border-2 border-solid border-slate-300 rounded-lg bg-slate-300 w-full"
                type="password"
                {...register("password", { required: true })}
              />
            </div>
          </div>
          <div className="flex w-full justify-end m-auto">
            <button
              type="submit"
              className="bg-[#000080] text-white px-8 pt-2 pb-2 rounded-xl"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
