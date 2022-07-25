// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import '@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract ERC20BurnableOpenZeppelin is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("Burnable", "BRB") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}