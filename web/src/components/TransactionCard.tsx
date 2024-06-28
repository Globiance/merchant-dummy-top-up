'use client'

import { Component, type InfernoNode } from 'inferno'

export default class TransactionCard extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render(props: Readonly<any>): InfernoNode {
    return (
      <div className="transaction-card">
        <div className="transaction-content">
          <button
            onClick={() => {
              props.refetch()
            }}
            className="h4"
          >
            Refresh
          </button>
        </div>
      </div>
    )
  }
}
