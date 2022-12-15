import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';
import { socialMedia } from '../constants';

const FooterLinks = ({ heading, items, extraClasses }) => (
  <div className={`flex-1 justify-start items-start ${extraClasses}`}>
    <h3 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mb-10">{heading}</h3>
    {items.map((item, index) => <p key={item + index} className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3">{item}</p>)}
  </div>
);

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16">
      <div className="w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 px-16">
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">
            <Image src={images.logo02} width={38} height={38} alt="logo" />
            <p className=" text-[23px] dark:text-white text-nft-dark font-semibold text-lg ml-2">IU Exchange</p>
          </div>
          <p className="font-poppins font-bold dark:text-white text-nft-black-1 text-[18px] leading-[30.8px] mt-4 max-w-[312px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8">
          <FooterLinks heading="IU Exchange" items={['Explore', 'How it Works', 'Contact Us']} />
          <FooterLinks heading="Support" items={['Help Center', 'Terms of service', 'Legal', 'Privacy policy']} extraClasses="ml-4" />
        </div>
      </div>

      <div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">IU Exchange Ⓒ 2022, All Rights Reserved</p>
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
      </div>
    </footer>
  );
};

export default Footer;
