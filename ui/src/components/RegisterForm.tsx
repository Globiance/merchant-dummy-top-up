import { useAuth } from "@/hooks/useAuth";
import { useForm, SubmitHandler } from "react-hook-form";

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

  const { register: signup } = useAuth();

  const onSubmit: SubmitHandler<RegisterForm> = (data: RegisterForm, event) => {
    event?.preventDefault();

    signup(data.name, data.email, data.password, data.confirmed);
  };

  return (
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
  );
}
