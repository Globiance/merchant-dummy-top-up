import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import { Component, type InfernoNode } from 'inferno'

export default class WalletCard extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { refreshIcon: undefined }
  }

  componentDidMount(): void {
    library.add(faRefresh)
    const i = icon({ prefix: 'fas', iconName: 'arrows-rotate' })

    this.setState(Object.assign({}, { refreshIcon: i.html[0] }))
  }

  render(): InfernoNode {
    return (
      <div className="wallet-card">
        <div className="wallet-content">
          <h3 className="xl:h3 lg:h4 sm:h5 xs:h6">My wallet balance</h3>
          <span className="xl:h3 lg:h4 sm:h5 xs:h6">
            $ {this.props.balance ? Number(this.props.balance).toFixed(2) : '0'}
            <span
              onClick={() => {}}
              className="ml-5 cursor-pointer"
              dangerouslySetInnerHTML={{ __html: this.state?.refreshIcon }}
            ></span>
          </span>
        </div>
      </div>
    )
  }
}
