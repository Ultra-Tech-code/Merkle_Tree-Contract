//const { expect } = require("chai");
const { ethers } = require("hardhat");
const keccak256 = require("keccak256");
const { MerkleTree } = require("merkletreejs");



    const list = [
      "0x12896191de42EF8388f2892Ab76b9a728189260A",
      "0x311350f1c7Ba0F1749572Cc8A948Dd7f9aF1f42a",
      "0x29FCA76dE871fEC853e52c32125C21e6512bB6De",
      "0xad9E66676C51EaF7609eC736A4F87aFd3072C75d"
    ]

    // Create the Merkle Tree using the hashing algorithm `keccak256`
    // Make sure to sort the tree so that it can be produced deterministically regardless
    // of the order of the input list
    const leafNodes = list.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true});
    // Compute the Merkle Root
    const root = merkleTree.getHexRoot();
    //const leaf = keccak256(abi.encode(msg.sender));
    const proof = merkleTree.getHexProof(leafNodes);
    console.log('Whitelist Merkle Tree\n', proof)
    console.log('Whitelist Merkle Tree\n', merkleTree.toString());
    console.log("Root Hash: ", root);
    module.exports = {merkleTree};

  
    

    