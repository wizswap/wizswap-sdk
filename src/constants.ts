import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 42161,
  TESTNET = 97
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESSES = {
  42161: '0xd4D27b54AfAE6FC962CA7e66f68f69A78c8a4a4e',
  97: '0xd4D27b54AfAE6FC962CA7e66f68f69A78c8a4a4e'
}

export const INIT_CODE_HASHES = {
  42161: '0x24b9fbce703e53fc654a02ec726636038dd9eef8ac3c9a3172498bb3c7b02ea3',
  97: '0x24b9fbce703e53fc654a02ec726636038dd9eef8ac3c9a3172498bb3c7b02ea3'
}

// export const FACTORY_ADDRESS = '0xd4D27b54AfAE6FC962CA7e66f68f69A78c8a4a4e'

// export const INIT_CODE_HASH = '0x24b9fbce703e53fc654a02ec726636038dd9eef8ac3c9a3172498bb3c7b02ea3'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _998 = JSBI.BigInt(998)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
