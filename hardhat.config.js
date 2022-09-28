require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan");


  

const PRIVATE_KEY = process.env.PRIVATE_KEY
const API_KEY = process.env.API_KEY
const GOERLI_RPC_URL= process.env.GOERLI_RPC_URL
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    }
},
etherscan: {
  apiKey: API_KEY
},
solidity: "0.8.7"
};
