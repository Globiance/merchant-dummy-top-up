import { Component, type InfernoNode } from 'inferno'

export default class NotFoundPage extends Component {
  render(): InfernoNode {
    return (
      <main>
        <div className="text-6xl min-h-[100vh] flex justify-center items-center">
          <h1 className="h1">404: Page not found</h1>
        </div>
      </main>
    )
  }
}
