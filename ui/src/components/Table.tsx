interface IRow {
  serialNo: string;
  amount: number;
  status: string;
  id: string;
  checkoutId: string;
  initiatedAt: string;
  createdAt: string;
}

export interface IColumn {
  title: string 
  dataIndex: string
  render?: (field: string) => React.ReactNode
}

interface ITable<T = Record<string, any>> {
  data: T[]
  columns: IColumn[]
}

interface ITableHeader {
  title: string
}

interface ITableCell {
  content: React.ReactNode
}

interface ITableRow {
  cells: React.ReactNode[]
}

function TableHeader({ title }:ITableHeader) {
  return (<th>{title}</th>)
}

function TableRow({cells}: ITableRow) {
  return (<tr>{cells.map((cell) => cell)}</tr>)
}

function TableCell({content}: ITableCell) {
  return (<td className="border-2 border-black">{content}</td>)
}

export default function Table({ data, columns }: ITable) {

  const headers = columns.map((column, i) => {
    return (<TableCell key={i} content={column.title}/>)
  })

  const rows = data.map((row, i) => {
    const cells = []
    for (const [key, value] of Object.entries(row)) {
      let j = 0
      for (const column of columns) {
        if (column.dataIndex === key) {
          cells.push(<TableCell key={j} content={column.render ? column.render(value) : value}/>)
        }
        j++
      }
    }

    return (<TableRow key={i} cells={cells}/>)
  })

  return (
    <table>
      <thead>
        <TableRow cells={headers} />
      </thead>
      <tbody>
        {rows.map((row) => row)}
      </tbody>
    </table>
  )
}
