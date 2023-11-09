// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract DisplayData {
    address public owner;
    uint public num;

    constructor() {
        owner = msg.sender;
    }

    function changeNumber(uint _value) public {
        require(msg.sender == owner, "only owner can call this function");
        num = _value;
    }

    function viewNumber() public view returns (uint) {
        return num;
    }
}
