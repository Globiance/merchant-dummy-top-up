import { type InfernoNode } from 'inferno'

export interface IColumn {
  title: string
  dataIndex: string
  render?: (field: string) => InfernoNode
}

interface ITable<T = Record<string, any>> {
  data: T[]
  columns: IColumn[]
}

interface ITableHeader {
  title: string
}

interface ITableCell {
  content: InfernoNode
}

interface ITableRow {
  cells: InfernoNode[]
  className: string
}

function TableHeader({ title }: ITableHeader): InfernoNode {
  return <th className="text-center pad-5 border-l-2 ">{title}</th>
}

function TableRow({ cells, className }: ITableRow): InfernoNode {
  return <tr className={className}>{cells.map((cell) => cell)}</tr>
}

function TableCell({ content }: ITableCell): InfernoNode {
  return <td className="text-center pad-5 border-l-2">{content}</td>
}

export default function Table({ data, columns }: ITable): InfernoNode {
  const headers = columns.map((column, i) => {
    return <TableHeader key={i} title={column.title} />
  })

  const rows = data.map((row, i) => {
    const cells = []
    for (const [key, value] of Object.entries(row)) {
      let j = 0
      for (const column of columns) {
        if (column.dataIndex === key) {
          cells.push(
            <TableCell
              key={j}
              content={column.render ? column.render(value) : value}
            />
          )
        }
        j++
      }
    }

    if (i % 2 === 0) {
      return <TableRow className="bg-blue-100" key={i} cells={cells} />
    } else {
      return <TableRow className="bg-white" key={i} cells={cells} />
    }
  })

  return (
    <table>
      <thead>
        <TableRow className="bg-slate-300" cells={headers} />
      </thead>
      <tbody>{rows.map((row) => row)}</tbody>
    </table>
  )
}
