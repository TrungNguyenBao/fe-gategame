import React from 'react'
import { useTable, useSortBy, Column } from 'react-table'

const data = [
  {
    name: 'ABC',
    genre: 'David',
    block_chain: 'Bit',
    device: 'IOS',
    status: 1,
    nft: 1,
    p2p: 'Game NFT',
    p2e: 'NFT',
    p2e_score: 12,
    social_24h: 23,
    social_7h: 23,
  },
  {
    name: 'ABAAaaC',
    genre: 'David',
    block_chain: 'Bit',
    device: 'IOS',
    status: 1,
    nft: 1,
    p2p: 'Game NFT',
    p2e: 'NFT',
    p2e_score: 12,
    social_24h: 23,
    social_7h: 23,
  },
]

interface Props {
  columns: Array<Column<object>>;
  data: Array<object>;
}


const Table: React.FC<Props> = ({ columns, data }) => {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    )

  // Render the UI for your table
  return (
    <table className="w-full text-left" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            className="py-2 border-b-0.5 border-t-0.5 border-t-[#3e3e3e] border-b-[#3e3e3e]"
            {...headerGroup.getHeaderGroupProps()}
          >
            {/* {headerGroup.headers.map((column) => (
              // <th {...column.getHeaderProps()}>
              <th className='py-2' {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
              </th>
            ))} */}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr
              className="py-4 border-b-0.5 border-t-0.5 border-t-[#3e3e3e] border-b-[#3e3e3e]"
              {...row.getRowProps()}
            >
              {row.cells.map((cell) => {
                return <td className='py-2' {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function TableView() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Genre',
        accessor: 'genre',
      },
      {
        Header: 'Block chain',
        accessor: 'block_chain',
      },
      {
        Header: 'Device',
        accessor: 'device',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'NFT',
        accessor: 'nft',
      },
      {
        Header: 'P2P',
        accessor: 'p2p',
      },
      {
        Header: 'P2E',
        accessor: 'p2e',
      },
      {
        Header: 'P2e score',
        accessor: 'p2e_score',
      },
      {
        Header: 'Social 24h',
        accessor: 'social_24h',
      },
      {
        Header: 'Social_7h 24h',
        accessor: 'social_7h',
      },
    ],
    []
  )

  return (
    <div className="p-4 bg-[#212121]">
      <Table columns={columns} data={data} />
    </div>
  )
}

export default TableView


