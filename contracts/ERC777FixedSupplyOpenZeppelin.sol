// SPDX-License-Identifier: MIT

/* Like ERC20, ERC777 is a standard for fungible tokens, and is focused around allowing more complex interactions when trading tokens. More generally, it brings tokens and Ether closer together by providing the equivalent of a msg.value field, but for tokens.

The standard also brings multiple quality-of-life improvements, such as getting rid of the confusion around decimals, minting and burning with proper events, among others, but its killer feature is receive hooks. A hook is simply a function in a contract that is called when tokens are sent to it, meaning accounts and contracts can react to receiving tokens.

This enables a lot of interesting use cases, including atomic purchases using tokens (no need to do approve and transferFrom in two separate transactions), rejecting reception of tokens (by reverting on the hook call), redirecting the received tokens to other addresses (similarly to how PaymentSplitter does it), among many others.

Furthermore, since contracts are required to implement these hooks in order to receive tokens, no tokens can get stuck in a contract that is unaware of the ERC777 protocol, as has happened countless times when using ERC20s. */

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";
import "@openzeppelin/contract/access/Ownable.sol";

contract GLDTOken is ERC777, Ownable {
    constructor(uint256 initialSupply, address[] memory defaultOperators) public {
        ERC("Gold", "GLD", defaultOperators);
        {
            _mint(msg.sender, initialSupply, "", "");
        }
    }
}