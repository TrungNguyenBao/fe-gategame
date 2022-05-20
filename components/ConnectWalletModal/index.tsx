import { Dialog } from '../shared/dialog/dialog'
import Panel from '../shared/panel'
import { connectors, CHAIN_ID } from '../../constants/index'
import { AiOutlineClose } from 'react-icons/ai'
import { useMoralis } from 'react-moralis'
interface ConnectWalletModalProps extends ReactProps {
  isOpen: boolean
  onClose: () => any
}
const ConnectWalletModal: React.FC<ConnectWalletModalProps> = ({
  isOpen,
  onClose,
}: ConnectWalletModalProps) => {
  const { authenticate } = useMoralis()
  const onConnectWallet = (provider: any) => {
    if (provider === 'bsc') return
    authenticate({ provider: provider, chainId: CHAIN_ID })
  }

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      slideFromBottom="none"
      wrapperClass="fixed w-full h-screen top-0 left-0 z-100 flex flex-col items-center overflow-y-scroll py-20 no-scrollbar backdrop-blur"
    >
      <Panel className="w-[355px] sm:w-[400px]">
        <div className="flex justify-between items-center pb-[12px] px-[6px]">
          <div className="font-bold text-[20px] leading-[1.1] dark:text-white">
            Connect Your Wallet
          </div>
          <AiOutlineClose
            className="text-pink-400 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <hr />
        <div className="mt-[24px] ">
          {connectors.map((connector) => (
            <div
              key={connector.id}
              onClick={() => {
                onConnectWallet(connector.id)
                onClose()
              }}
              className={`paragraph-text-light dark:paragraph-text-dark flex justify-between items-center text-[16px] w-full h-[48px] px-[24px] bg-[#f5f5f5] dark:bg-[#252525] mb-[8px] rounded-[12px] dark:bg-[#101111]  ${
                connector.id === 'bsc'
                  ? 'opacity-50'
                  : 'hover:primary-btn dark:hover:primary-btn  hover:text-white dark:hover:text-white cursor-pointer'
              } `}
            >
              <div>{connector.name}</div>
              <img
                className="w-[32px] h-[32px] object-contain"
                src={`/assets/connectors/${connector.id}.png`}
              />
            </div>
          ))}
        </div>
      </Panel>
    </Dialog>
  )
}
export default ConnectWalletModal
