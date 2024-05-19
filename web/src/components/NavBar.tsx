/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, type InfernoNode } from 'inferno'
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default class NavBar extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      logoutIcon: undefined
    }
  }

  componentDidMount(): void {
    library.add(faRightFromBracket)
    const i = icon({ prefix: 'fas', iconName: 'right-from-bracket' })

    this.setState(Object.assign({}, { logoutIcon: i.html[0] }))
  }

  render(): InfernoNode {
    return (
      <div>
        <nav>
          <div className="nav-wrapper text-black">
            <a href={'/'} className="logo-wrapper a text-black">
              <h3 className="h3 m-0 p-0">MyWallet</h3>
            </a>
            <div className="main-menu-wrapper">
              <a
                href="#"
                className={'a menu-link'}
                style={{
                  color: this.state?.active === 'Wallet' ? '#000080' : 'black'
                }}
              >
                <h4 className="h4 m-0 p-0">Wallet</h4>
              </a>
              <a
                className="a menu-link"
                style={{
                  color:
                    this.state?.active === 'Transactions' ? '#000080' : 'black'
                }}
              >
                <h4 className="h4 m-0 p-0">Transactions</h4>
              </a>
            </div>
            <a className="logout-wrapper text-[#000080] hover:text-[#000080]">
              <h4
                className="h4"
                dangerouslySetInnerHTML={{ __html: this.state?.logoutIcon }}
              ></h4>
            </a>
          </div>
        </nav>
      </div>
    )
  }
}
