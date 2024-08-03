// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Intermediary {
    address public constant addr = 0xd3A854530C40D856e48B5b6E67f9c2a7f0bcBF9e;

    function callOtherContract() public {
        (bool s, ) = addr.call(abi.encodeWithSignature("attempt()"));
        require(s, "Call failed");
    }
}
