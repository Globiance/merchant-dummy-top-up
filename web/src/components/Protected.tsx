/* eslint-disable multiline-ternary */
import { Component, type InfernoNode } from 'inferno'
import { Redirect } from 'inferno-router'

export default class ProtectedRoutes extends Component<any, any> {
  constructor({ children }: { children: InfernoNode }) {
    super({ children })
    this.state = {
      token: null,
      user: null
    }
  }

  componentWillMount(): void {
    this.setState(
      Object.assign(
        { ...this.state },
        {
          token: sessionStorage.getItem('token'),
          user: sessionStorage.getItem('user')
        }
      )
    )
  }

  render(props: Readonly<any>, state: Readonly<any>): InfernoNode {
    return !state?.token && !state?.user ? (
      <Redirect to={'/login'} />
    ) : (
      <>{props.children}</>
    )
  }
}
