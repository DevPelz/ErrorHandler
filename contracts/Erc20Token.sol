// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyMetaCrafterToken is ERC20 {
    address public owner;

    constructor() ERC20("MyMetaToken", "MMT") {
        owner = msg.sender;
    }

    function mint(address _to, uint _amount) public {
        require(msg.sender == owner, "Not Owner");
        _mint(_to, _amount * 1e18);
    }

    function burn(uint _amount) public {
        require(balanceOf(msg.sender) >= _amount, "Insufficient balance");
        _burn(msg.sender, _amount);
    }
}
