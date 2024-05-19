import { type InfernoNode } from 'inferno'
import { type UnknownAction, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'inferno-redux'
import Main from './pages/Main'

// const store = configureStore({
//   reducer: function (state: any, action: UnknownAction) {
//     throw new Error('Function not implemented.')
//   }
// })

const App = (): InfernoNode => {
  return (
    <Provider store={{} as any}>
      <Main />
    </Provider>
  )
}

export default App
