import { stats } from '../constants';

const Stats = () => (
  <section className="flex justify-center items-center flex-row flex-wrap sm:mb-20 sm:m-12 mb-6">
    {stats.map((index) => (
      <div key={index.id} className="flex-1 justify-start items-center flex-row m-2 px-6">
        <h4 className="font-poppins font-semibold xs:text-[55px] text-[45px] xs:leading-[68px] leading-[58px] dark:text-white text-nft-black-2"> {index.value} </h4>
        <p className="font-poppins font-bold xs:text-[18px] text-[13px] xs:leading-[24px] leading-[19px] dark:text-white text-nft-black-2 ml-2"> {index.title} </p>
      </div>
    ))}
  </section>

);

export default Stats;
