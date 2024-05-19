/* eslint-disable multiline-ternary */
import { Component, type InfernoNode } from 'inferno'
import { BrowserRouter, Redirect, Route, Switch } from 'inferno-router'
import LoginPage from './Login'
import WalletPage from './Wallet'
import TransactionPage from './Transaction'
import NotFoundPage from './NotFound'

export default class Main extends Component {
  constructor(props: any) {
    super(props)
    this.state = {
      login: '/login'
    }
  }

  render(): InfernoNode {
    return (
      <div class="tu-jif4">
        <BrowserRouter>
          <Switch>
            {/* <Route path="/">
            {window.location.pathname === '/' ? (
              <Redirect push={true} to="/login" />
            ) : undefined}
          </Route> */}
            <Route path="/login" component={LoginPage} />
            <Route path="/wallet" component={WalletPage} />
            <Route path="/transactions" component={TransactionPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
