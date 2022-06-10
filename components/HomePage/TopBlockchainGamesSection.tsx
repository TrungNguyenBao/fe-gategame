import { Switch } from "@headlessui/react";
import DataTable, { DataTablePaging } from "../../components/Common/DataTable";
import { useState } from "react";
import Select from 'react-select';
import { Title2 } from "../../components/Common/Title";
import { FilterGame } from "../../components/Common/Filter";
import DataTableTopGameProvider, { useDataTableTopGame } from "../../lib/providers/data-table-top-game-provider";
import { useLanguage } from "../../lib/providers/language";
import { slugGame } from "../../lib/helpers/slugGame";
import ImageWithFallback from "../../components/Common/Image";

const TopBlockchainGamesSection: React.FC = () => {
    return <section className='mb-16'>
        <Title2 className="mb-6">Top Blockchain Games</Title2>
        <DataTableTopGameProvider>
            <TopBlockchainGamesTable />
        </DataTableTopGameProvider>
    </section>
}


const TopBlockchainGamesTable: React.FC = () => {
    const { loading, data, page, lastPage, total, setPage } = useDataTableTopGame()

    const { lang } = useLanguage()

    const formartedData = data.map((item: any) => {
        console.log({ item });

        return {
            Id: item.Id,
            Name: item.fields.Name.Name,
            Avatar: item.fields.Name.Image,
            Genre: item.fields.Genre,
            Device: item.fields.Device,
            Status: item.fields.Status,
            Blockchain: item.fields.Blockchain,
            NTF: item.fields.NTF,
            F2P: item.fields.F2P,
            P2E: item.fields.P2E,
            P2E_SCORE: item.fields.P2E_SCORE,
            SOCIAL_24: item.fields.SOCIAL_24,
            SOCIAL_7: item.fields.SOCIAL_7,
        }
    })

    return (
        <div className={`bg-grayBg rounded-xl overflow-hidden ${loading ? 'pointer-events-none opacity-50' : ''}`}>
            <div className="flex items-center gap-4 flex-wrap p-6 py-5 border-b-0.5 border-gray-700">
                <FilterGame />
            </div>
            <div className="chain-game">
                <div className="">
                    <DataTable
                        data={formartedData}
                        columns={[
                            {
                                name: 'Name', key: 'Name', format: (data: any) => (
                                    <div className="flex items-start gap-2 p-3">
                                        <div className="">
                                            <a href="#">
                                                <div className="relative w-[48px] h-[48px] rounded-xl overflow-hidden">
                                                    <ImageWithFallback
                                                        className="object-cover"
                                                        layout="fill"
                                                        src={data?.Avatar}
                                                        fallbackSrc={'/images/gate_game/best-slide1.png'}
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="text-16 font-semibold">
                                            <a href={slugGame(data.Name, data.Id)}>{data.Name}</a>
                                            <p className="d-none d-md-inline-block"></p>
                                        </div>
                                    </div>
                                )
                            },
                            {
                                name: 'Genre',
                                key: 'Genre',
                                format: (data: any) => (<ul className="flex flex-col gap-0 leading-snug">
                                    {data?.Genre?.length ? data?.Genre?.map((genreName: any) => <li><p>{genreName}</p></li>) : '-'}
                                </ul>)
                            },
                            {
                                name: 'Blockchain',
                                format: () => <ul className="platform">
                                    <li>
                                        <a href="#"> <img src="/images/icon/blockchain-1.png" /></a>
                                    </li>
                                </ul>
                            },
                            {
                                name: 'Device',
                                format: (data: any) => <ul className="flex">
                                    {
                                        data?.Device?.map((deviceImg: string) => <li className="relative block w-5 h-5">
                                            <a href="#"> <ImageWithFallback layout="fill" src={deviceImg} /></a>
                                        </li>)
                                    }
                                </ul>
                            },
                            {
                                name: 'Status', format: (data: { Status: string }) => {
                                    const getClassName = (status: string) => {
                                        return {
                                            beta: 'from-orange to-orange-dark',
                                            development: 'from-blue-600 to-blue-400',
                                            live: 'from-green-600 to-green-400',
                                            alpha: 'from-black to-black'
                                        }[status.toLowerCase()]
                                    }
                                    return <span className={`inline-block w-[90%] uppercase bg-gradient-to-r ${getClassName(data.Status)} font-semibold text-center rounded`}>
                                        {data.Status}
                                    </span>
                                }
                            },
                            {
                                name: 'NFT', format: (data: any) => (
                                    <div className="text-[#0a85ed] font-semibold p-2">
                                        <p>{data.NTF === '1' ? "YES" : "NO"}</p>
                                    </div>
                                )
                            },
                            { name: 'F2P', key: 'F2P' },
                            { name: 'P2E', key: 'P2E' },
                            {
                                name: 'P2E Score', format: (data: {P2E_SCORE?: string | number}) => <div className="flex items-center gap-3">
                                    <div className="relative bg-gray-500 w-[48px] h-[10px] rounded-full overflow-hidden">
                                        <div className={`absolute h-full bg-blue-400`} style={{ width: Number(data.P2E_SCORE) * 10 + '%' }} role="progressbar"></div>
                                    </div>
                                    <p>{data.P2E_SCORE || 0}</p>
                                </div>
                            },
                            {
                                name: 'Social 24h', format: () => <div className="flex flex-col">
                                    <span className="text-16">2751</span>
                                    <p className="text-green-500">+18.55%</p>
                                </div>
                            },
                            {
                                name: 'Social 7d', format: () => <div className="chart">
                                    <img src="images/icon/chart.svg" title="Android" />
                                </div>
                            },
                        ]}
                    />
                    <DataTablePaging
                        lastPage={lastPage}
                        total={total}
                        currentPage={page}
                        from={(page - 1) * 5 + 1}
                        to={page * 5}
                        setPage={setPage}
                    />
                </div>
            </div>
        </div>
    )
}


export default TopBlockchainGamesSection;