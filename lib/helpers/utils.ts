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

export const throttle = (func: Function, limit: number) => {
  let lastFunc: any;
  let lastRan: any;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  }
}

export const range = (from: number, to: number) => {
  const result = []
  for (let i = from; i < to; i++) {
    result.push(i)
  }
  return result
}