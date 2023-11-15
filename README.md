## Overview

This smart contract, deployed on the PELZ network at the contract address `0xE3573540ab8A1C4c754Fd958Dc1db39BBE81b208`, serves as a vault for managing deposits and withdrawals of a specified ERC-20 token. Users can deposit tokens, minting shares in proportion to the deposited amount, and later withdraw a corresponding amount of tokens based on the shares they hold.

## Contract Details

- **Contract Address:** `0xE3573540ab8A1C4c754Fd958Dc1db39BBE81b208`
- **Network:** PELZ
- **License:** MIT

## Vault Functionality

### 1. Deposit Function

Users can deposit ERC-20 tokens into the vault by calling the `deposit` function. This function calculates the number of shares to mint based on the deposited amount and the current total supply of shares.

```solidity
function deposit(uint _amount) external
```

### 2. Withdraw Function

Users can withdraw their tokens from the vault by calling the `withdraw` function. This function calculates the amount to withdraw based on the number of shares burned and the current total supply of shares.

```solidity
function withdraw(uint _shares) external
```

### 3. ERC-20 Interface

The contract includes an interface for ERC-20 functionality, providing basic token operations like checking balances, transferring tokens, and approving token transfers.

```solidity
interface IERC20 {
    // ERC-20 functions...
}
```

## Usage Guidelines

1. **Token Approval:**
   Before depositing, ensure that you have approved the contract to spend your ERC-20 tokens. Use the ERC-20 `approve` function to grant the necessary permission.

2. **Deposit:**
   Call the `deposit` function with the desired amount of tokens to mint corresponding shares.

3. **Withdraw:**
   Call the `withdraw` function with the number of shares to burn and receive the proportional amount of tokens.

4. **Monitor Balances:**
   Keep track of your token balances and shares to manage deposits and withdrawals effectively.

## Disclaimer

- This smart contract is provided under the MIT license, and users are encouraged to review and understand the code before interacting with it.
- Exercise caution and perform thorough testing when using smart contracts on the blockchain.
- The contract is deployed on the PELZ network; ensure compatibility before interacting.
