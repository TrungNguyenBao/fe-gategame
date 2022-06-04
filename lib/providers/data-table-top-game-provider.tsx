import { getTopBlockchainGames } from "../../lib/services"
import { createContext, useContext, useEffect, useState } from "react"

export const DataTableTopGameContext = createContext<{
    filter?: any
    data?: any
    page?: number
    loading?: boolean
    selectedFilter?: any
    lastPage?: number
    total?: number
    setFilter?: any
    setData?: any
    setPage?: any
    setLoading?: any
    setSelectedFilter?: any
}>({})

export const useDataTableTopGame = () => useContext(DataTableTopGameContext)

const DataTableTopGameProvider: React.FC = ({ children }) => {
    const [filter, setFilter] = useState(null)
    const [selectedFilter, setSelectedFilter] = useState({})
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [lastPage, setLastPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [data, setData] = useState([])

    const fetchData = async () => {
        setLoading(true)
        const { Filters, Items } = await getTopBlockchainGames({ page, ...selectedFilter })

        if (!filter) {
            setFilter(Filters)
        }

        setLastPage(Items.last_page)
        setTotal(Items.total)
        setData(Items.data)
        setLoading(false)
    }

    useEffect(() => {
        setPage(1)
        fetchData()
    }, [selectedFilter])

    useEffect(() => {
        fetchData()
    }, [page])

    return (<>
        <DataTableTopGameContext.Provider value={{
            filter, setFilter,
            loading, setLoading,
            page, setPage,
            lastPage, total,
            data, setData,
            selectedFilter, setSelectedFilter,
        }}>
            {children}
        </DataTableTopGameContext.Provider>
    </>)
}

export default DataTableTopGameProvider