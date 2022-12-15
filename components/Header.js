import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import TokenBalance from './TokenBalance'
import { useAccount } from 'wagmi'
import Image from 'next/image';
const Header = () => {
    const [tokenBalComp, setTokenBalComp] = useState()
    const { address } = useAccount()
  
    const notifyConnectWallet = () =>
      toast.error('Connect wallet.', { duration: 2000 })
  
    useEffect(() => {
      setTokenBalComp(
        <>
          <TokenBalance name={'CoinA'} walletAddress={address} />
          <TokenBalance name={'CoinB'} walletAddress={address} />
          <TokenBalance name={'CoinC'} walletAddress={address} />
        </>,
      )
  
      if (!address) notifyConnectWallet()
    }, [address])
  
  
    return (
      <div className='w-full fixed flex items-center justify-center'>
  
        <div className='flex justify-center items-center'>{tokenBalComp}</div>
  
        
        <ConnectButton/>
        
  
        <Toaster />
      </div>
    )
  }
  
  export default Header