import { Switch } from "@headlessui/react"
import { useDataTableTopGame } from "../../lib/providers/data-table-top-game-provider"
import { useCallback, useEffect, useState } from "react"
import Select from "react-select"

export const FilterGame: React.FC = () => {
    const { filter, selectedFilter, setSelectedFilter } = useDataTableTopGame()

    const [enableSwitch, setEnableSwitch] = useState(false)

    const optionsGenere = [{
        "value": "",
        "label": "All-Genre"
    }, ...(filter?.Genres?.map((f: any) => ({
        value: f.Id,
        label: f.Name,
    })) || [])]

    const optionsBlockchain = [{
        "value": "",
        "label": "All-Blockchain"
    }, ...(filter?.Blockchains?.map((f: any) => ({
        value: f.Id,
        label: f.Name,
    })) || [])]
    const optionsPlatform = [{
        "value": "",
        "label": "All-Device"
    }, ...(filter?.Platforms?.map((f: any) => ({
        value: f.Id,
        label: f.Name,
    })) || [])]
    const optionsStatus = [{
        "value": "",
        "label": "All-Status"
    }, ...(filter?.Statues?.map((f: any) => ({
        value: f.Id,
        label: f.Name,
    })) || [])]
    const optionsNft = [
        {
            value: "",
            label: "All-NFT"
        },
        {
            value: "1",
            label: "Yes"
        },
        {
            value: "",
            label: "No"
        }
    ]
    const optionsFreeToPlay = [{
        "value": "",
        "label": "All-F2P"
    }, ...(filter?.FreeToPlays?.map((f: any) => ({
        value: f.Id,
        label: f.Name,
    })) || [])]
    const optionsPlayToEarn = [{
        "value": "",
        "label": "All-P2E"
    }, ...(filter?.PlayToEarns?.map((f: any) => ({
        value: f.Id,
        label: f.Name,
    })) || [])]

    useEffect(() => {
        setSelectedFilter({ ...selectedFilter, isNew: enableSwitch })
    }, [enableSwitch])

    return (<>
        <Select
            className="my-react-select-container flex-1"
            classNamePrefix="my-react-select"
            onChange={(selectedItem: any) => setSelectedFilter({ ...selectedFilter, GenreId: selectedItem.value })}
            defaultValue={optionsGenere[0]}
            options={optionsGenere} />
        <Select
            className="my-react-select-container flex-1"
            classNamePrefix="my-react-select"
            onChange={(selectedItem: any) => setSelectedFilter({ ...selectedFilter, BlockchainId: selectedItem.value })}
            defaultValue={optionsBlockchain[0]}
            options={optionsBlockchain} />
        <Select
            className="my-react-select-container flex-1"
            classNamePrefix="my-react-select"
            onChange={(selectedItem: any) => setSelectedFilter({ ...selectedFilter, PlatformId: selectedItem.value })}
            defaultValue={optionsPlatform[0]}
            options={optionsPlatform} />
        <Select
            className="my-react-select-container flex-1"
            classNamePrefix="my-react-select"
            onChange={(selectedItem: any) => setSelectedFilter({ ...selectedFilter, Status: selectedItem.value })}
            defaultValue={optionsStatus[0]}
            options={optionsStatus} />
        <Select
            className="my-react-select-container flex-1"
            classNamePrefix="my-react-select"
            onChange={(selectedItem: any) => setSelectedFilter({ ...selectedFilter, is_nft: selectedItem.value })}
            defaultValue={optionsNft[0]}
            options={optionsNft} />
        <Select
            className="my-react-select-container flex-1"
            classNamePrefix="my-react-select"
            onChange={(selectedItem: any) => setSelectedFilter({ ...selectedFilter, freeToPlay: selectedItem.value })}
            defaultValue={optionsFreeToPlay[0]}
            options={optionsFreeToPlay} />
        <Select
            className="my-react-select-container flex-1"
            classNamePrefix="my-react-select"
            onChange={(selectedItem: any) => setSelectedFilter({ ...selectedFilter, playToEarn: selectedItem.value })}
            defaultValue={optionsPlayToEarn[0]}
            options={optionsPlayToEarn} />
        <div className="flex items-center gap-2 flex-0 px-4">
            <Switch
                checked={enableSwitch}
                onChange={setEnableSwitch}
                className={`${enableSwitch ? 'bg-blue-500' : 'bg-gray-700'} relative inline-flex h-[28px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only">New</span>
                <span
                    aria-hidden="true"
                    className={`${enableSwitch ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
            <label className="cursor-pointer ml-1" onClick={() => setEnableSwitch(!enableSwitch)}>New</label>
        </div>
    </>)
}