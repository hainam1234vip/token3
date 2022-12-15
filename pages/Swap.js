import { ThemeProvider } from 'next-themes';
import { Navbar, Header, SwapComponent, Footer } from '../components';
import Script from 'next/script';



const Swap = () => {
  

  return (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      
      <div className="pt-65">
      <div className="flex justify-center sm:px-4 p-8">
          <Header />
        </div>
      </div>
      <div className="pt-5">
      <div className="flex justify-center sm:px-4 p-8">
          <SwapComponent />
        </div>
      </div>

      <Script src="https://kit.fontawesome.com/e22d47212d.js" crossOrigin="anonymous" />
    </div>
  </ThemeProvider>

  );
}
export default Swap;
