import { useRef} from 'react';
import { useTheme, ThemeProvider } from 'next-themes';
import { Navbar, Footer, Banner, CreatorCard } from '../components';
import Script from 'next/script';
import images from '../assets';
import Image from 'next/image';


const Ecosystem = () => {
  const parentRef  = useRef(null);
  const scrollRef  = useRef(null);
  const  { theme }  = useTheme();

  const handleScroll = (direction) => {
    const { current } = scrollRef;

    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      
      <div className="pt-65">
      <div className="flex justify-center sm:px-4 p-8">
          <div className="w-full midmd:w-4/5">
            <Banner
              name="Discover, collect, and exchange currencies on IU Exchange"
              parentStyles="justify-start mb-7 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
              childStyles="md:text-3xl sm:text-2xl xs:text-xl text-left"
            />

            <div >
              <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">Best Members</h1>

              <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
                <div className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none" ref={scrollRef}>
                {[1, 2, 3, 4, 5, 6 , 7].map((i) => (
                  <CreatorCard
                    key={`creator-${i}`}
                    rank={i}
                    creatorImage={images[`creator${i}`]}
                    creatorEths={10 - i * 0.534}
                  />
                ))}
                <>
                  <div onClick={() => handleScroll('left')} className ="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer left-0">
                    <Image src={images.left} alt= "left" className={theme === 'light' &&'filter invert'}/>
                  </div>
                  <div onClick={() => handleScroll('right')} className ="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer right-0">
                    <Image src={images.right} alt= "left" className={theme === 'light' && 'filter invert'}/>
                  </div>
                </>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <Footer />

      <Script src="https://kit.fontawesome.com/e22d47212d.js" crossOrigin="anonymous" />
    </div>
  </ThemeProvider>

  );
}
export default Ecosystem;
