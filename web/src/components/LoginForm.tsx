import { Component, type InfernoNode } from 'inferno'

export default class LoginForm extends Component {
  constructor(props: any) {
    super(props)
    this.state = []
  }

  render(): InfernoNode {
    return (
      <div className="flex w-full items-center justify-center h-[300px]">
        <form className="flex flex-col gap-4 w-[70%] m-auto">
          <div className="grid grid-cols-8">
            <label className="col-start-1 xs:col-span-4 xl:col-span-2 h6">
              Email
            </label>
            <div className="xs:col-start-5 xl:col-start-3 col-span-8">
              <input
                className="border-2 border-solid border-slate-300 rounded-lg bg-slate-300 w-full"
                type="text"
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
    )
  }
}
