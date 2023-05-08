const { ethers } = require("hardhat");
// const { describe, beforeEach, it } = require("node:test");
const { assert, expect } = require("chai");
describe("SimpleStorage", function () {
    let storagefactory, Simplefactory;
    beforeEach(async function () {
        storagefactory = await ethers.getContractFactory("SimpleStorage");
        Simplefactory = await storagefactory.deploy();
    });
    it("Should start with 0", async function () {
        const defaultvalue = await Simplefactory.retrieve();
        const expectedValue = 0;
        assert.equal(defaultvalue.toString(), expectedValue);
    });
    it("input value equal to stored value", async function () {
        const storing = "55";
        await Simplefactory.store(storing);
        const retireve = await Simplefactory.retrieve();
        assert.equal(retireve, storing);
    });
});
