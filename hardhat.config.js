require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter")

const COINMARKETCAP = proccess.env.COINMARKETCAP
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat", 
  solidity: "0.8.8",
  gasReporter: {
    enable: true,
    outputFile:"gas-reporter.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap:
  }
};
