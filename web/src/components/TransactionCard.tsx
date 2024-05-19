'use client'

import { Component, type InfernoNode } from 'inferno'

export default class TransactionCard extends Component<any, any> {
  render(): InfernoNode {
    return (
      <div className="transaction-card">
        <div className="transaction-content">
          <button onClick={() => {}} className="h4">
            Refresh
          </button>
        </div>
      </div>
    )
  }
}
