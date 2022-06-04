import { range } from "../../lib/helpers/utils"
import { useDataTableTopGame } from "../../lib/providers/data-table-top-game-provider"

interface IDataTableProps {
    data: Array<Object>,
    columns: Array<Object>,
}


export const DataTable: React.FC<IDataTableProps> = ({ data, columns }) => {
    return (
        <table className="w-full">
            <thead className="text-12 text-gray-400 whitespace-nowrap">
                <tr className="border-b-0.5 border-gray-700">
                    <th className="p-2 px-2 text-center">#</th>
                    {columns.map((column: { name: string }) => (
                        <th key={column.name} className="p-2 px-2 text-left">{column.name}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.length ? data.map((row: any, index) => (
                    <tr key={row.Id} className="text-12 border-b-0.5 border-gray-700">
                        <td className="p-2 text-center text-14 ">{index + 1}</td>

                        {columns.map((column: { key: string, format?: React.FC }) => {
                            return <td key={column.key}>
                                {column.format
                                    ? column.format(row)
                                    : row[column.key] || '-'}
                            </td>

                        })}
                    </tr>
                )) : <tr><td className="text-14 p-8 text-center bg-[rgba(255,255,255,0.025)] h-[375px]" colSpan={9999}>No data</td></tr>}
            </tbody>
        </table>
    )
}


interface IDataTablePagingProps {
    lastPage?: any
    total?: any
    currentPage?: any
    from?: any
    to?: any
    setPage?: Function
}
export const DataTablePaging: React.FC<IDataTablePagingProps> = () => {
    const {
        lastPage,
        total,
        page,
        setPage,
    } = useDataTableTopGame()

    console.log(range(1, lastPage + 1));


    return (
        <div className="flex justify-between p-6 text-12 font-semibold">
            <div className="">
                Showing {0} to {0} of {total} entries
            </div>
            <div className="flex items-center gap-2">
                {page !== 1 &&
                    <a onClick={() => setPage(page - 1)} className="cursor-pointer">Previous</a>
                }
                <span>
                    {range(1, lastPage + 1).map((p: number) => (
                        <a
                            onClick={() => page !== p && setPage(p)}
                            key={p}
                            className={`inline-block px-2 m-1 ${page === p ? 'bg-blue-500' : 'bg-gray-500'} rounded cursor-pointer`}>
                            {p}
                        </a>
                    ))}
                </span>
                {page !== lastPage &&
                    <a onClick={() => setPage(page + 1)} className="cursor-pointer">Next</a>
                }
            </div>
        </div>
    )
}



export default DataTable