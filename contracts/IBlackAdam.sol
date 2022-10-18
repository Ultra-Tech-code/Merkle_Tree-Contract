//SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

interface IBlackadam{
    //function checkInWhitelist(bytes32[] calldata proof) view external returns (bool);
    function safeMint(address to) external;

}