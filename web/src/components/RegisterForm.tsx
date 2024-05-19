import { Component, type InfernoNode } from 'inferno'

export default class RegisterForm extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render(): InfernoNode {
    return (
      <>
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
                type="email"
              />
            </div>
          </div>
          <div className="grid grid-cols-8">
            <label className="col-start-1 col-span-2 h6">Password</label>
            <div className="col-start-3 col-span-6">
              <input
                className="border-2 border-solid border-slate-300 rounded-lg bg-slate-300 w-full"
                type="password"
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
                type="password"
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
    )
  }
}
