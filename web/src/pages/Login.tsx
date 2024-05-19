/* eslint-disable multiline-ternary */
import LoginForm from '@/components/LoginForm'
import RegisterForm from '@/components/RegisterForm'
import { Component, type InfernoNode } from 'inferno'

class LoginPage extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      tab: 'login'
    }
  }

  handleTab(tabClicked: string): void {
    this.setState((prev: any) => {
      const tab = prev.tab
      if (tabClicked === 'login' && tab === 'register') {
        return Object.assign({}, { tab: 'login' })
      } else if (tabClicked === 'register' && tab === 'login') {
        return Object.assign({}, { tab: 'register' })
      } else {
        return Object.assign({}, { tab })
      }
    })
  }

  render(): InfernoNode {
    return (
      <div className="bg-blue-100 min-h-[100vh]">
        <div className="flex justify-center items-center min-h-[100vh]">
          <div className="lg:w-[40%] h-full">
            <div className="w-full bg-white shadow-sm min-h-[400px] rounded-xl">
              <div className="flex border-b-[1px] border-slate-300 padb-2">
                <span
                  className="mart-5"
                  onClick={() => {
                    this.handleTab('login')
                  }}
                >
                  <p className="h4 px-4 cursor-pointer">Log in</p>
                </span>
                <span
                  className="mart-5"
                  onClick={() => {
                    this.handleTab('register')
                  }}
                >
                  <p className="h4 border-l-[1px] border-slate-300 px-4 cursor-pointer">
                    Register
                  </p>
                </span>
              </div>
              <div className="px-4 mart-5">
                {this.state?.tab === 'register' ? (
                  <RegisterForm />
                ) : (
                  <LoginForm />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage
