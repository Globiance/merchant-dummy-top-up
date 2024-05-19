import { type InfernoNode } from 'inferno'
import { BrowserRouter, Route, Switch } from 'inferno-router'
import LoginPage from './pages/Login'

const Routes = (): InfernoNode => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path={'/logig'} component={<LoginPage />} /> */}
        <Route path={'/logig'} component={<LoginPage />} />
        {/* <Route path={'/'} component={} />
        <Route path={'/'} component={} />
        <Route path={'/'} component={} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
