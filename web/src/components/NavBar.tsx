/* eslint-disable multiline-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, type InfernoNode } from 'inferno'
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Redirect } from 'inferno-router'
import { logout } from '@/api'

export default class NavBar extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      logoutIcon: undefined,
      redirectTo: null
    }
  }

  componentDidMount(): void {
    library.add(faRightFromBracket)
    const i = icon({ prefix: 'fas', iconName: 'right-from-bracket' })

    this.setState(Object.assign({}, { logoutIcon: i.html[0] }))
  }

  handleLogout(): void {
    const token = sessionStorage.getItem('token')

    logout(token ?? '')
      .then(() => {
        this.setState(
          Object.assign(
            { ...this.state },
            { redirectTo: <Redirect to={'/login'} /> }
          )
        )
      })
      .catch(console.log)
  }

  render(props: Readonly<any>, state: Readonly<any>): InfernoNode {
    return (
      <div>
        {state.redirectTo ? (
          state.redirectTo
        ) : (
          <nav>
            <div className="nav-wrapper text-black">
              <NavLink to={'/'} className="logo-wrapper a text-black">
                <h3 className="h3 m-0 p-0">MyWallet</h3>
              </NavLink>
              <div className="main-menu-wrapper">
                <NavLink
                  to="/wallet"
                  className={(isActive) =>
                    isActive
                      ? 'menu-link text-[#000080]'
                      : 'menu-link text-black'
                  }
                >
                  <h4 className="h4 m-0 p-0">Wallet</h4>
                </NavLink>
                <NavLink
                  to="/transactions"
                  className={(isActive) =>
                    isActive
                      ? 'menu-link text-[#000080]'
                      : 'menu-link text-black'
                  }
                >
                  <h4 className="h4 m-0 p-0">Transactions</h4>
                </NavLink>
              </div>
              <NavLink
                to="#"
                onClick={() => {
                  this.handleLogout()
                }}
                className="logout-wrapper text-[#000080] hover:text-[#000080]"
              >
                <h4
                  className="h4"
                  dangerouslySetInnerHTML={{ __html: this.state?.logoutIcon }}
                ></h4>
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    )
  }
}
