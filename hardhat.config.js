require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

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
    },
    solidity: "0.8.18",
};

task("accounts", "Prints the list of accounts", async () => {
    const accounts = await ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});
