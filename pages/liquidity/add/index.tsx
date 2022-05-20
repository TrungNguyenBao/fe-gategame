import { useState } from 'react';
import Panel from '../../../components/shared/panel';
import { DefaultLayout } from '../../../layouts/default-layout/default-layout'
import { AiFillSetting } from 'react-icons/ai';
import SlippageModal from '../../../components/SlippageModal';
import { useRouter } from 'next/router';
const enum TABS {
  SWAP = "SWAP",
  LIQUIDITY = "LIQUIDITY"
}

const AddLiquidity = () => {
  const [activeTab, setActiveTab] = useState(TABS.LIQUIDITY);
  const [openSlippage, setOpenSlippage] = useState(false);
  const [slippage, setSlippage] = useState(1);

  const router = useRouter()



  return (
    <div className="flex justify-center flex-wrap sm:flex-nowrap mt-[48px] mb-[40px]">
      <Panel className="w-full sm:w-[700px] mx-0 sm:mx-4 mb-[20px]">
        <div className="flex justify-between items-center w-full sm:w-[640px] mx-auto">
          <div className="w-max flex justify-between items-center bg-[#eff4f5] dark:bg-[#000] rounded-[16px] font-[600] text-[14px] dark:text-white">
            <div className={`px-[12px] sm:px-[24px] h-[36px] flex items-center rounded-[16px] cursor-pointer tracking-[0.03em] ${activeTab === TABS.SWAP && 'secondary-btn text-white'}`} onClick={() => router.push('/swap')}>{TABS.SWAP}</div>
            <div className={`px-[12px] sm:px-[24px] h-[36px] flex items-center rounded-[16px] cursor-pointer tracking-[0.03em] ${activeTab === TABS.LIQUIDITY && 'secondary-btn text-white'}`}>{TABS.LIQUIDITY}</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="text-[15px] mx-[15px] cursor-pointer tracking-[0.03em] font-bold rounded-[5px] flex items-center secondary-btn text-white h-[36px] px-[10px] hover:bg-blue-500">BRIDGE</div>
            <div className="text-[15px] cursor-pointer tracking-[0.03em] font-bold rounded-[5px] flex items-center secondary-btn text-white  h-[36px] px-[10px] hover:bg-blue-500" onClick={() => setOpenSlippage(true)}><AiFillSetting className="text-[24px]" /></div>
          </div>
        </div>
        <div className="flex flex-col my-[16px] py-[25px] px-[16px] bg-[#f5f5f5] dark:bg-black rounded-[20px] w-full sm:w-[640px] mx-auto justify-between text-center">
          <div className="text-[16px] sm:text-[25px] font-bold leading-[1.5]">Add liquidity to receive LP tokens</div>
          <div className={`flex items-center justify-center tracking-[0.03rem] font-bold h-[36px] px-[20px] text-[16px] mx-auto secondary-btn rounded-[10px] text-white mt-[20px] mb-[20px] cursor-pointer  hover:bg-blue-500`}>+ ADD LIQUIDITY</div>
        </div>
      </Panel>
      <SlippageModal slippage={slippage} onSetSlippage={setSlippage} isOpen={openSlippage} onClose={() => setOpenSlippage(false)} />

    </div>
  );
}

export default AddLiquidity;