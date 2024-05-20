/* eslint-disable multiline-ternary */
import { Component, type InfernoNode } from 'inferno'
import { BrowserRouter, Redirect, Route, Switch } from 'inferno-router'
import LoginPage from './Login'
import WalletPage from './Wallet'
import TransactionPage from './Transaction'
import NotFoundPage from './NotFound'
import ProtectedRoutes from '@/components/Protected'

export default class Main extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      redirectTo: null
    }
  }

  render(props: Readonly<any>, state: Readonly<any>): InfernoNode {
    return (
      <div class="tu-jif4">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <ProtectedRoutes>
                <Redirect to="/wallet" />
              </ProtectedRoutes>
            </Route>
            <Route path="/login" component={LoginPage} />
            <Route path="/wallet">
              <ProtectedRoutes>
                <WalletPage />
              </ProtectedRoutes>
            </Route>
            <Route path="/transactions">
              <ProtectedRoutes>
                <TransactionPage />
              </ProtectedRoutes>
            </Route>
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
