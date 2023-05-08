require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("hardhat-gas-reporter");
require("solidity-coverage");
// require("@nomiclabs/hardhat-etherscan");
// require("@nomicfoundation/hardhat-verify");

const RPC_URL = process.env.S_RPC_URL;
const PVT_KEY = process.env.S_P_KEY;
const CHAIN_ID = 11155111;

// const CHAIN_ID=process.env.S_CHAIN_ID;

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        Sepolia: {
            url: RPC_URL,
            accounts: [PVT_KEY],
            chainId: CHAIN_ID,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            // accounts: [PVT_KEY],
            chainId: 31337,
        },
    },
    solidity: "0.8.18",
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-reporter.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: process.env.CMC_API_KEY,
        token: "AVAX",
    },
};

task("accounts", "Prints the list of accounts", async () => {
    const accounts = await ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});
