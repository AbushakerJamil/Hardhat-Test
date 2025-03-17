const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("SimpleStorage", () => {
  let simpleStorage, simpleStorageFac
    beforeEach(async () => {
      simpleStorageFac = await ethers.getContractFactory("SimpleStorage")
      simpleStorage = await simpleStorageFac.deploy()
    })

    it("Should start with a favorite number of 0", async () => {
      const currentVal = await simpleStorage.retrieve()
      const expetVal = "0"

      assert.equal(currentVal.toString(), expetVal)
    })
    it("Should start with a favorite number of 0", async () => {
      const currentVal = await simpleStorage.retrieve()
      const expetVal = "0"

      assert.equal(currentVal.toString(), expetVal)
    })
})