// imports

const { ethers, run, network } = require("hardhat")
const hre = require("hardhat");

// main functions
async function main() { 

    const { deployer } = await getNamedAccounts()
    const lottery = await ethers.getContract("lottery", deployer)
    console.log(`Got contract FundMe at ${lottery.address}`)
    console.log("Funding contract...")
    const transactionResponse = await lottery.addFund({
    value: ethers.utils.parseEther("0.1"),
  })
  await transactionResponse.wait()
  console.log("Funded!")
    if(network.config.chainId === 4 && process.env.API_KEY){
        console.log("verifying...")
        await lottery.deployTransaction.wait(6)
        verify(lottery.address,[])
    }
    
    
}
// verify functions
async function verify(contractAddress, args){
    console.log("verifying contract.....")
    try {
        await run("verify:verify", {
            Address:contractAddress, 
            constructorArguments : args})
    } catch (error) {
        if(e.toLowercase().includes("Already Exist!!")){
            console.log("Already Exist!")
        }
        else {
            console.log(e)
        }
    }
    
}
// error handle

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })

    module.exports.tags = ["all", "lottery"]
