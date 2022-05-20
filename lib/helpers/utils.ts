import Moralis from 'moralis'

export function shortenAddress(address: string) {
  return (
    address.substring(0, 6) +
    '...' +
    address.substring(address.length - 5, address.length)
  )
}

export function convertFromWeiToDec(value: number | string, decimals?: number) {
  return Moralis.Units.FromWei(value, decimals)
}
