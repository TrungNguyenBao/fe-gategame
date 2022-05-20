export const DECIMALS_BITCOIN_PRICE = 7
export const DECIMALS = 5
export const LIQUIDITY_DECIMALS = 10
export const BITCOIN_ADDRESS = '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c'
// export const CASH_ADDRESS = '0x18950820a9108a47295b40b278f243dfc5d327b5'
export const CASH_ADDRESS = '0x69b3ca6e787fa87d55714d7c4e65449412c57b91' // main
// export const CASH_ADDRESS = '0x0b9DDDf7f48deE2D59645aFb5CeD57bEC2BD7392' // test
export const CASHv1_ADDRESS = '0x18950820a9108a47295b40b278f243dfc5d327b5'
export const CASHv2_ADDRESS = '0xaa25a39d7aa8318e3EBC19d3678917B8Bd98A135'
export const COW_ADDRESS = '0xcdd1d715f01bf959bf94cd553f43250ddb303d1f'
export const BNB_ADDRESS = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' // main
// export const BNB_ADDRESS = '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd' // test
export const WBNB_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
export const BUSD_ADDRESS = '0xe9e7cea3dedca5984780bafc599bd69add087d56'
export const BTCB_ADDRESS = '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'

export const CASH_TOKEN = {
  symbol: 'CASH',
  name: 'Caash',
  decimals: 18,
  address: CASH_ADDRESS,
  logoURI: '/assets/caash.png',
}
export const COW_TOKEN = {
  symbol: 'COW',
  name: 'CaashCOW',
  decimals: 18,
  address: COW_ADDRESS,
  logoURI: '/assets/cow.png',
}

export const BNB_TOKEN = {
  symbol: 'BNB',
  name: 'BNB',
  decimals: 18,
  address: BNB_ADDRESS,
  logoURI:
    'https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png',
}
export const DECIMAL_SCALE = 5

export const CHAIN_ID = 56 // 97: BSC TESTNET, 56: BSC MAINNET
export const CHAIN_ID_HEX = '0x38' //0x61: bsc testnet, 0x38: bsc mainnet
export const connectors = [
  {
    id: 'metamask',
    name: 'Metamask',
    options: {
      chainId: CHAIN_ID,
      chainName: 'Binance Smart Chain',
      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
      blockExplorerUrls: ['https://testnet.bscscan.com'],
    },
  },

  {
    id: 'walletconnect',
    name: 'WalletConnect',
    options: {
      rpc: {
        '56': 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      },
      chainId: 56,
      networkId: 56,
    },
  },
  {
    id: 'trustwallet',
    name: 'Trust Wallet',
    options: {
      chainId: 56,
      chainName: 'Binance Smart Chain Testnet',
      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
      blockExplorerUrls: ['https://testnet.bscscan.com'],
    },
  },
  {
    id: 'coinbase',
    name: 'Coinbase Wallet',
    options: {
      chainId: 56,
      chainName: 'Binance Smart Chain',
      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
      blockExplorerUrls: ['https://testnet.bscscan.com'],
    },
  },
  {
    id: 'bsc',
    name: 'Binance Chain Wallet',
    options: {
      supportedChainIds: [56],
    },
  },
]
