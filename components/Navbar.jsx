import { useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import images from '../assets';

const MenuItems = ({ isMobile, active, setActive }) => {
  const generateLink = (i) => {
    switch (i) {
      case 0: return '/';
      case 1: return '/Members';
      case 2: return '/Swap';
      default: return '/';
    }
  };
  return (
    <ul className={`list-none flexCenter flex-row ${isMobile && 'flex-col h-full'}`}>
      {['Dashboards', 'Members','Swap'].map((item, i) => (
        <li
          key={i}
          onClick={() => {
            setActive(item);
          }}
          className={`flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-nft-dark mx-3
        ${active === item
            ? 'dark:text-white text-nft-black-1'
            : 'dark:text-nft-gray-3 text-nft-gray-2'}
          `}
        >
          <Link href={generateLink(i)}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};


const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState('Explore NFTs');
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1 ">
      <div className="flex flex-1 flex-row justify-start">
      <Link href="/">
          <div className="flexCenter cursor-pointer" onClick={() => {}}>
            <Image src={images.logo02} width={32} height={32} alt="logo" />
            <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-2">
              IU Exchange
            </p>
          </div>
        </Link>
      </div>

      <div className="flex flex-initial flex-row justify-end">
      <div className="flex items-center mr-2">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
          <label htmlFor="checkbox" className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label">
            <i className="fas fa-sun  "> </i>
            <i className="fas fa-moon  "> </i>
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div>

        <div className="md:hidden flex">
          <MenuItems active={active} setActive={setActive} />
        </div>
      </div>

      <div className="hidden md:flex ml-2 ">
        {!isOpen
          ? (
            <Image
              src={images.menu}
              width={25}
              height={25}
              alt="menu"
              onClick={() => setIsOpen(!isOpen)}
              className={theme === 'light' ? 'filter invert' : undefined}
            />
          )
          : (
            <Image
              src={images.cross}
              width={20}
              height={20}
              alt="close"
              onClick={() => setIsOpen(!isOpen)}
              className={theme === 'light' ? 'filter invert' : undefined}
            />
          )}

        {isOpen && (
          <div className="fixed inset-0 top-65 dark:bg-nft-dark bg-white z-10 nav-h flex justify-between flex-col">
            <div className="flex-1 p-4">
              <MenuItems active={active} setActive={setActive} isMobile setIsOpen={setIsOpen} />
            </div>
          </div>
        )}
      </div>
        
    </nav>
  )
}

export default Navbar