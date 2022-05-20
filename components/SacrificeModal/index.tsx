import { Dialog } from '../shared/dialog/dialog'
import Panel from '../shared/panel'
import { AiOutlineClose } from 'react-icons/ai'
import { useOneInchTokens } from 'react-moralis'
import { useEffect, useState } from 'react'
import { Button } from '../../components/shared/form/button'
interface SacrificeModalProps extends ReactProps {
  isOpen: boolean
  onClose: () => any
  ignoreTokens?: Array<any>
  balance: any
  title?: string
  address: string
  onSacrifice: (token: any) => void
}
const SacrificeModal: React.FC<SacrificeModalProps> = ({
  isOpen,
  onClose,
  ignoreTokens,
  balance,
  title,
  address,
  onSacrifice,
}: SacrificeModalProps) => {
  const [valueSacrifice, setValueSacrifice] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(false)
    setValueSacrifice(0)
  }, [address])
  const sacrifice = () => {
    onSacrifice(valueSacrifice)
    setIsLoading(true)
    // onCloseDialog()
  }
  const onCloseDialog = () => {
    onClose()
  }
  const onChangeInput = (e: any) => {
    setValueSacrifice(e.target.value)
  }

  return (
    <Dialog isOpen={isOpen} onClose={onCloseDialog} slideFromBottom="none">
      <Panel className="w-[90vw] sm:w-[400px]">
        <div className="flex justify-between items-center">
          <div className="font-bold text-[20px] leading-[1.1] dark:text-white pb-[12px]">
            Sacrifice {title}
          </div>
          <AiOutlineClose
            className="text-pink-400 cursor-pointer"
            onClick={onCloseDialog}
          />
        </div>
        <hr />
        <>
          <div className="flex place-content-between pt-7 pb-5 text-[16px]">
            <p className="dark:text-white">
              Wallet balance:&nbsp;
              {balance ? balance : 0}&nbsp;{title}
            </p>
          </div>
          <div className="relative">
            <input
              disabled={isLoading}
              type="number"
              defaultValue="0"
              max={balance}
              className={`p-3 rounded-2xl w-full h-[72px] bg-[#E9E9E9] text-[24px] font-semibold dark:bg-[#303F66] dark:text-white`}
              onChange={onChangeInput}
              value={valueSacrifice}
            />
          </div>

          <div className="relative pt-6">
            <input
              disabled={isLoading}
              type="range"
              className=" form-range appearance-none w-full h-1 p-0 bg-[#ABB2C3] focus:outline-none focus:ring-0 focus:shadow-none rounded-2xl "
              min="0"
              max={balance}
              step="0.005"
              defaultValue="0"
              onInput={onChangeInput}
              value={valueSacrifice}
            />
            <div className="flex justify-between mt-2 text-[16px] font-semibold semi-bold dark:text-white">
              <span className="w-8 text-left">0%</span>
              <span className="w-7 text-center">25%</span>
              <span className="w-10 text-center">50%</span>
              <span className="w-5 text-center">75%</span>
              <span className="w-10 text-right">100%</span>
            </div>
          </div>

          <div className="w-full flex justify-center mt-7">
            <Button
              primary
              isLoading={isLoading}
              text={'Confirm'}
              className="bg-blue-500 hover:bg-blue-700 text-white rounded-2xl"
              onClick={() => {
                sacrifice()
              }}
            />
          </div>
        </>
      </Panel>
    </Dialog>
  )
}
export default SacrificeModal
