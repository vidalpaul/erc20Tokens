// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "solmate/src/tokens/ERC20.sol";

contract ERC20Solmate is ERC20 {
    constructor() ERC20("Solmate", "SMT", 18) {}
}