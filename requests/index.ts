import { CHAIN_ID_HEX } from '../constants'

const baseUrl = 'https://api.1inch.exchange/v3.0/56'

export async function fetchQuote(params: any) {
  const url = `${baseUrl}/quote?` + new URLSearchParams(params)
  try {
    return await fetch(url, {
      method: 'GET',
    }).then((response) => response.json())
  } catch (error) {
    throw error
  }
}

const WALLET_STATUS = {
  CANCEL_METAMASK: 4001,
  NOT_EXISTED_NETWORK: 4092,
}

declare let window: any

export const setupNetwork = async (chainId?: any) => {
  const provider = window.ethereum ?? null
  if (provider) {
    try {
      // const networkInfo = APP_NETWORKS_SUPPORT[Number(chainId)]
      if (chainId) {
        try {
          await provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: CHAIN_ID_HEX }],
          })
        } catch (error: any) {
          //Reject metamask
          if (WALLET_STATUS.CANCEL_METAMASK === error?.code) {
            return
          }

          // This error code indicates that the chain has not been added to MetaMask.
          if (WALLET_STATUS.NOT_EXISTED_NETWORK === error?.code) {
            try {
              await provider.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    // ...(networkInfo.details || {}),
                  },
                ],
              })
            } catch (addError) {
              return false
            }
          } else {
            return false
          }
        }
      } else return false
    } catch (e) {
      return false
    }
  } else {
    return false
  }
}
