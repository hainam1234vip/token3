import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

import { shortenAddress } from '../utils/shortenAddress';

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, amount }) => (
  <div className="bg-[#4b166c] m-4 flex flex-1
    2xl:min-w-[450px]
    sm:min-w-[300px]
    flex-col p-3 rounded-md hover:shadow-2xl
    "
  >
    <div className="flex flex-col items-center w-full mt-3">
      <div className="w-full mb-6 p-2">
        <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
          <p className=" text-white text-base">From :{shortenAddress(addressFrom)} </p>
        </a>
        <a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
          <p className=" text-white text-base">To :{shortenAddress(addressTo)} </p>
        </a>
        <p className="text-white text-base ">Amount: {amount} ETH </p>
        <p className="text-white text-base"> Message: {message}</p>
      </div>
      <div className="bg-white p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
        <p className="text-[#081314] font-bold"> {timestamp} </p>

      </div>
    </div>
  </div>
);

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 dark:bg-nft-dark bg-white">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className=" dark:bg-nft-dark bg-white text-4xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className=" dark:bg-nft-dark bg-white text-4xl text-center my-2">
            Please connect to your account to see the Latest Transactions
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {transactions.reverse().map((transaction, i) => (
            <TransactionCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
