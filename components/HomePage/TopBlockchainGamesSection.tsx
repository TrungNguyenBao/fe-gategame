import { Switch } from "@headlessui/react";
import DataTable, { DataTablePaging } from "../../components/Common/DataTable";
import { useState } from "react";
import Select from 'react-select';
import { Title2 } from "../../components/Common/Title";
import { FilterGame } from "../../components/Common/Filter";
import DataTableTopGameProvider, { useDataTableTopGame } from "../../lib/providers/data-table-top-game-provider";
import { useLanguage } from "../../lib/providers/language";
import { slugGame } from "../../lib/helpers/slugGame";

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

    const GameNameFormat: React.FC = (data: any) => (
        <div className="flex items-start gap-2 p-3">
            <div className="image">
                <a href="#">
                    <img className="w-[48px] h-[48px] object-cover rounded-xl" src={data?.Avatar} />
                </a>
            </div>
            <div className="text-16 font-semibold">
                <a href={slugGame(data.Name, data.Id)}>{data.Name}</a>
                <p className="d-none d-md-inline-block"></p>
            </div>
        </div>
    )

    const formartedData = data.map((item: any) => {
        const attributes = item?.Translations?.find((trans: any) => trans.Language === lang)
        return {
            Id: item.Id,
            Name: attributes.Name,
            Avatar: attributes.Avatar,
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
                            { name: 'Name', key: 'Name', format: GameNameFormat },
                            {
                                name: 'Genre',
                                key: 'Genre',
                                format: () => (<ul className="flex flex-col gap-0 leading-snug">
                                    <li><p>Casual</p></li>
                                    <li><p>City-Building</p></li>
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
                                format: () => <ul className="flex">
                                    <li>
                                        <a href="#"> <img src="/images/icon/ic_Web.svg" /></a>
                                    </li>
                                    <li>
                                        <a href="#"> <img src="/images/icon/ic_Android.svg" /></a>
                                    </li>
                                    <li>
                                        <a href="#"> <img src="/images/icon/ic_PS.svg" /></a>
                                    </li>
                                </ul>
                            },
                            {
                                name: 'Status', format: () => <span className="inline-block w-full uppercase bg-gradient-to-r from-orange to-orange-dark font-semibold text-center rounded">
                                    Beta
                                </span>
                            },
                            { name: 'NFT', format: () => <div className="text-[#0a85ed] font-semibold p-2"><p>YES</p></div> },
                            { name: 'F2P', format: () => <>Game Required</> },
                            { name: 'P2E', format: () => <>NFT &amp; Crypto</> },
                            {
                                name: 'P2E Score', format: () => <div className="flex items-center gap-3">
                                    <div className="relative bg-gray-500 w-[48px] h-[11px] rounded-full overflow-hidden">
                                        <div className="absolute w-[85%] h-full bg-blue-500" role="progressbar"></div>
                                    </div>
                                    <p>8.5</p>
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