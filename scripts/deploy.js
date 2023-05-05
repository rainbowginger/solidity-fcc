const { ethers, run, network } = require("hardhat");

async function main() {
    const simplestoragefactory = await ethers.getContractFactory(
        "SimpleStorage"
    );
    console.log("deploying....");
    const deployedStorage = await simplestoragefactory.deploy();
    await deployedStorage.deployed();
    console.log(`deployed to:${deployedStorage.address}`);
    // console.log(network.config);
    // if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
    //     await deployedStorage.deployTransaction.wait(6);
    //     await verify(deployedStorage.address, []);
    // }
    const StoredValue = await deployedStorage.retrieve();
    console.log(`Storedvalue: ${StoredValue}`);
    const Storingvalue = await deployedStorage.store(9);
    await deployedStorage.deployTransaction.wait(3);
    console.log(`StoringContract: ${Storingvalue}`);
    const UpdatedValue = await deployedStorage.retrieve();
    console.log(`UpdatedValue:${UpdatedValue}`);
}

async function verify(contractAddress, args) {
    console.log("verifing contract");
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        });
    } catch (e) {
        if (e.message.toLowerCase().includes("Already verified")) {
            console.log("Already verified");
        } else {
            console.log(e);
        }
    }
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
