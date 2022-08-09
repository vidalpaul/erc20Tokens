// contracts/BoxV2.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BoxV2 {
    // ... code from Box.sol

    // Increments the stored value by 1
    function increment() public {
        _value = _value + 1;
        emit ValueChanged(_value);
    }
}