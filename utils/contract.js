// contract address: 0xF2901BA32849ffDaF9E8493fC4661e48Dcb31AaD
import { ethers } from 'ethers'
import UniswapABI from '../utils/Uniswap.json'
import CustomTokenABI from '../utils/CustomToken.json'

export const tokenContract = async address => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const { ethereum } = window
  
    if (ethereum) {
      const signer = provider.getSigner()
  
      const contractReader = new ethers.Contract(address, CustomTokenABI.abi, signer)
  
      return contractReader
    }
  }

  export const contract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const { ethereum } = window
  
    if (ethereum) {
      const signer = provider.getSigner()
  
      const contractReader = new ethers.Contract(
        '0xF2901BA32849ffDaF9E8493fC4661e48Dcb31AaD',
        UniswapABI.abi,
        signer,
      )
  
      return contractReader
    }
  }

