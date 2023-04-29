const { ethers } = require("hardhat");

async function main() {
    const simplestoragefactory = await ethers.getContractFactory(
        "SimpleStorage"
    );
    console.log("deploying....");
    const deployedStorage = await simplestoragefactory.deploy();
    await deployedStorage.deployed();
    console.log(`deployed to:${deployedStorage.address}`);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
