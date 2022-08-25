//SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

interface Iwhitelist{
    function checkInWhitelist(bytes32[] calldata proof) view external returns (bool);

}