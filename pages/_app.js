import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css'

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { infuraProvider } from 'wagmi/providers/infura'

const { chains, provider } = configureChains(
  [chain.goerli],
  [
    infuraProvider({
      apiKey: 'c757fd8cf1954e83b080504791f91203',
    }),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'Uniswap',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})


const MyApp = ({ Component, pageProps }) => (
  <>
    <header>
      <title>IU Exchange</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </header>

    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
    
  </>
);

export default MyApp;