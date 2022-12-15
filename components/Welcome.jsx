import React, { useContext } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { TransactionContext } from '../context/TransactionContext';
import { Loader } from '.';
import { shortenAddress } from '../utils/shortenAddress';

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent dark:text-white text-nft-black-1 border-none white-glassmorphism "
  />
);

const Welcome = () => {
  const { connectWallet, currentAccount, formData, handleChange, sendTransaction, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-6 px-4 sm:ml-12">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-8">
          <h1 className="text-3xl sm:text-5xl dark:text-white text-nft-black-2 py-1 text-semibold">
            Send Digital Currency <br /> across the world
          </h1>
          <p className="mt-5 dark:text-white text-nft-black-2 font-bold mf:w-9/12 w-11/12 ">
            Swap, earn, and build on the leading decentralized exchange trading protocol.
          </p>
          {!currentAccount && (
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row nft-gradient text-sm minlg:text-lg py-2 px-4 minlg:px-8 font-poppins font-semibold dark:text-white text-nft-black-1 mx-2 rounded-xl my-5 p-3 justify-center items-center"
          >
            <AiFillPlayCircle className="dark:text-white text-nft-black-1 mr-2" />
            <p className="dark:text-white text-nft-black-1 text-base font-semibold">
              Connect Wallet
            </p>
          </button>
          )}
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>

              <div>
                <p className="dark:text-white text-nft-black-1 font-semibold text-sm">
                  Current Address : {shortenAddress(currentAccount)}
                </p>
                <p className="dark:text-white text-nft-black-1 font-semibold mt-0.5">
                  Ethereum
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:w-76 w-full flex flex-col justify-end items-center blue-glassmorphism ">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send now
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
export default Welcome;
