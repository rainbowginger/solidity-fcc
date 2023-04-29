require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const RPC_URL = process.env.SEPOLIA_RPC_URL;
const PVT_KEY = process.env.SEPOLIA_PVT_KEY;
const CHAIN_ID = process.env.SEPOLIA_CHAIN_ID;

// commented section is working
// const RPC_URL =
//     "https://eth-sepolia.g.alchemy.com/v2/SYu8cyWG0EOfcfZVehXUoPMXW91om6Hd";
// const PVT_KEY =
//     "privatekey";
// const CHAIN_ID = 11155111;

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
