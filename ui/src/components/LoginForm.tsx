import { useForm, SubmitHandler } from "react-hook-form";

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = (data) => console.log(data);

  return (
    <div className="flex w-full items-center justify-center h-[300px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-[70%] m-auto"
      >
        <div className="grid grid-cols-8">
          <label className="col-start-1 col-span-2 h6">Email</label>
          <div className="col-start-3 col-span-5">
            <input
              className="border-2 border-solid border-slate-300 rounded-lg bg-slate-300 w-full"
              type="text"
              {...register("email", { required: true })}
            />
          </div>
        </div>
        <div className="grid grid-cols-8">
          <label className="col-start-1 col-span-2 h6">Password</label>
          <div className="col-start-3 col-span-5">
            <input
              className="border-2 border-solid border-slate-300 rounded-lg bg-slate-300 w-full"
              type="password"
              {...register("password", { required: true })}
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
  );
}
