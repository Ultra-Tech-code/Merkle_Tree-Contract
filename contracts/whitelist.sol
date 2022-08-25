// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract Whitelist {

    bytes32 public merkleRoot;

    constructor(bytes32 _merkleRoot) {
        merkleRoot = _merkleRoot;
    }

    mapping(address => bool) public whitelistClaimed;

    function checkInWhitelist(bytes32[] calldata proof) public returns (bool) {
        require(!whitelistClaimed[msg.sender], "Address already claimed");
        //leaf-> hash of the claimimng address
        bytes32 leaf = keccak256(abi.encode(msg.sender));
        bool verified = MerkleProof.verify(proof, merkleRoot, leaf);
        whitelistClaimed[msg.sender] = true;
        return verified;
    }
    
}