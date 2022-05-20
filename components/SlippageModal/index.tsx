import { Dialog } from '../shared/dialog/dialog';
import Panel from '../shared/panel';
import { AiOutlineClose } from 'react-icons/ai'


interface SlippageModalProps extends ReactProps {
  isOpen: boolean;
  onClose: () => any;
  slippage: number;
  onSetSlippage: (slippage: number) => void;
}
const SlippageModal: React.FC<SlippageModalProps> = ({
  isOpen,
  onClose,
  slippage,
  onSetSlippage,
}: SlippageModalProps) => {

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      slideFromBottom="none"
    >
      <Panel className="w-[90vw] sm:w-[400px]">
        <div className="flex justify-between items-center pb-[12px] px-[6px]">
          <div className="font-bold text-[20px] leading-[1.1] dark:text-white">Transaction Setting</div>
          <AiOutlineClose className="text-pink-400 cursor-pointer" onClick={onClose} />
        </div>
        <hr />
        <div className="my-[24px]">
          <div className="flex justify-between items-center ">
            <div onClick={() => onSetSlippage(0.1)} className={`flex items-center justify-center h-[28px] w-[56px] mr-[7px] rounded-[20px] cursor-pointer ${slippage === 0.1 ? 'primary-btn text-white' : 'bg-[#f5f5f5] dark:bg-[#101111] paragraph-text-light dark:paragraph-text-dark'}`}>0.1%</div>
            <div onClick={() => onSetSlippage(0.5)} className={`flex items-center justify-center h-[28px] w-[56px] mr-[7px] rounded-[20px] cursor-pointer ${slippage === 0.5 ? 'primary-btn text-white' : 'bg-[#f5f5f5] dark:bg-[#101111] paragraph-text-light dark:paragraph-text-dark'}`}>0.5%</div>
            <div onClick={() => onSetSlippage(1)} className={`flex items-center justify-center h-[28px] w-[56px] mr-[7px] rounded-[20px] cursor-pointer ${slippage === 1 ? 'primary-btn text-white' : 'bg-[#f5f5f5] dark:bg-[#101111] paragraph-text-light dark:paragraph-text-dark'}`}>1.0%</div>
            <div className="relative">
              <input className="pl-[10px] pr-[30px] w-[120px] focus:text-black dark:focus:text-white paragraph-text-light dark:paragraph-text-dark flex items-center h-[28px] rounded-[20px] cursor-pointer bg-[#f5f5f5] dark:bg-[#101111] focus:border-[#f037a5] focus:border-[1px] focus:border-solid" onChange={(event) => onSetSlippage(Number(event.target.value) < 0.01 ? 0.01 : parseFloat(event.target.value))} placeholder='1.00' step={0.01} type="number" />
              <div className="absolute top-[3px] right-[20px] paragraph-text-light dark:paragraph-text-dark">%</div>
            </div>
          </div>
          {slippage <= 0.1 && <div className="text-pink-400 mt-[10px] text-[14px] leading-[1.5]">Your transaction may fail</div>}
        </div>
      </Panel>
    </Dialog>
  )
}
export default SlippageModal;
