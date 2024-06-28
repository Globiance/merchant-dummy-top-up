/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, type InfernoNode } from 'inferno'
import Alert from './Alert'
import { register } from '@/api'
import { Redirect } from 'inferno-router'

interface RegisterFormData {
  email: string
  password: string
}

export default class RegisterForm extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      errors: null,
      redirectComponent: null
    }
  }

  toggleError(): boolean {
    return !!this.state?.errors
  }

  async submitForm(formData: RegisterFormData): Promise<boolean> {
    const result = await register(formData)
    this.setState(Object.assign({}, { errors: result }))

    return !!result
  }

  handleOnSubmit(event: Event): void {
    event.preventDefault()

    const formData = Object.create({})
    for (const input of (event.target as HTMLElement).getElementsByTagName(
      'input'
    )) {
      formData[input.name] = input.value
    }

    this.submitForm(formData)
      .then((shouldNotRedirect) => {
        !shouldNotRedirect
          ? this.setState(
              Object.assign(
                { ...this.state },
                { redirectComponent: <Redirect push={true} to="/wallet" /> }
              )
            )
          : null
      })
      .catch(console.log)
  }

  render(props: Readonly<any>, state: Readonly<any>): InfernoNode {
    return state?.redirectComponent ? (
      state.redirectComponent
    ) : (
      <>
        <Alert
          message={state?.errors}
          toggle={() => {
            return this.toggleError()
          }}
          onClose={() => {
            this.setState(Object.assign({ ...state }, { errors: null }))
          }}
        />
        <form
          onSubmit={(e: Event) => {
            this.handleOnSubmit(e)
          }}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-8">
            <label className="col-start-1 col-span-2 h6">Name</label>
            <div className="col-start-3 col-span-6">
              <input
                className="border-2 border-solid border-slate-300 rounded-lg bg-slate-300 w-full"
                type="text"
                name="name"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-8">
            <label className="col-start-1 col-span-2 h6">Email</label>
            <div className="col-start-3 col-span-6">
              <input
                className="border-2 border-solid border-slate-300 rounded-lg bg-slate-300 w-full"
                type="email"
                name="email"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-8">
            <label className="col-start-1 col-span-2 h6">Password</label>
            <div className="col-start-3 col-span-6">
              <input
                className="border-2 border-solid border-slate-300 rounded-lg bg-slate-300 w-full"
                type="password"
                name="password"
                minLength={6}
                required
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
                name="password"
                minLength={6}
                required
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
