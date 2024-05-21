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
      redirectTo: null,
      matchedMedia: window.matchMedia('(min-width: 768px)').matches,
      toggle: false
    }

    window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
      this.setState(
        Object.assign({ ...this.state }, { matchedMedia: e.matches })
      )
    })
  }

  componentDidMount(): void {
    library.add(faRightFromBracket)
    const i = icon({ prefix: 'fas', iconName: 'right-from-bracket' })

    this.setState(
      Object.assign(
        { ...this.state },
        {
          logoutIcon: i.html[0]
        }
      )
    )
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

  setToggle(): void {
    this.setState((prev: any) =>
      Object.assign({ ...prev }, { toggle: !prev.toggle })
    )
  }

  render(props: Readonly<any>, state: Readonly<any>): InfernoNode {
    console.log(state)
    return (
      <div>
        {state.redirectTo ? (
          state.redirectTo
        ) : state.matchedMedia ? (
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
        ) : (
          <nav>
            <div className="h-full grid grid-cols-3 items-center text-center">
              <NavLink className="col-start-2 a text-black" to={'/'}>
                <h5 className="h5 mb-0">MyWallet</h5>
              </NavLink>
              <div
                className="cursor-pointer flex justify-end items-center mr-5 mb-0"
                onClick={() => {
                  this.setToggle()
                }}
              >
                {!state.toggle ? (
                  <div className="border-2 border-black w-10 h-10 rounded-md flex flex-col pb-1 pt-1">
                    <div className="border-2 border-black w-8 rounded-md m-auto"></div>
                    <div className="border-2 border-black w-8 rounded-md m-auto"></div>
                    <div className="border-2 border-black w-8 rounded-md m-auto"></div>
                  </div>
                ) : (
                  <div className="border-2 border-black w-10 h-10 rounded-md flex flex-col pb-1 pt-1 relative">
                    <div className="absolute border-2 border-black rounded-md rotate-45 w-10 top-[15px] right-[-2px]"></div>
                    <div className="absolute border-2 border-black rounded-md -rotate-45 w-10 top-[15px] right-[-2px]"></div>
                  </div>
                )}
              </div>
            </div>
            <span
              style={{ visibility: !state.toggle ? 'hidden' : 'visible' }}
              className="absolute z-10 right-0 bg-white w-40 text-center flex flex-col border-l-2 border-r-2 border-b-2 shadow-lg"
            >
              <NavLink
                to={'/wallet'}
                className={(isActive) =>
                  isActive
                    ? 'a border-b-2 text-[#000080] bg-[#EEF5FF]'
                    : 'a border-b-2 text-black bg-white'
                }
              >
                <h4 className="h4">Wallet</h4>
              </NavLink>
              <NavLink
                to={'/transactions'}
                className={(isActive) =>
                  isActive
                    ? 'a border-b-2 text-[#000080] bg-[#EEF5FF]'
                    : 'a border-b-2 text-black bg-white'
                }
              >
                <h4 className="h4">Transaction</h4>
              </NavLink>
              <NavLink
                to={'#'}
                onClick={() => {
                  this.handleLogout()
                }}
                className="a text-black border-b-2"
              >
                <h4 className="h4">Logout</h4>
              </NavLink>
            </span>
          </nav>
        )}
      </div>
    )
  }
}
