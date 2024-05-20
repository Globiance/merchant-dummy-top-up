import { transactions } from '@/api'
import NavBar from '@/components/NavBar'
import Table, { type IColumn } from '@/components/Table'
import TransactionCard from '@/components/TransactionCard'
import { Component, type InfernoNode } from 'inferno'

export default class TransactionPage extends Component<any, any> {
  headers: IColumn[] = [
    {
      title: 'Sr.No',
      dataIndex: 'srno'
    },
    {
      title: 'Amount',
      dataIndex: 'amount'
    },
    {
      title: 'Status',
      dataIndex: 'status'
    },
    {
      title: 'Transaction ID',
      dataIndex: 'checkoutId'
    },
    {
      title: 'Checkout ID',
      dataIndex: 'checkoutId'
    },
    {
      title: 'Initiated At',
      dataIndex: 'initiatedAt',
      render: (value) => new Date(value).toLocaleString('en-US')
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      render: (value) => new Date(value).toLocaleString('en-US')
    }
  ]

  constructor(props: any) {
    super(props)
    this.state = { data: [] }
  }

  componentDidMount(): void {
    this.fetchTransaction().catch(console.log)
  }

  async fetchTransaction(): Promise<void> {
    const token = sessionStorage.getItem('token')
    const result = await transactions(token ?? '')

    this.setState(
      Object.assign(
        { ...this.state },
        {
          data: await Promise.all(
            result.map(async (row: any, i: number) => {
              return { srno: i + 1, ...row }
            })
          )
        }
      )
    )
  }

  render(props: Readonly<any>, state: Readonly<any>): InfernoNode {
    return (
      <div>
        <NavBar active="Transactions" />
        <div className="main-content">
          <TransactionCard
            refetch={() => {
              this.fetchTransaction().catch(console.log)
            }}
          />
          <div className="w-full flex justify-center">
            <div className="table-wrapper">
              <Table data={state?.data} columns={this.headers} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
