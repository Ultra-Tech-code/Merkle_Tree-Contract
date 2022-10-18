// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "./IBlackAdam.sol";

contract Whitelist {

    bytes32 public merkleRoot;
    address public NFTaddress;

    constructor(bytes32 _merkleRoot, address nftaddr) {
        merkleRoot = _merkleRoot;
        NFTaddress = nftaddr;
    }

    mapping(address => bool) public whitelistClaimed;

    function checkInWhitelist(bytes32[] calldata proof) public returns (string memory) {
        require(!whitelistClaimed[msg.sender], "Address already claimed");

        //leaf-> hash of the claimimng address
        bytes32 leaf = keccak256(abi.encode(msg.sender));

        bool verified = MerkleProof.verify(proof, merkleRoot, leaf);
        if(verified == true){
            IBlackadam(NFTaddress).safeMint(msg.sender);
            whitelistClaimed[msg.sender] = true;
            return "minted succesfully";
        } else {

            return "not whitelisted";
        } 

    }
    
}