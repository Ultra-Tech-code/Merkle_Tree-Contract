const { ethers } = require("hardhat");
const keccak256 = require("keccak256");

  //import the merkletree result from merklerrot.js
  //import { merkleTree } from "./merkleroot";
  const {merkleTree} = require("./merkleroot");
  // const merkleres = merkleTree;

  async function main() {
   
    const addressToVerify = "0x311350f1c7Ba0F1749572Cc8A948Dd7f9aF1f42a";
   
    const CONTRACTADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const Iwhitelist = await ethers.getContractAt("Iwhitelist", CONTRACTADDRESS);

    //hashed the adddress 
    const leaf = keccak256(addressToVerify);
    console.log("leaf --", leaf);
    // `getHexProof` returns the neighbour leaf and all parent nodes hashes that will
    // be required to derive the Merkle Trees root hash.
    console.log("merkle tre---", merkleTree)
    const proof = merkleTree.getHexProof(leaf);
    console.log("proof result ----", proof);

    // Provide the Merkle Proof to the contract, and ensure that it can verify
    // that this leaf node was indeed part of the Merkle Tree
    let verified = await Iwhitelist.checkInWhitelist(proof);
    console.log("checked1:------", verified)
    
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});