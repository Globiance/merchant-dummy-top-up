import { render } from 'inferno'
import '@/styles/main.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

declare global {
  interface Window {
    Start: (payload: any) => void
  }
}

render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
