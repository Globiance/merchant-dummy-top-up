/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, type InfernoNode } from 'inferno'
import { Redirect } from 'inferno-router'
import Alert from './Alert'
import { login } from '@/api'

interface LoginFormData {
  email: string
  password: string
}
export default class LoginForm extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      errors: null,
      redirectComponent: null
    }
  }

  async submitForm(formData: LoginFormData): Promise<boolean> {
    const result = await login(formData)
    this.setState(Object.assign({}, { errors: result }))

    return !!result
  }

  toggleError(): boolean {
    return !!this.state?.errors
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
        <div className="flex w-full items-center justify-center h-[300px]">
          <form
            onSubmit={(e: Event) => {
              this.handleOnSubmit(e)
            }}
            className="flex flex-col gap-4 w-[70%] m-auto"
          >
            <div className="grid grid-cols-8">
              <label className="col-start-1 xs:col-span-4 xl:col-span-2 h6">
                Email
              </label>
              <div className="xs:col-start-5 xl:col-start-3 col-span-8">
                <input
                  className="border-2 border-solid border-slate-300 rounded-lg bg-slate-300 w-full"
                  type="email"
                  name="email"
                  required
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
                  name="password"
                  type="password"
                  minLength={6}
                  required
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
    )
  }
}
