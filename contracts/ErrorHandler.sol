// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ErrorHandler {
    address public owner;
    uint num;

    constructor() {
        owner = msg.sender;
    }

    function viewOwner() public view returns (address) {
        require(msg.sender == owner, "Not the owner");
        return owner;
    }

    function changeOwner(address _newOwner) public {
        if (msg.sender != owner) {
            revert("Not Owner");
        }
        owner = _newOwner;
    }

    function testAssert() public view {
        assert(num == 0);
    }
}
