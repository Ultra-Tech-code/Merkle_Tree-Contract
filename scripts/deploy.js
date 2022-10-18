
const hre = require("hardhat");



async function main() {
  //it requires that the merkle root.js script must have been run and the merkle root has been gotten
  //note@dev merkleroot is the same as roothash
  const merkleroot = "0xeec2d0e66378d86fe6ea95a6924ff891321ecb6ff1e723a5bf35ab0dbff1d5e6";

  /***************DEployed NFT********************* */
  const nftDeploy = await hre.ethers.getContractFactory("BlackAdam");
  const nftdeploy = await nftDeploy.deploy();
  await nftdeploy.deployed();
  console.log( `my contract is deployed to ${nftdeploy.address}`);

/*************Deployed whitelist contract****************** */
  const Whitelist = await hre.ethers.getContractFactory("Whitelist");
  const whitelist = await Whitelist.deploy(merkleroot, nftdeploy.address);
  await whitelist.deployed();

  console.log( `my contract is deployed to ${whitelist.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
