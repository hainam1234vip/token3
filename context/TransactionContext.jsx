import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionContract;
};

const getFromStorage = (key) => {
  if (typeof window !== 'undefined') {
    window.localStorage.getItem(key);
  }
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [formData, setFormData] = useState({ addressTo: '', amount: '', message: '' });
  const [isLoading, setIsLoading] = useState('false');
  const [transactionCount, setTransactionCount] = useState(getFromStorage('transactionCount1'));
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllTransactions = async () => {
    try {
      if (window.ethereum) {
        const transactionContract = getEthereumContract();

        const availableTransactions = await transactionContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map((transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
          keyword: transaction.keyword,
          message: transaction.message,
          amount: parseInt(transaction.amount._hex) / (10 ** 18),

        }));

        console.log(structuredTransactions);

        setTransactions(structuredTransactions);
      } else {
        console.log('Please connect to your Metamask');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    setIsLoading(false);
    if (!window.ethereum) return alert('Please install metamask');

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });

    if (accounts.length) {
      setCurrentAccount(accounts[0]);

      getAllTransactions();

      console.log(accounts);
    } else {
      console.log('No accounts found');
    }
  };

  const checkIfTransactionsExist = async () => {
    try {
      if (window.ethereum) {
        const transactionsContract = getEthereumContract();
        const currentTransactionCount = await transactionsContract.getTransactionCount();

        window.localStorage.setItem('transactionCount', currentTransactionCount);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) return alert('Please install metamask');
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    setCurrentAccount(accounts[0]);
    window.location.reload();
  };

  const sendTransaction = async () => {
    setIsLoading(false);
    try {
      if (window.ethereum) {
        const { addressTo, amount, message } = formData;
        const transactionContract = getEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [{
            from: currentAccount,
            to: addressTo,
            gas: '0x5208', // hexadecimal, 0.0002 ether
            value: parsedAmount._hex,
          }],
        });

        const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message);

        const txn = transactionHash.hash;

        setIsLoading(true);
        console.log(`Loading - ${txn}`);
        await transactionHash.wait();
        console.log(`Success - ${txn}`);
        await transactionHash.wait();
        setIsLoading(false);

        const transactionsCount = await transactionContract.getTransactionCount();
        setTransactionCount(transactionsCount.toNumber());
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    checkIfTransactionsExist();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction, isLoading, transactions, transactionCount }}>
      {children}
    </TransactionContext.Provider>
  );
};
