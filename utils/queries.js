// contract address: 0xF2901BA32849ffDaF9E8493fC4661e48Dcb31AaD
import { BigNumber, ethers } from 'ethers'
import { contract, tokenContract } from './contract'

export const swapEthToToken = async (tokenName, amount) => {
    try {
      let tx = { value: toWei(amount) }
  
      const contractObj = await contract()
      const data = await contractObj.swapEthToToken(tokenName, tx)
  
      const receipt = await data.wait()
      return receipt
    } catch (e) {
      return console.log(e)
    }
}

export async function getTokenBalance(tokenName, address) {
    const contractObj = await contract()
    const balance = contractObj.getBalance(tokenName, address)
    return balance
}

export async function getTokenAddress(tokenName) {
  try {
    const contractObj = await contract()
    const address = await contractObj.getTokenAddress(tokenName)
    return address
  } catch (e) {
    return console.log(e)
  }
}

export const swapTokenToEth = async (tokenName, amount) => {
  try {
    const contractObj = await contract()
    const data = await contractObj.swapTokenToEth(tokenName, toWei(amount))

    const receipt = await data.wait()
    return receipt
  } catch (e) {
    return console.log(e)
  }
}

export const increaseAllowance = async (tokenName, amount) => {
  try {
    const contractObj = await contract()
    const address = await contractObj.getTokenAddress(tokenName)

    const tokenContractObj = await tokenContract(address)
    const data = await tokenContractObj.approve(
      '0xF2901BA32849ffDaF9E8493fC4661e48Dcb31AaD',
      toWei(amount),
    )

    const receipt = await data.wait()
    return receipt
    
  } catch (e) {
    return console.log(e)
  }
}

export const hasValidAllowance = async (owner, tokenName, amount) => {
  try {
    const contractObj = await contract()
    const address = await contractObj.getTokenAddress(tokenName)

    const tokenContractObj = await tokenContract(address)
    const data = await tokenContractObj.allowance(
      owner,
      '0xF2901BA32849ffDaF9E8493fC4661e48Dcb31AaD',
    )

    const result = BigNumber.from(data.toString()).gte(
      BigNumber.from(toWei(amount)),
    )

    return result

  } catch (e) {
    return console.log(e)
  }
}

export const swapTokenToToken = async (srcToken, destToken, amount) => {
  try {
    const contractObj = await contract()
    const data = await contractObj.swapTokenToToken(
      srcToken,
      destToken,
      toWei(amount),
    )

    const receipt = await data.wait()
    return receipt
  } catch (e) {
    return console.log(e)
  }
}

function toWei(amount) {
  const toWei = ethers.utils.parseUnits(amount.toString())
  return toWei.toString()
}





