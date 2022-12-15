import { ThemeProvider } from 'next-themes';
import { Navbar, Footer, Welcome, LogoCompany, Services, Transactions, Banner, Stats } from '../components';
import Script from 'next/script';
import { TransactionProvider } from '../context/TransactionContext';



const Home = () => (
  <TransactionProvider>
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
          </div>
        </div>
        <div className="flex justify-center items-start w-full">
              <Stats />
        </div>
    </div>
    <div className="border-t dark:border-nft-black-1 border-nft-gray-1 ">
      <Welcome />
    </div>
        <div className="flex justify-center items-start w-full border-t dark:border-nft-black-1 border-nft-gray-1 ">
          <Transactions />
        </div>
        <div className="flex justify-center items-start w-full border-t dark:border-nft-black-1 border-nft-gray-1 ">
          <LogoCompany />
        </div>
          <Footer />

          <Script src="https://kit.fontawesome.com/e22d47212d.js" crossOrigin="anonymous" />
    </div>
  </ThemeProvider>
  </TransactionProvider>

);
export default Home;
