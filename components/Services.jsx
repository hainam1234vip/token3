import Image from 'next/image';
import { useTheme } from 'next-themes';
import { star, shield, send } from '../assets';
import { socialMedia } from '../constants';

const ServiceCard = ({ color, title, icon, subtitle }) => {
  const { theme } = useTheme();
  return (
    <div className={`flex flex-row justify-center items-left white-glassmorphism  p-5 m-3 cursor-pointer hover:shadow-xl ${theme === 'light' ? 'filter invert' : undefined}`}>
      <div className={`w-14 h-14 rounded-full flex justify-center items-center ${color}`}>
        {icon}
      </div>
      <div className="ml-5 flex flex-col flex-1">
        <h1 className="mt-1 text-white text-lg">{title}</h1>
        <p className="mt-2 mb-2 text-white text-sm md:w-9/12">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const { theme } = useTheme();
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-2 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-8">
          <h1 className="text-4xl sm:text-5xl dark:text-white text-nft-black-2 py-1 text-semibold">
            You do the business,
            <br />
            We will handle the money.
            <p className="my-5 dark:text-white text-nft-black-2 font-light md:w-9/12 w-11/12 text-base">
              The best choice for buying and selling your crypto assets, with the
              various super friendly services we offer
            </p>
          </h1>
          <div className="flex flex-row md:mt-0 py-1">
            {socialMedia.map((social, index) => (
              <Image
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${theme === 'light' ? 'filter invert' : undefined} ${
                  index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
                }`}
                onClick={() => window.open(social.link)}
              />

            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-right mt-2 ">
          <ServiceCard
            color="bg-[#2952E3]"
            title="Security commitment"
            icon={<Image alt="shield" src={shield} className="text-white" />}
            subtitle="We guarantee your security. We consistently protect your privacy and uphold the standard of our products."
          />
          <ServiceCard
            color="bg-[#8945F8]"
            title="100% Secured"
            icon={<Image alt="star" src={star} className="text-white" />}
            subtitle="We take immediate measures to protect the privacy and security of your data and transactions."
          />
          <ServiceCard
            color="bg-[#F84550]"
            title="Money Transfer"
            icon={<Image alt="send" src={send} className="text-white" />}
            subtitle="A digital currency wallet with transfer feature might help you avoid paying a lot of interest."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
