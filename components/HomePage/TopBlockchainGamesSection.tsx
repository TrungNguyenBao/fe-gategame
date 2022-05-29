import { Switch } from "@headlessui/react";
import { useState } from "react";
import Select from 'react-select';
import { Title2 } from "../../components/Common/Title";

const TopBlockchainGamesSection: React.FC = () => {
    const [enabled, setEnabled] = useState(false)

    const optionsGenere = [
        {
            "value": "",
            "label": "All-Genre"
        },
        {
            "value": "2",
            "label": "Action"
        },
        {
            "value": "3",
            "label": "Adventure"
        },
        {
            "value": "4",
            "label": "Adventure"
        },
        {
            "value": "5",
            "label": "Arcade"
        },
        {
            "value": "6",
            "label": "Art"
        },
        {
            "value": "7",
            "label": "Augmented-Reality"
        },
        {
            "value": "8",
            "label": "Auto-Battler"
        },
        {
            "value": "9",
            "label": "Battle-Royale"
        },
        {
            "value": "10",
            "label": "Board"
        },
        {
            "value": "11",
            "label": "Brawler"
        },
        {
            "value": "12",
            "label": "Breeding"
        },
        {
            "value": "13",
            "label": "Building"
        },
        {
            "value": "14",
            "label": "Card"
        },
        {
            "value": "15",
            "label": "Casual"
        },
        {
            "value": "16",
            "label": "City-Building"
        },
        {
            "value": "17",
            "label": "Collectible"
        },
        {
            "value": "18",
            "label": "DeFi"
        },
        {
            "value": "19",
            "label": "Dungeon"
        },
        {
            "value": "20",
            "label": "Educational"
        },
        {
            "value": "21",
            "label": "Escape"
        },
        {
            "value": "22",
            "label": "eSports"
        },
        {
            "value": "23",
            "label": "Fantasy"
        },
        {
            "value": "24",
            "label": "Fighting"
        }
    ]
    const optionsBlockchain = [
        {
            "value": "",
            "label": "All-Blockchain"
        },
        {
            "value": "1",
            "label": "Blockchain"
        },
        {
            "value": "2",
            "label": "Ethereum"
        },
        {
            "value": "3",
            "label": "Blockchain 1"
        },
        {
            "value": "4",
            "label": "Enjin"
        },
        {
            "value": "5",
            "label": "Bitcoin"
        },
        {
            "value": "6",
            "label": "Polygon"
        },
        {
            "value": "7",
            "label": "Binance"
        },
        {
            "value": "8",
            "label": "Solana"
        },
        {
            "value": "9",
            "label": "Cardano"
        },
        {
            "value": "10",
            "label": "Immutable-X"
        },
        {
            "value": "11",
            "label": "WAX"
        },
        {
            "value": "12",
            "label": "Avalanche"
        },
        {
            "value": "13",
            "label": "EOS"
        },
        {
            "value": "14",
            "label": "TRON"
        },
        {
            "value": "15",
            "label": "Hive"
        },
        {
            "value": "16",
            "label": "Flow"
        },
        {
            "value": "17",
            "label": "VeChain"
        },
        {
            "value": "18",
            "label": "Phantasma-Chain"
        },
        {
            "value": "19",
            "label": "KardiaChain"
        },
        {
            "value": "20",
            "label": "Ronin"
        },
        {
            "value": "21",
            "label": "NEO"
        },
        {
            "value": "22",
            "label": "Xaya"
        },
        {
            "value": "23",
            "label": "ZENZO"
        },
        {
            "value": "24",
            "label": "POA"
        },
        {
            "value": "25",
            "label": "Chain-Games"
        },
        {
            "value": "26",
            "label": "Steem"
        },
        {
            "value": "27",
            "label": "Waves"
        },
        {
            "value": "28",
            "label": "Nebulas"
        },
        {
            "value": "29",
            "label": "Litecoin"
        },
        {
            "value": "30",
            "label": "BSV"
        },
        {
            "value": "31",
            "label": "Klaytn"
        },
        {
            "value": "32",
            "label": "Polkadot"
        },
        {
            "value": "33",
            "label": "IOST"
        },
        {
            "value": "34",
            "label": "Loom"
        },
        {
            "value": "35",
            "label": "Other"
        }
    ]
    const optionsPlatform = [
        {
            "value": "",
            "label": "All-Device"
        },
        {
            "value": "1",
            "label": "Web"
        },
        {
            "value": "2",
            "label": "Play Station"
        },
        {
            "value": "3",
            "label": "Android"
        },
        {
            "value": "4",
            "label": "IOS"
        }
    ]
    const optionsStatus = [
        {
            "value": "",
            "label": "All-Status"
        },
        {
            "value": "1",
            "label": "Development"
        },
        {
            "value": "2",
            "label": "Alpha"
        },
        {
            "value": "3",
            "label": "Cancelled"
        },
        {
            "value": "4",
            "label": "Live"
        },
        {
            "value": "5",
            "label": "Beta"
        },
        {
            "value": "6",
            "label": "Presale"
        }
    ]
    const optionsNft = [
        {
            "value": "",
            "label": "All-NFT"
        },
        {
            "value": "1",
            "label": "Yes"
        },
        {
            "value": "0",
            "label": "No"
        }
    ]

    const optionsFreeToPlay = [
        {
            "value": "",
            "label": "All-F2P"
        },
        {
            "value": "1",
            "label": "NFT Required"
        },
        {
            "value": "2",
            "label": "Crypto Required"
        },
        {
            "value": "3",
            "label": "Game Required"
        }
    ]
    const optionsPlayToEarn = [
        {
            "value": "",
            "label": "All-P2E"
        },
        {
            "value": "1",
            "label": "NFT"
        },
        {
            "value": "2",
            "label": "Crypto"
        },
        {
            "value": "3",
            "label": "NFT & Crypto"
        }
    ]
    return <section className='mb-16'>
        <Title2 className="mb-6">Top Blockchain Games</Title2>
        <div className="bg-grayBg rounded-xl overflow-hidden">
            <div className="flex items-center gap-4 flex-wrap p-6 py-5 border-b-0.5 border-gray-700">
                <Select
                    className="my-react-select-container flex-1"
                    classNamePrefix="my-react-select"
                    defaultValue={optionsGenere[0]}
                    options={optionsGenere} />
                <Select
                    className="my-react-select-container flex-1"
                    classNamePrefix="my-react-select"
                    defaultValue={optionsBlockchain[0]}
                    options={optionsBlockchain} />
                <Select
                    className="my-react-select-container flex-1"
                    classNamePrefix="my-react-select"
                    defaultValue={optionsPlatform[0]}
                    options={optionsPlatform} />
                <Select
                    className="my-react-select-container flex-1"
                    classNamePrefix="my-react-select"
                    defaultValue={optionsStatus[0]}
                    options={optionsStatus} />
                <Select
                    className="my-react-select-container flex-1"
                    classNamePrefix="my-react-select"
                    defaultValue={optionsNft[0]}
                    options={optionsNft} />
                <Select
                    className="my-react-select-container flex-1"
                    classNamePrefix="my-react-select"
                    defaultValue={optionsFreeToPlay[0]}
                    options={optionsFreeToPlay} />
                <Select
                    className="my-react-select-container flex-1"
                    classNamePrefix="my-react-select"
                    defaultValue={optionsPlayToEarn[0]}
                    options={optionsPlayToEarn} />
                <div className="flex items-center gap-2 flex-0 px-4">
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${enabled ? 'bg-blue-500' : 'bg-gray-700'} relative inline-flex h-[28px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                        <span className="sr-only">New</span>
                        <span
                            aria-hidden="true"
                            className={`${enabled ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                        />
                    </Switch>
                    <span>New</span>
                </div>
            </div>
            <div className="chain-game">
                <div className="">
                    <table className="w-full">
                        <thead className="text-12 text-gray-400 whitespace-nowrap">
                            <tr className="border-b-0.5 border-gray-700">
                                <th className="p-2 px-2 text-center">#</th>
                                <th className="p-2 px-2 text-left">Name</th>
                                <th className="p-2 px-2 text-left">Genre</th>
                                <th className="p-2 px-2 text-left">Blockchain</th>
                                <th className="p-2 px-2 text-left">Device</th>
                                <th className="p-2 px-2 text-left">Status</th>
                                <th className="p-2 px-2 text-left">NFT</th>
                                <th className="p-2 px-2 text-left">F2P</th>
                                <th className="p-2 px-2 text-left">P2E</th>
                                <th className="p-2 px-2 text-left">P2E Score</th>
                                <th className="p-2 px-2 text-left">Social 24h</th>
                                <th className="p-2 px-2 text-left">Social 7d</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 3, 4, 5, 10].map((key) => (
                                <tr key={key} className="text-12 border-b-0.5 border-gray-700">
                                    <td className="p-2 text-center text-14 ">{key}</td>
                                    <td className="p-3">
                                        <div className="flex items-start gap-2">
                                            <div className="image">
                                                <a href="#">
                                                    <img className="w-[48px] h-[48px] object-cover rounded-xl" src="https://cdn.gategame.io/storage/upload/product/A74oZiPX1uQ2cuePrNEwBpFHPwxHBXEK5WAQ8uQv.jpg" />
                                                </a>
                                            </div>
                                            <div className="text-16 font-semibold">
                                                <a href="https://gategame.io/en/the-sandbox-p11151.html">The Sandbox</a>
                                                <p className="d-none d-md-inline-block"></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <ul className="flex flex-col gap-0 leading-snug">
                                            <li><p>Casual</p></li>
                                            <li><p>City-Building</p></li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul className="platform">
                                            <li>
                                                <a href="#"> <img src="/images/icon/blockchain-1.png" /></a>
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul className="flex">
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
                                    </td>
                                    <td>
                                        <span className="inline-block w-full uppercase bg-gradient-to-r from-orange to-orange-dark font-semibold text-center rounded">
                                            Beta
                                        </span>
                                    </td>
                                    <td>
                                        <div className="text-[#0a85ed] font-semibold p-2"><p>YES</p></div>
                                    </td>
                                    <td><p>Game Required</p></td>
                                    <td><p>NFT &amp; Crypto</p></td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="relative bg-gray-500 w-[48px] h-[11px] rounded-full overflow-hidden">
                                                <div className="absolute w-[85%] h-full bg-blue-500" role="progressbar"></div>
                                            </div>
                                            <p>8.5</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-col">
                                            <span className="text-16">2751</span>
                                            <p className="text-green-500">+18.55%</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="chart">
                                            <img src="https://gategame.io/images/gate_game/chart.svg" title="Android" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-between p-6 text-12 font-semibold">
                        <div className="">
                            Showing 1 to 5 of 12 entries
                        </div>
                        <div className="flex items-center gap-2">
                            <a className="cursor-pointer">Previous</a>
                            <span>
                                <a className="inline-block px-2 m-1 bg-blue-500 rounded cursor-pointer">1</a>
                                <a className="inline-block px-2 m-1 bg-gray-500 rounded cursor-pointer">2</a>
                                <a className="inline-block px-2 m-1 bg-gray-500 rounded cursor-pointer">3</a>
                            </span>
                            <a className="cursor-pointer">Next</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </section>
}


export default TopBlockchainGamesSection;