// API key: 0x90a4DE7904A7293F3Cd5B1074Fc333AAEbdD2883
// https://eth-goerli.g.alchemy.com/v2/PysrWx5vk0520UmOxnNlkyVREs-7tiD0
// private key: fbb467957f13a858903c69cc587b9b61a149c6c2fc225532de8a04ba9edc9659

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://goerli.infura.io/v3/c757fd8cf1954e83b080504791f91203',
      accounts: ['fbb467957f13a858903c69cc587b9b61a149c6c2fc225532de8a04ba9edc9659'],
    },
  },
};