// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const weiAmount = (await deployer.getBalance()).toString();
  
  console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));

 // make sure to replace the "Buildoooor" reference 
 //with your own ERC-20 name
  const Token = await ethers.getContractFactory("MKT");
  const token = await Token.deploy();

// log the address of the Contract in our console
  console.log("Token address:", token.address);
  
//obtain the Constructor Arguments
    console.log("constructor args:" + contract.interface.encodeDeploy([]));

// Show the contract info.
    const contractAddress = contract.address;
    console.log(`${artifact.contractName} was deployed to ${contractAddress}`);

// Verify contract code
  await hrtime.run("verify:verify", {
    address: token.address,
    constructorArguments: []
  });    
}

// run main, catch error, if any, and log in console
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});